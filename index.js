'use strict';

require('dotenv').config();
// const { db } = require('./src/models');
const server = require('./src/auth/routes');
const app = require('./src/server.js');
const { db } = require('./src/models/index');
const PORT = process.env.PORT || 3001

db.sync().then(() => {
  app.start(process.env.PORT || 3001);
});
