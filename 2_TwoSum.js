/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length;
  const hashMap = {};
  for (let i = 0; i < len; i++) {
    let rem = target - nums[i];
    if (hashMap[rem] !== undefined) {
      return [hashMap[rem], i];
    }
    hashMap[nums[i]] = i;
  }
};
