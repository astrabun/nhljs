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
