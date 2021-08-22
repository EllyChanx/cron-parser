import { parser } from './parser';

describe("Parser", () => {

    it("take standard case and return in correct format", () => {
        expect(parser('*/15 0 3-5 * 1-5 /usr/bind/find')).toEqual('\n' +
            'minute              0 15 30 45\n' +
            'hour                0\n' +
            'day of month        3 4 5\n' +
            'month               1 2 3 4 5 6 7 8 9 10 11 12\n' +
            'day of week         1 2 3 4 5\n' +
            'command             /usr/bind/find\n');
    });

    it("return error if not enough arguments are provided", () => {
        expect(() => parser('*/15 0 3-5 * 1-5')).toThrowError('Cron parser requires at least 6 arguments');
    });

});
