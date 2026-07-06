class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        let i = 0;
        while (i < path.length) {
            while (i < path.length && path[i] === "/") {
                i++;
            }
            let j = i;
            while (j < path.length && path[j] !== "/") {
                j++;
            }
            let string = path.substring(i, j);
            if (string === '.') {
                i = j + 1
                continue
            } else if (string === '..') {
                stack.pop()
            } else {
                if (string) stack.push(string)
            }
            i = j;
        }
        return '/' + stack.join('/')
    }
}
//    |
// path="/neetcode/practice//...///../courses"
// j = 1
// i = 0
// stack = []
