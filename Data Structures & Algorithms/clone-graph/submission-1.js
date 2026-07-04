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
        const visited = new Set()
        function buildMap(node) {
            if (visited.has(node)) return
            visited.add(node)

            map.set(node, new Node(node.val))


            for (const neighbor of node.neighbors) {
                buildMap(neighbor)
            }
        }

        const visitedNodes = new Set()
        function dfs(node) {
            if (visitedNodes.has(node)) return
            visitedNodes.add(node)
            const copyNode = map.get(node)
            
            for (const neighbor of node.neighbors) {
                copyNode.neighbors.push(map.get(neighbor))
                dfs(neighbor)
            }
            
        }

        buildMap(node)
        dfs(node)
        return map.get(node)
    }
}
