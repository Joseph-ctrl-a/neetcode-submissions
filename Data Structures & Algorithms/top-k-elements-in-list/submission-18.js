class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const count = new Map()

        for (const num of nums) {
            if (!count.has(num)) count.set(num, 0)
            count.set(num, count.get(num) + 1)
        }
        

        const minHeap = new MinPriorityQueue(x => x[1])

        for (const [num, freq] of count.entries()) {
            minHeap.enqueue([num, freq])
            if (minHeap.size() > k) minHeap.dequeue()
        }
    const result = [];

    while (minHeap.size() > 0) {
        result.push(minHeap.dequeue()[0]);
    }

    return result;
    }
}
