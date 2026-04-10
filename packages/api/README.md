# @nhljs/api

Zero-dependency TypeScript client for the NHL API.

## Installation

```sh
npm install @nhljs/api
```

## Usage

```ts
import {NHLClient} from '@nhljs/api';

const client = new NHLClient();
```

All methods return typed promises.

## Example — Today's Games

```ts
import {NHLClient} from '@nhljs/api';

const client = new NHLClient();
const schedule = await client.schedule.getNow();

const [today] = schedule.gameWeek;

if (!today || today.numberOfGames === 0) {
  console.log('No games scheduled today.');
  process.exit(0);
}

console.log(
  `Games for ${today.date} (${today.numberOfGames} game${today.numberOfGames === 1 ? '' : 's'}):\n`,
);

for (const game of today.games) {
  const away = `${game.awayTeam.abbrev} ${game.awayTeam.score ?? ''}`.trim();
  const home = `${game.homeTeam.abbrev} ${game.homeTeam.score ?? ''}`.trim();
  const state = game.gameState;

  let status: string;
  if (state === 'FUT' || state === 'PRE') {
    const time = new Date(game.startTimeUTC).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
    });
    status = time;
  } else if (state === 'LIVE' || state === 'CRIT') {
    const period = game.periodDescriptor?.number ?? '?';
    const periodType = game.periodDescriptor?.periodType;
    let label: string;
    if (periodType === 'OT') {
      label = 'OT';
    } else if (periodType === 'SO') {
      label = 'SO';
    } else {
      label = `P${period}`;
    }
    status = `LIVE (${label})`;
  } else {
    const ending = game.gameOutcome?.lastPeriodType;
    status = ending && ending !== 'REG' ? `Final/${ending}` : 'Final';
  }

  console.log(`  ${away.padEnd(10)} @ ${home.padEnd(10)}  ${status}`);
}
```

**Output:**

```
Games for 2026-04-09 (14 games):

  TOR        @ NYI         6:45 PM EDT
  CBJ        @ BUF         7:00 PM EDT
  TBL        @ MTL         7:00 PM EDT
  FLA        @ OTT         7:00 PM EDT
  PHI        @ DET         7:00 PM EDT
  PIT        @ NJD         7:00 PM EDT
  WPG        @ STL         8:00 PM EDT
  CAR        @ CHI         8:30 PM EDT
  MIN        @ DAL         9:00 PM EDT
  CGY        @ COL         9:00 PM EDT
  NSH        @ UTA         9:00 PM EDT
  SJS        @ ANA         10:00 PM EDT
  VGK        @ SEA         10:00 PM EDT
  VAN        @ LAK         10:30 PM EDT
```

## API Reference

### Schedule

```ts
client.schedule.getNow(); // today's schedule
client.schedule.getByDate('2024-01-15'); // schedule for a date
client.schedule.getTeamSeason('TOR', '20232024'); // full season for a team
client.schedule.getTeamMonth('TOR', '2024-01'); // team schedule for a month
client.schedule.getTeamWeekNow('TOR'); // team's current week
client.schedule.getPlayoffCarousel('20232024'); // playoff series overview
client.schedule.getPlayoffBracket(2024); // playoff bracket
```

### Standings

```ts
client.standings.getNow(); // current standings
client.standings.getByDate('2024-01-15'); // standings at a date
client.standings.getSeasonManifest(); // metadata for all seasons
```

### Game Center

```ts
client.gameCenter.getBoxscore(gameId); // full boxscore
client.gameCenter.getPlayByPlay(gameId); // play-by-play events
client.gameCenter.getLanding(gameId); // game matchup page
client.gameCenter.getRightRail(gameId); // season series stats
client.gameCenter.getScoresNow(); // scores for today
client.gameCenter.getScores('2024-01-15'); // scores for a date
```

### Players

```ts
client.players.getLanding(playerId); // career stats & bio
client.players.getGameLog(playerId, '20232024', 2); // game-by-game log
client.players.search('Sidney Crosby'); // search by name
```

Game type: `1` = Preseason, `2` = Regular Season, `3` = Playoffs.

### Roster

```ts
client.roster.getTeam('TOR', '20232024'); // full team roster
client.roster.getProspects('TOR'); // team prospects
```

### Stats

The stats API supports filtering via [Cayenne expressions](https://cayenne.apache.org/):

```ts
const params = {
  cayenneExp: 'gameTypeId=2 and seasonId<=20232024 and seasonId>=20232024',
  sort: '[{"property":"points","direction":"DESC"}]',
  limit: 25,
};

client.stats.skaters.getSummary(params); // skater stats
client.stats.skaters.getTimeOnIce(params);
client.stats.skaters.getPowerPlay(params);
client.stats.skaters.getBios(params);

client.stats.teams.getSummary(params); // team stats
client.stats.teams.getPowerPlay(params);
client.stats.teams.getPenaltyKill(params);

client.stats.goalies.getSummary(params); // goalie stats
client.stats.goalies.getAdvanced(params);
```

### EDGE Analytics

```ts
client.edge.getSkaterDetail(playerId); // current season
client.edge.getSkaterDetail(playerId, '20232024', 2); // specific season
client.edge.getShotSpeed(playerId);
client.edge.getSkatingSpeed(playerId);
```

### Misc

```ts
client.misc.getSeasons(); // all seasons with metadata
client.misc.getFranchises(); // all franchises (historical)
client.misc.getCountries(); // country reference data
client.misc.getDraft(params); // draft data
client.misc.getGlossary(); // stat field definitions
```

## Types

All response types are exported:

```ts
import type {
  ScheduleResponse,
  StandingsResponse,
  BoxscoreResponse,
  PlayerLandingResponse,
  StatsParams,
} from '@nhljs/api';
```

## Notes

- Season IDs use the format `YYYYYYYY` — e.g. `'20232024'` for the 2023–24 season.
- Team abbreviations are 3-letter codes — e.g. `'TOR'`, `'WSH'`, `'LAK'`.
- All requests use native `fetch`. Node.js 18+ required.
