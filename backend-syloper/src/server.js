const config = require('./config');
const app = require('./app');
const logger = require('./config/logger');

const PORT = process.env.PORT || config.PORT;
const server = app.listen(PORT);

logger.info(`Listening on ${ PORT }`);

module.exports = server;
