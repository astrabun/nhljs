import {describe, it, expect} from 'vitest';
import {NHLClient} from '../src/index.js';

const client = new NHLClient();

// A known completed game: 2024 Winter Classic (2023-24 season)
const KNOWN_GAME_ID = 2_023_020_001;

describe('GameCenterAPI', () => {
  it('getBoxscore returns expected structure', async () => {
    const data = await client.gameCenter.getBoxscore(KNOWN_GAME_ID);
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('homeTeam');
    expect(data).toHaveProperty('awayTeam');
    expect(data).toHaveProperty('playerByGameStats');
  });

  it('getPlayByPlay returns plays array', async () => {
    const data = await client.gameCenter.getPlayByPlay(KNOWN_GAME_ID);
    expect(data).toHaveProperty('plays');
    expect(Array.isArray(data.plays)).toBe(true);
    expect(data.plays.length).toBeGreaterThan(0);
  });

  it('getLanding returns game info', async () => {
    const data = await client.gameCenter.getLanding(KNOWN_GAME_ID);
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('homeTeam');
    expect(data).toHaveProperty('awayTeam');
  });

  it('getScoresNow returns current date and games', async () => {
    const data = await client.gameCenter.getScoresNow();
    expect(data).toHaveProperty('currentDate');
  });

  it('getScores by date returns games', async () => {
    const data = await client.gameCenter.getScores('2024-01-15');
    expect(data).toHaveProperty('currentDate');
  });
});
