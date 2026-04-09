# nhljs

TypeScript package for interacting with NHL data. Minimal dependencies, native fetch.

## Packages

| Package | Description |
|---|---|
| [`@nhljs/api`](packages/api) | NHL API client — schedule, standings, game center, players, stats |
| [`@nhljs/sample`](packages/sample) | Example using `@nhljs/api` |

## Quick start

```ts
import { NHLClient } from '@nhljs/api';

const client = new NHLClient();

// Today's schedule
const schedule = await client.schedule.getNow();

// Current standings
const standings = await client.standings.getNow();

// Player stats
const crosby = await client.players.getLanding(8_471_675);

// Skater stats with filters
const leaders = await client.stats.skaters.getSummary({
  cayenneExp: 'gameTypeId=2 and seasonId<=20232024 and seasonId>=20232024',
  sort: '[{"property":"points","direction":"DESC"}]',
  limit: 10,
});
```

See [`packages/api/README.md`](packages/api/README.md) for the full API reference.

Inspired by https://github.com/coreyjs/nhl-api-py; I also referenced similar resources for this project including https://github.com/erunion/sport-api-specifications/tree/master/nhl and https://gitlab.com/dword4/nhlapi/-/tree/master

## Development

```sh
pnpm install

pnpm lint          # oxlint
pnpm fmt           # oxfmt

pnpm -F @nhljs/api typecheck
pnpm -F @nhljs/api test
pnpm -F @nhljs/api build

pnpm -F @nhljs/sample start   # run the sample
```
