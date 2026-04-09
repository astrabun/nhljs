import {describe, it, expect} from 'vitest';
import {NHLClient} from '../src/index.js';

const client = new NHLClient();

describe('RosterAPI', () => {
  it('getTeam returns forwards, defensemen, and goalies', async () => {
    const data = await client.roster.getTeam('TOR', '20232024');
    expect(data).toHaveProperty('forwards');
    expect(data).toHaveProperty('defensemen');
    expect(data).toHaveProperty('goalies');
    expect(Array.isArray(data.forwards)).toBe(true);
    expect(data.forwards.length).toBeGreaterThan(0);
  });

  it('roster players have expected fields', async () => {
    const data = await client.roster.getTeam('TOR', '20232024');
    const [player] = data.forwards;
    expect(player).toHaveProperty('id');
    expect(player).toHaveProperty('firstName');
    expect(player).toHaveProperty('lastName');
    expect(player).toHaveProperty('positionCode');
  });

  it('getProspects returns forwards, defensemen, goalies', async () => {
    const data = await client.roster.getProspects('TOR');
    expect(data).toHaveProperty('forwards');
    expect(data).toHaveProperty('defensemen');
    expect(data).toHaveProperty('goalies');
  });
});
