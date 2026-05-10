class Solution {

    // Use a hashmap,  {asciiValue: [act, cat], sortedSte2: []}
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
 groupAnagrams(strs) {
  const hashMap = {};
  for (let i = 0; i < strs.length; i++) {
    const alphabetArr = new Array(26).fill(0)
    for (let j = 0; j < strs[i].length; j++) {
        const index = strs[i].charCodeAt(j) - 97
        alphabetArr[index] += 1
    }
    const key = alphabetArr.join('#')
    if (!hashMap[key]) hashMap[key] = []
      hashMap[key].push(strs[i]);
  }
  return Object.values(hashMap);
}
}
