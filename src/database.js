import fs from 'node:fs/promises';
import { randomUUID } from 'node:crypto';

const databasePath = new URL('../db.json', import.meta.url);

export class DataBase {
  #database = {};

  constructor() {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    try {
      const data = await fs.readFile(databasePath, 'utf8');
      this.#database = JSON.parse(data);
    } catch (err) {
      console.error('Error reading database:', err);
    }
  }

  async #persist() {
    await fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  select(table, search) {
    let data = this.#database[table] ?? [];
    if (search) {
      data = data.filter((row) => {
        return Object.entries(search).some(([key, value]) => {
          return row[key].includes(value);
        });
      });
    }
    return data;
  }

  insert(table, data) {
    const dataToSave = {
      id: randomUUID(),
      ...data,
      created_at: new Date(),
      completed_at: null,
      updated_at: new Date(),
    };

    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(dataToSave);
    } else {
      this.#database[table] = [dataToSave];
    }
    this.#persist();
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      for (const key in data) {
        if (!data[key]) {
          delete data[key];
        }
      }
      data.updated_at = new Date();
      this.#database[table][rowIndex] = Object.assign(
        {},
        this.#database[table][rowIndex],
        data,
      );
      this.#persist();
    }
  }
  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }
  selectOne(table, id) {
    return this.#database[table].find((row) => row.id === id);
  }
}
