import {describe, it, expect} from 'vitest';
import {NHLClient} from '../src/index.js';

const client = new NHLClient();

describe('StandingsAPI', () => {
  it('getByDate returns standings array', async () => {
    const data = await client.standings.getByDate('2024-01-15');
    expect(data).toHaveProperty('standings');
    expect(Array.isArray(data.standings)).toBe(true);
    expect(data.standings.length).toBeGreaterThan(0);
  });

  it('getNow returns standings array', async () => {
    const data = await client.standings.getNow();
    expect(data).toHaveProperty('standings');
    expect(Array.isArray(data.standings)).toBe(true);
    expect(data.standings.length).toBeGreaterThan(0);
  });

  it('standing entries have expected fields', async () => {
    const data = await client.standings.getNow();
    const [team] = data.standings;
    expect(team).toHaveProperty('teamAbbrev');
    expect(team).toHaveProperty('points');
    expect(team).toHaveProperty('wins');
    expect(team).toHaveProperty('losses');
    expect(team).toHaveProperty('gamesPlayed');
  });

  it('getSeasonManifest returns seasons array', async () => {
    const data = await client.standings.getSeasonManifest();
    expect(data).toHaveProperty('seasons');
    expect(Array.isArray(data.seasons)).toBe(true);
    expect(data.seasons.length).toBeGreaterThan(0);
  });
});
