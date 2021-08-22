import { handleDash } from './dashParser';

describe("Dash Parser", () => {

    it("give all the number base on the comma separated string", () => {
        expect(handleDash('6-9', 'hour')).toEqual([6, 7, 8, 9]);
        expect(handleDash('0-6', 'dayOfWeek')).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });

    it("return error if number is out of range", () => {
        expect(() => handleDash('11-13', 'month')).toThrow('Value(s) provided for unit: month is our of range');
        expect(() => handleDash('0-5', 'dayOfMonth')).toThrow('Value(s) provided for unit: dayOfMonth is our of range');
    });

    it("return error if range is not start before end", () => {
        expect(() => handleDash('10-5', 'month')).toThrow('Range provided for unit: month is the wrong way around');
    });
});
