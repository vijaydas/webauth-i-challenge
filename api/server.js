const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const session = require('express-session');

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

const sessionConfig = {
  name: "monkey",
  secret: "keep it secret, keep it safe!", // used to encrypt and decrypt
  resave: false,
  saveUninitialized: true, // true in dev, false in production
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false, // false in dev, in production should be true
    httpOnly: true, // block JS from access to cookies
  },
};

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(session(sessionConfig));

server.get('/', (req, res) => {
  res.send("It's alive!");
});

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;
