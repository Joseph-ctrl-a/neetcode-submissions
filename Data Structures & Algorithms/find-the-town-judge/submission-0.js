class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const score = new Array(n + 1).fill(0)

        for (const [a,b] of trust) {
            score[a]--
            score[b]++ 
        }
        console.log(score)
        for (let i = 1; i < score.length; i++) {
            if (score[i] === n - 1) return i
        }
        return -1
    }
}