import {describe, it, expect} from 'vitest';
import {NHLClient} from '../src/index.js';

const client = new NHLClient();

describe('MiscAPI', () => {
  it('getCountries returns country data', async () => {
    const data = await client.misc.getCountries();
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data.length).toBeGreaterThan(0);
    expect(data.data[0]).toHaveProperty('countryCode');
    expect(data.data[0]).toHaveProperty('countryName');
  });

  it('getSeasons returns season data', async () => {
    const data = await client.misc.getSeasons();
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data.length).toBeGreaterThan(0);
    expect(data.data[0]).toHaveProperty('id');
  });

  it('getFranchises returns franchise data', async () => {
    const data = await client.misc.getFranchises();
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
    expect(data.data.length).toBeGreaterThan(0);
    expect(data.data[0]).toHaveProperty('id');
    expect(data.data[0]).toHaveProperty('fullName');
  });

  it('getGlossary returns glossary entries', async () => {
    const data = await client.misc.getGlossary();
    expect(data).toHaveProperty('data');
    expect(Array.isArray(data.data)).toBe(true);
  });
});
