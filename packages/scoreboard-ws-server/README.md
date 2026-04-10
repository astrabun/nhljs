# @nhljs/scoreboard-ws-server

A WebSocket server that streams live NHL game center data for a given team. Clients subscribe to a team by 3-letter abbreviation and receive polling updates every second.

## Usage

### Docker

See [`astrabun/nhl-scores-ws`](https://github.com/astrabun/nhl-scores-ws) for a Docker image / example compose file.

```
docker run --rm --name nhl-scores -p 8080:8080 ghcr.io/astrabun/nhl-scores-ws:latest
```

### Standalone (dev)

```sh
pnpm dev
# or with a custom port:
PORT=9000 pnpm dev
```

### As a library

```ts
import {ScoreboardWSServer} from '@nhljs/scoreboard-ws-server';

const server = new ScoreboardWSServer({port: 8080});

// later:
server.close();
```

## Protocol

### Subscribe (client --> server)

Send a single JSON message after connecting:

```json
{"type": "subscribe", "team": "PHI"}
```

The team code is case-insensitive (`phi`, `PHI`, and `Phi` all work).

### Update (server --> client)

Sent every ~1 second while a game is found:

```json
{
  "type": "update",
  "team": "PHI",
  "gameId": 2024020512,
  "data": { ... }
}
```

`data` is the full response from the NHL game center landing endpoint ([`LandingResponse`](../api/src/types/gamecenter.ts)).

### Error (server --> client)

Sent when no game is found for the team today or yesterday. The server retries every 30 seconds.

```json
{
  "type": "error",
  "team": "PHI",
  "message": "No game found for PHI today or yesterday"
}
```

## Game resolution

On each new subscription, the server:

1. Checks today's schedule for a game involving the team
2. If none found, checks yesterday's schedule
3. If still none found, sends an error frame and retries every 30 seconds

Multiple subscribers for the same team share a single poller. The poller is stopped and cleaned up automatically when the last subscriber disconnects.

## Environment

| Variable | Default | Description    |
| -------- | ------- | -------------- |
| `PORT`   | `8080`  | WebSocket port |
