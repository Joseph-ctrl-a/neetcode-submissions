class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pacific = []
        const atlantic = []
        const row = heights.length
        const col = heights[0].length
        const dirs = [[0,1], [1,0], [0, -1], [-1,0]]
        function key(i, j) {
            return `i${i}j${j}`
        }
        function dfs(r, c, reach) {
            for (const [dr, dc] of dirs) {
                const nr = r + dr
                const nc = c + dc
                const node = key(nr, nc)

                if (nr >= row || nr < 0 || nc >= col || nc < 0) continue
                if (reach.has(node)) continue

                const currHeight = heights[r][c]
                const newHeight = heights[nr][nc]
                
                if (newHeight >= currHeight) {
                    reach.add(node)
                    dfs(nr, nc, reach)
                }
            }
        }


        
        const reachAtlantic = new Set()
        const reachPacific = new Set()
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (r === 0 || c === 0) {
                    pacific.push([r,c])
                    }
                if (c === col - 1 || r === row - 1) {
                    atlantic.push([r,c])                    
                    }
            }
        }
        
        for (const [r,c] of pacific) {
            reachPacific.add(key(r,c))
            dfs(r,c, reachPacific)
        }
        for (const [r,c] of atlantic) {
            reachAtlantic.add(key(r,c))
            dfs(r,c, reachAtlantic)
        }
        
        let res = []
        console.log(reachAtlantic.union(reachPacific))
        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
               if (reachAtlantic.has(key(r,c))) {
                if (reachPacific.has(key(r,c))) {
                    res.push([r,c])
                }
               }
            }
        }
        return res
    }
}
