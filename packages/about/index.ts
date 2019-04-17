import http from 'http';
import os from 'os';

console.log('About server starting...');
const handler = (req: any, res: any) => {
  console.log('Received request from ' + req.connection.remoteAddress);
  res.writeHead(200);
  res.end("You've hit " + os.hostname() + '\n');
};

const www = http.createServer(handler);
www.listen(8080);
