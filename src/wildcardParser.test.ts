import { handleWildcard } from './wildcardParser';

describe("Wildcard Parser", () => {

    it("give all values in range when input is *", () => {
        expect(handleWildcard('*', 'hour')).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
        expect(handleWildcard('*', 'month')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });

    it("give all possible value in range input value is an interval", () => {
        expect(handleWildcard('*/15', 'minute')).toEqual([0, 15, 30, 45]);
        expect(handleWildcard('*/3', 'month')).toEqual([3, 6, 9, 12]);
    });
});
