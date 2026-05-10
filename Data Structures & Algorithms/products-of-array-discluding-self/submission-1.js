class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProduct = []
        const postfixProduct = []
        for (let i = 0; i < nums.length; i++) {
            const prefix = (prefixProduct[i - 1] ?? 1) * nums[i]
            const postfix = (postfixProduct[i - 1] ?? 1) * (nums[nums.length - 1 - i] ??  nums[0])
            prefixProduct.push(prefix)
            postfixProduct.push(postfix)
        }
        postfixProduct.reverse()
        const product = []

        for (let i = 0; i < nums.length; i++) {
            const value = (postfixProduct[i + 1] ?? 1) * (prefixProduct[i - 1] ?? 1)

            product.push(value)
        }
        console.log(product)
        return product
    }
}
