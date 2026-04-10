import type {NHLClient, TeamAbbrev} from '@nhljs/api';

function toDateString(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function yesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return toDateString(d);
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
  targetDate: string,
): number | undefined {
  const day = days.find((d) => d.date === targetDate);
  if (!day) {
    return undefined;
  }
  const game = day.games.find(
    (g) => g.awayTeam.abbrev === team || g.homeTeam.abbrev === team,
  );
  return game?.id;
}

export async function findGameForTeam(
  client: NHLClient,
  team: TeamAbbrev,
): Promise<number | undefined> {
  const today = toDateString(new Date());
  const schedule = await client.schedule.getNow();

  const todayGameId = findTeamGameInDays(schedule.gameWeek, team, today);
  if (todayGameId !== null) {
    return todayGameId;
  }

  const yesterday = yesterdayString();
  const ydaySchedule = await client.schedule.getByDate(yesterday);
  return findTeamGameInDays(ydaySchedule.gameWeek, team, yesterday);
}
