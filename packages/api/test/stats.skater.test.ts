import {describe, it, expect} from 'vitest';
import {NHLClient} from '../src/index.js';

const client = new NHLClient();
const SEASON_PARAMS = {
  cayenneExp: 'gameTypeId=2 and seasonId<=20232024 and seasonId>=20232024',
  limit: 10,
};

describe('SkaterStatsAPI', () => {
  it('getSummary returns data array with skater stats', async () => {
    const data = await client.stats.skaters.getSummary(SEASON_PARAMS);
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data.length).toBeGreaterThan(0);
    const [skater] = data.data;
    expect(skater).toHaveProperty('playerId');
    expect(skater).toHaveProperty('goals');
    expect(skater).toHaveProperty('assists');
    expect(skater).toHaveProperty('points');
  });

  it('getBios returns biographical data', async () => {
    const data = await client.stats.skaters.getBios({
      ...SEASON_PARAMS,
      limit: 5,
    });
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data[0]).toHaveProperty('playerId');
  });

  it('getTimeOnIce returns TOI data', async () => {
    const data = await client.stats.skaters.getTimeOnIce(SEASON_PARAMS);
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
  });

  it('getPowerPlay returns power play data', async () => {
    const data = await client.stats.skaters.getPowerPlay(SEASON_PARAMS);
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
  });
});
