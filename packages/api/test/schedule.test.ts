import {describe, it, expect} from 'vitest';
import {NHLClient} from '../src/index.js';

const client = new NHLClient();

describe('ScheduleAPI', () => {
  it('getByDate returns a schedule with gameWeek', async () => {
    const data = await client.schedule.getByDate('2024-01-15');
    expect(data).toHaveProperty('gameWeek');
    expect(Array.isArray(data.gameWeek)).toBe(true);
  });

  it('getNow returns a schedule with gameWeek', async () => {
    const data = await client.schedule.getNow();
    expect(data).toHaveProperty('gameWeek');
    expect(Array.isArray(data.gameWeek)).toBe(true);
  });

  it('getTeamSeason returns games array', async () => {
    const data = await client.schedule.getTeamSeason('TOR', '20232024');
    expect(data).toHaveProperty('games');
    expect(Array.isArray(data.games)).toBe(true);
  });

  it('getTeamMonth returns games array', async () => {
    const data = await client.schedule.getTeamMonth('TOR', '2024-01');
    expect(data).toHaveProperty('games');
    expect(Array.isArray(data.games)).toBe(true);
  });

  it('getTeamWeekNow returns games array', async () => {
    const data = await client.schedule.getTeamWeekNow('TOR');
    expect(data).toHaveProperty('games');
    expect(Array.isArray(data.games)).toBe(true);
  });

  it('getPlayoffCarousel returns rounds', async () => {
    const data = await client.schedule.getPlayoffCarousel('20232024');
    expect(data).toHaveProperty('rounds');
    expect(Array.isArray(data.rounds)).toBe(true);
  });
});
