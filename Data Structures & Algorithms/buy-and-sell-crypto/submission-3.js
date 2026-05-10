class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let left = 0
        let right = 1
        while (right < prices.length) {
            profit = Math.max(profit, prices[right] - prices[left])
            console.log(left, right)
            if (prices[right] < prices[left]) {
                left = right
            }
            right++
        }
        return profit
    }
}
