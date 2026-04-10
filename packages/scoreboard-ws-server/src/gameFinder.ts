import type {NHLClient, TeamAbbrev} from '@nhljs/api';

function yesterdayString(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function findTeamGameInDays(
  days: {
    date: string;
    games: {
      id: number;
      awayTeam: {abbrev: string};
      homeTeam: {abbrev: string};
    }[];
  }[],
  team: TeamAbbrev,
): number | undefined {
  for (const day of days) {
    const game = day.games.find(
      (g) => g.awayTeam.abbrev === team || g.homeTeam.abbrev === team,
    );
    if (game) {
      return game.id;
    }
  }
  return undefined;
}

export async function findGameForTeam(
  client: NHLClient,
  team: TeamAbbrev,
): Promise<number | undefined> {
  // Search all days in the week to avoid UTC/local date mismatch (e.g. evening ET games)
  const schedule = await client.schedule.getNow();
  const weekGameId = findTeamGameInDays(schedule.gameWeek, team);
  if (weekGameId !== undefined) {
    return weekGameId;
  }

  // Fallback: explicitly check yesterday in case we're at a week boundary
  const ydaySchedule = await client.schedule.getByDate(yesterdayString());
  return findTeamGameInDays(ydaySchedule.gameWeek, team);
}
