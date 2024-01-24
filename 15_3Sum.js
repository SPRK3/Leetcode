/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    let [start, end] = [i + 1, nums.length - 1];
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (sum < 0) start++;
      else if (sum > 0) end--;
      else {
        res.push([nums[i], nums[start], nums[end]]);
        start++;
        while (start < end && nums[start] === nums[start - 1]) start++;
      }
    }
  }
  return res;
};
