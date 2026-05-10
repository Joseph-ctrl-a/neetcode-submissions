class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                profit += (prices[i] - prices[i - 1])
            }
        }
        return profit
    }
}
// If buy > sell advance buy 
// Sell is greater the buy we will buy the stock and sell it on that given day and we'll advance the buy pointer

