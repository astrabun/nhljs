import {describe, it, expect} from 'vitest';
import {NHLClient} from '../src/index.js';

const client = new NHLClient();

// Sidney Crosby
const PLAYER_ID = 8_471_675;

describe('PlayersAPI', () => {
  it('getLanding returns player bio and stats', async () => {
    const data = await client.players.getLanding(PLAYER_ID);
    expect(data).toHaveProperty('playerId', PLAYER_ID);
    expect(data).toHaveProperty('firstName');
    expect(data).toHaveProperty('lastName');
    expect(data).toHaveProperty('position');
  });

  it('getGameLog returns game log entries', async () => {
    const data = await client.players.getGameLog(PLAYER_ID, '20232024', 2);
    expect(data).toHaveProperty('gameLog');
    expect(Array.isArray(data.gameLog)).toBe(true);
  });

  it('search returns player results', async () => {
    const results = await client.players.search('Crosby');
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0]).toHaveProperty('name');
  });
});
