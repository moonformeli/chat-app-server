import http from 'http';

import cors from 'cors';
import debug from 'debug';
import express from 'express';
import * as WebSocket from 'ws';

import { users } from './fixtures/user/users';
import { IUser } from './models/user/IUser';

const log = debug('zigzag:Application');
const PORT = process.env.PORT || 8999;

const app = express();

app.use(cors());
app.get('/list', (_, res) => {
  return res.send(JSON.stringify(users));
});

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  //connection is up, let's add a simple simple event
  ws.on('message', (message: string) => {
    //log the received message and send it back to the client
    log('received: %s', message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send('Hi there, I am a WebSocket server');
});

//start our server
server.listen(PORT, () => {
  log(`Server started on port ${PORT} :)`);
});
