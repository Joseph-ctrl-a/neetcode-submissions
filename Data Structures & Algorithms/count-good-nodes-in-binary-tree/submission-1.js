/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let goodNodes = 0 // 1

        const dfs = (node, maxVal) => {
            if (!node) return

            if (node.val >= maxVal) goodNodes++

            maxVal = Math.max(node.val, maxVal) // 3
            
            dfs(node.left, maxVal)
            dfs(node.right, maxVal)
        }
        dfs(root, -Infinity)
        return goodNodes
    }
}


//     3
//   3  
// 4  2 