/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hashMap = new Map();
  nums.forEach(function (num) {
    if (hashMap.has(num)) {
      let currVal = hashMap.get(num);
      hashMap.set(num, currVal + 1);
    } else {
      hashMap.set(num, 1);
    }
  });
  const bucket = [];
  for (const [num, freq] of hashMap) {
    if (!bucket[freq]) {
      bucket[freq] = new Set().add(num);
    } else {
      bucket[freq].add(num);
    }
  }
  const result = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
    }
    if (result.length === k) {
      break;
    }
  }
  return result;
};
