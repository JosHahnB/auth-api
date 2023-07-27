'use strict';

require('dotenv').config();
// const { db } = require('./src/models');
const server = require('./auth-server/src/auth/routes');
const app = require('./auth-server/src/server.js');
const { db } = require('./auth-server/src/models/index');
const PORT = process.env.PORT || 3001

db.sync().then(() => {
  app.start(process.env.PORT || 3001);
});
