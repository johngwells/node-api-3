const express = 'express';
const helmet = require('helmet');

const postRouter = require('./posts/postRouter');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware
server.use(helmet());
server.use(logger);
server.use(express.json());

server.use("/api/posts", postRouter);

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`);
  next();
};

module.exports = server;
