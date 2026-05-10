class TimeMap {
    constructor() {
        this.keyStore = new Map();

    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
       if (!this.keyStore.get(key)) return ""

        let left = 0
        console.log(this.keyStore.get(key))
        let right = this.keyStore.get(key).length - 1

        let closest;
        while (left <= right) {
            const midPoint = Math.floor((left + right) / 2)

            const currTimeStamp = this.keyStore.get(key)[midPoint][0]
            const value = this.keyStore.get(key)[midPoint][1]

            if (currTimeStamp === timestamp) return value

            if (currTimeStamp > timestamp) {
                right = midPoint - 1
            }
            else {
                left = midPoint + 1
            }
        }
        if (!this.keyStore.get(key)[right]) return ""
        return this.keyStore.get(key)[right][1]
        }
}

