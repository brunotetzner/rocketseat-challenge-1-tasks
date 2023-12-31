import http from 'node:http';
import { json } from './middlewares/json.js';
import { csvJSON } from './middlewares/csv.js';

import { routes } from './routes.js';
import { extractQueryParams } from './utils/extract-query-params.js';

console.log('\n STARTING...\n');

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (url.includes('csv')) {
    await csvJSON(req, res);
  } else {
    await json(req, res);
  }

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = req.url.match(route.path);
    const { query, ...params } = routeParams.groups;

    req.params = params;
    req.query = query ? extractQueryParams(routeParams.groups.query) : {};

    return route.handler(req, res);
  }
  return res.writeHead(404).end();
});

const port = 3333;
server.listen(port);
console.log(`APPLICATION RUNNING ON PORT ${port}`);
