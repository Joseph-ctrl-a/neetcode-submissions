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

        let currNode = head
        const map = new Map()
        while (currNode) {
            map.set(currNode, new Node(currNode.val))
            currNode = currNode.next
        }

        currNode = head

        while (currNode) {
            const copiedNode = map.get(currNode)
            copiedNode.next = map.get(currNode.next) || null
            copiedNode.random = map.get(currNode.random) || null
            currNode = currNode.next
        }
        return map.get(head) || null
    }       
} 

/*
    {
        3 => 3!,
        7 => 7!
    }

    3! => 7! // Next Pointer
    3 => 7


    3!.random = map.get(3.random) 
*/

