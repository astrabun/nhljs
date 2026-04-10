import {ScoreboardWSServer} from './server.js';

const port = Number(process.env.PORT ?? 8080);
const server = new ScoreboardWSServer({port});

console.log(`Scoreboard WS server listening on ws://localhost:${port}`);
console.log('Connect and send: {"type":"subscribe","team":"PHI"}');

process.on('SIGINT', () => {
  console.log('\nShutting down...');
  server.close();
  process.exit(0);
});
