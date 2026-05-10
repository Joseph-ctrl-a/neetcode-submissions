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
     * @return {boolean}
     */
    isValidBST(root) {
        let isValid = true
        let prev = null
        if (!root) return true
        const dfs = (node) => {
            if (!node || !isValid) return
            
            dfs(node.left)
            if (prev !== null && !(prev < node.val)) {
                isValid = false
            }
            // console.log(prev && prev < node.val)
            prev = node.val
            dfs(node.right)

            }
        dfs(root)
        return isValid
        }
}

    

//   10
// 5   15
//4 7 11 20