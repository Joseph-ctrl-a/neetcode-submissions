/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node === null) return null
        // Build A Map of the Nodes

        const map = new Map()
        const visitedNodes = new Set()
        function dfs(node) {
            if (visitedNodes.has(node)) return
            visitedNodes.add(node)
            if (!map.has(node)) {
                map.set(node, new Node(node.val))
            }
       
            const copyNode = map.get(node)
            
            for (const neighbor of node.neighbors) {
                if (!map.has(neighbor)) map.set(neighbor, new Node(neighbor.val))
                copyNode.neighbors.push(map.get(neighbor))
                dfs(neighbor)
            }
            
        }

        dfs(node)
        return map.get(node)
    }
}
