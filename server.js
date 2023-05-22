import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  // res.send('Hello Express');
  res.render('index', {
    content: 'Hello  Express and EJS!'
  });
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});

