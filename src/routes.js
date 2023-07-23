import { DataBase } from './database.js';
import { errorCodes } from './utils/error-codes.js';
import { buildRoutePath } from './utils/build-route-path.js';

const database = new DataBase();

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const tasks = database.select('task');

      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;

      const task = database.selectOne('task', id);
      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ err: errorCodes.taskNotFound }));
      }
      return res.end(JSON.stringify(task));
    },
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (!title) {
        return res
          .writeHead(400)
          .end(JSON.stringify({ err: errorCodes.titleIsRequired }));
      }

      if (!description) {
        return res
          .writeHead(400)
          .end(JSON.stringify({ err: errorCodes.titleIsRequired }));
      }

      database.insert('task', { title, description });

      return res.writeHead(201).end();
    },
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { title, description } = req.body;
      const { id } = req.params;

      const task = database.selectOne('task', id);
      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ err: errorCodes.taskNotFound }));
      }

      database.update('task', id, { title, description });

      return res.writeHead(204).end();
    },
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params;

      const task = database.selectOne('task', id);
      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ err: errorCodes.taskNotFound }));
      }

      database.update('task', id, { completed_at: new Date() });

      return res.writeHead(204).end();
    },
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;

      const task = database.selectOne('task', id);
      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ err: errorCodes.taskNotFound }));
      }
      database.delete('task', id);

      return res.writeHead(204).end();
    },
  },
];
