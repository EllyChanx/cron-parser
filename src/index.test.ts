import { Kata, removeDuplicates, twoSum } from './index';

describe("Sample Test", () => {
    it("can say hi", () => {
        expect(Kata.sayHi('Foo')).toBe('Hi Foo');
    });
});

describe("", () => {
    it("twoSum", () => {
        expect(twoSum([2, 3, 4, 5, 9], 13)).toEqual(expect.arrayContaining([2, 4]));
        expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
    });

    it("removeDuplicates", () => {
        expect(removeDuplicates([2, 3, 4, 5, 9, 9])).toEqual(5);
        expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
    });
});