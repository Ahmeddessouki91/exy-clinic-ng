require('./config/config');
const app = require('./server');
const http = require('http');


const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, console.log(`Server is listening on port ${port}`));