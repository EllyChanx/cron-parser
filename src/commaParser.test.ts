import { handleComma } from './commaParser';

describe("Comma Parser", () => {

    it("give all the number base on the comma separated string", () => {
        expect(handleComma('6, 15, 22', 'hour')).toEqual([6, 15, 22]);
        expect(handleComma('11, 1', 'month')).toEqual([1, 11]);
    });

    it("return error if number is out of range", () => {
        expect(() => handleComma('0, 12', 'month')).toThrow('Value(s) provided for unit: month is our of range');
        expect(() => handleComma('1, 35', 'dayOfMonth')).toThrow('Value(s) provided for unit: dayOfMonth is our of range');
    });
});
