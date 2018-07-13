
const {PORT} = require('./config.js');
const server = require('./server.js');
server.runServer(process.env.DB_URL, PORT);
