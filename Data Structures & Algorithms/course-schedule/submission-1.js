class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        function dfs(course) {
            if (visited.has(course)) return false;
            if ((adGraph.get(course) ?? []).length === 0) return true;

            visited.add(course);
            for (const preq of adGraph.get(course)) {
                if (!dfs(preq)) return false;
            }
            visited.delete(course);
            adGraph.set(course, []);
            return true
        }


        const adGraph = new Map();
        const visited = new Set();

        for (const [pre1, pre2] of prerequisites) {
            if (!adGraph.has(pre1)) adGraph.set(pre1, []);
            if (!adGraph.has(pre2)) adGraph.set(pre2, []);

            adGraph.get(pre1).push(pre2);
        } // Build adjaceny list

        for (let i = 0; i < numCourses; i++) {
            const isPossible = dfs(i);
            if (!isPossible) return false;
        } 

        return true;
    }
}
