class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = prices[0]
        maxProfit = 0

        for price in prices[1:]:
            profit = price - minPrice
            maxProfit = max(maxProfit, profit)
            minPrice = min(minPrice, price)  # update lowest price

        return maxProfit