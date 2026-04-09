import {describe, it, expect} from 'vitest';
import {NHLClient} from '../src/index.js';

const client = new NHLClient();
const SEASON_PARAMS = {
  cayenneExp: 'gameTypeId=2 and seasonId<=20232024 and seasonId>=20232024',
  limit: 10,
};

describe('GoalieStatsAPI', () => {
  it('getSummary returns goalie data', async () => {
    const data = await client.stats.goalies.getSummary(SEASON_PARAMS);
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data.length).toBeGreaterThan(0);
    const [goalie] = data.data;
    expect(goalie).toHaveProperty('playerId');
    expect(goalie).toHaveProperty('gamesPlayed');
    expect(goalie).toHaveProperty('savePct');
    expect(goalie).toHaveProperty('goalsAgainstAverage');
  });

  it('getAdvanced returns advanced goalie metrics', async () => {
    const data = await client.stats.goalies.getAdvanced(SEASON_PARAMS);
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
  });

  it('getBios returns goalie biographical data', async () => {
    const data = await client.stats.goalies.getBios({
      ...SEASON_PARAMS,
      limit: 5,
    });
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data[0]).toHaveProperty('playerId');
  });
});
