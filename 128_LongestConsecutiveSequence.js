/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let maxSeq = 0;
    for(let num of numSet) {
        if(numSet.has(num - 1)) continue;
        let currNum = num;
        let seqLen = 1;
        while(numSet.has(currNum + 1)) {
            currNum++;
            seqLen++;
        }
        maxSeq = Math.max(seqLen, maxSeq);
    }
    return maxSeq;
};
