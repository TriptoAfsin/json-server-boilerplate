const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();


const port = process.env.PORT || 5858;

server.use(middleware);
server.use(router);


server.listen(port);
console.log(`
Listening at port: ${port}
\n\n🟢 URL:http://localhost:${port}
\n\n🟣 Routes: http://localhost:${port}/users
`);
