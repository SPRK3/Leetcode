/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hash[s[i]] = 0;
    if (!hash[t[i]]) hash[t[i]] = 0;
    hash[s[i]]++;
    hash[t[i]]--;
  }
  for (let ch in hash) {
    if (hash[ch] !== 0) {
      return false;
    }
  }
  return true;
};
