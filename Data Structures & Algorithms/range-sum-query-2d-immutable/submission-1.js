class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rLength = matrix.length
        const cLength = matrix[0].length
        const prefix = Array.from({length: rLength + 1}, () => Array(cLength + 1).fill(0)) 
        for (let r = 1; r < rLength + 1; r++) {
            for (let c = 1; c < cLength + 1; c++) {
                prefix[r][c] = matrix[r - 1][c - 1] + prefix[r][c - 1] + prefix[r - 1][c] - prefix[r - 1][c - 1]
            }
        }
        this.prefix = prefix
    }
    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1 += 1
        col1 += 1
        row2 += 1
        col2 += 1

        const bottomRight = this.prefix[row2][col2]
        const topRight = this.prefix[row1 - 1][col2]
        const bottomLeft = this.prefix[row2][col1 - 1]
        const topLeftCorner = this.prefix[row1 - 1][col1 - 1 ]

        const sum = bottomRight - topRight - bottomLeft + topLeftCorner
        return sum
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */