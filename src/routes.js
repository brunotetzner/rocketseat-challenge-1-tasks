import { DataBase } from "./database.js"
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new DataBase()

// Criar task
// listar tasks
// atualizar task por id
// remover task por id
// marcar como feita por id 
// Apagar
// importação de tasks por csv
export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const tasks = database.select('tasks')
    
      return res.end(JSON.stringify(tasks));
    }
  },
]