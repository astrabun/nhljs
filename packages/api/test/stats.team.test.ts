import {describe, it, expect} from 'vitest';
import {NHLClient} from '../src/index.js';

const client = new NHLClient();
const SEASON_PARAMS = {
  cayenneExp: 'gameTypeId=2 and seasonId<=20232024 and seasonId>=20232024',
};

describe('TeamStatsAPI', () => {
  it('getSummary returns team data', async () => {
    const data = await client.stats.teams.getSummary(SEASON_PARAMS);
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data.length).toBeGreaterThan(0);
    const [team] = data.data;
    expect(team).toHaveProperty('teamId');
    expect(team).toHaveProperty('gamesPlayed');
    expect(team).toHaveProperty('wins');
    expect(team).toHaveProperty('points');
  });

  it('getPowerPlay returns power play stats', async () => {
    const data = await client.stats.teams.getPowerPlay(SEASON_PARAMS);
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
  });

  it('getPenaltyKill returns penalty kill stats', async () => {
    const data = await client.stats.teams.getPenaltyKill(SEASON_PARAMS);
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
  });
});
