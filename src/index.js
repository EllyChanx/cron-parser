"use strict";
exports.__esModule = true;
exports.removeDuplicates = exports.twoSum = exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.sayHi = function (name) {
        return "Hi " + name;
    };
    return Kata;
}());
exports.Kata = Kata;
// console.log(Kata.sayHi('e'))
function twoSum(nums, target) {
    var map = {};
    var ans = [];
    nums.forEach(function (n, i) {
        var difference = target - n;
        if (map[difference] !== undefined && map[difference] !== i) {
            ans = [i, map[difference]];
        }
        else {
            map[n] = i;
        }
    });
    return ans;
}
exports.twoSum = twoSum;
function removeDuplicates(nums) {
    var ans = 0;
    nums.forEach(function (n, i) {
        if (nums[i] !== nums[i + 1]) {
            nums[ans++] = nums[i];
        }
    });
    return ans;
}
exports.removeDuplicates = removeDuplicates;
