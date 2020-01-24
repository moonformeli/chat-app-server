import express from 'express';
import http from 'http';
import * as WebSocket from 'ws';
import debug from 'debug';

const log = debug('zigzag:Application');
const PORT = process.env.PORT || 8999;

const app = express();

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
