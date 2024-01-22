/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const len = strs.length;
  const hashMap = new Map();
  if (len === 1) {
    return [strs];
  }
  strs.forEach(function (str) {
    const charArray = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      let index = str.charCodeAt(i) - "a".charCodeAt(0);
      charArray[index]++;
    }
    const key = charArray.toString();
    if (hashMap.has(key)) {
      hashMap.get(key).push(str);
    } else {
      hashMap.set(key, [str]);
    }
  });
  return Array.from(hashMap.values());
};
