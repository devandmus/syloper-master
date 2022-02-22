require('dotenv').config();
require('./database/connection');
const config = require('./config');
const logger = require('./config/logger');
const app = require('./src/app');

const PORT = process.env.PORT || config.PORT;
const server = app.listen(PORT);

logger.info(`Listening on ${ PORT }`);

module.exports = server;
