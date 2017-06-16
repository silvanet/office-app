
const {DATABASE_URL, PORT} = require('./config.js');
console.log(DATABASE_URL);
const server = require('./server.js');
server.runServer(process.env.MONGO, PORT);
