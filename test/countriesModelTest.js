const mocha = require('mocha');
const assert = require('assert');
const { getCountries } = require('../server/models/Countries');

describe('countries model', () => {
    describe('getCountries', () => {
        it('returns a list of countries', async () => {
            const actual = (await getCountries())[0];

            const expected = {
                country: 'Afghanistan',
                iso3: 'AFG',
            };

            assert.deepStrictEqual(expected, actual);
        });
    });
});
