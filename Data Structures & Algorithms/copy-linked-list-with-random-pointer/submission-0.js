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
        const map = new Map()
        map.set(null, null);
        let currentNode = head
        while (currentNode) {
            map.set(currentNode, new Node(currentNode.val, null, currentNode.random))
            currentNode = currentNode.next
        }


        currentNode = head;
        while (currentNode) {
            const copy = map.get(currentNode);
            copy.next = map.get(currentNode.next);
            copy.random = map.get(currentNode.random);
            currentNode = currentNode.next;
        }

        return map.get(head);
    }
}
