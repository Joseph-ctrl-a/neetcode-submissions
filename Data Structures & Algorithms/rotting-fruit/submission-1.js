class Queues {


    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    dequeue() {
        if (!this.head) return undefined
        const node = this.head
        this.head = this.head.next
        if (!this.head) this.tail = null

        this.size--
        return node.val
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
    isEmpty() {
        return this.size === 0
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }


}
class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = new Queues()

        let freshFruit = 0

        const row = grid.length
        const col = grid[0].length

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 2) {
                    queue.enqueue([r,c])
                }
                if (grid[r][c] === 1) freshFruit++
            }
        }

        let minutes = 0
        const dirs = [[0,1], [1,0], [0,-1], [-1,0]]
        while (!queue.isEmpty()) {
        if (freshFruit === 0) return minutes
            const levelSize = queue.size
            for (let i = 0; i < levelSize; i++) {
                const [r,c] = queue.dequeue()
                
                for (const [dr, dc] of dirs) {
                    const newRow = r + dr
                    const newCol = c + dc

                    if (newRow >= row || newRow < 0 || newCol >= col || newCol < 0) continue
                    if (grid[newRow][newCol] !== 1) continue
                    grid[newRow][newCol] = 2
                    freshFruit--
                    queue.enqueue([newRow, newCol])
                }
            }
            minutes++

        }
        if (freshFruit !== 0) {
            return -1
        }
        return minutes













    }
}
