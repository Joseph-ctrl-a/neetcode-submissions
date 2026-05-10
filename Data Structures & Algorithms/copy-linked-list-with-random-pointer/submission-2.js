// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null
        const map = new Map()
        
        let currentNode = head 
        while (currentNode) {
            const newNode = new Node(currentNode.val, null, null)
            map.set(currentNode, newNode)
            currentNode = currentNode.next
        }
        for (const [key, value] of map) {
            const nextNode = map.get(key.next) || null
            value.next = nextNode

            const randomNode = map.get(key.random) || null;
            value.random = randomNode;
        }
        return map.get(head)
    }

}

// [
//     [{val, next: null}, randomNode],
//     [{val, next: null}, randomNode],
//     [{val, next: null}, randomNode],
// ]