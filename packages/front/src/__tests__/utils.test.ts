import { lolll } from '../utils';

/**
 * Test cases for #getOnlineControllers function
 * */
describe('#getOnlineControllers', function () {
    it('all expected', () => {
        const input = 'l0lll 8';
        const output = 'l0lll';
        expect(lolll(input)).toEqual(output);
    });
});
