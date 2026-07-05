class Queues {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    enqueue(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    dequeue() {
        if (!this.head) return undefined

        const node = this.head

        this.head = this.head.next
        if (!this.head) this.tail = null

        this.size--
        return node.val
    }
    isEmpty() {
        return this.size === 0
    }
}

class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next

        
    }
}

class Solution {
    /**
     * 
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        const queue = new Queues()
        for (let r = 0; r < grid.length; r++) {
           for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 0) queue.enqueue([r,c,0])
            }
        }
        const dirs = [[0,1], [1,0], [-1, 0], [0, -1]]

        while (!queue.isEmpty()) {
            const [r,c,d] = queue.dequeue()
            for (const [dr, dc] of dirs) {
                const nr = r + dr
                const nc = c + dc
                if (nr >= grid.length || nr < 0 || nc >= grid[0].length || nc < 0 || grid[nr][nc] !== INF) continue
                grid[nr][nc] = d + 1
                queue.enqueue([nr, nc, 1 + d])
                }
            }
        }
    }

