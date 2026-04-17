class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // create an empty hash
        // loop through nums
        // check if the hash contains the current num
        // if yes, return true
        // if no, add num to the hash
        // if full loop runs and there are no dupes, exit loop and return false

        const seen = new Set()
        for (const num of nums) {
            if (seen.has(num)) {
                return true
            } else {
                seen.add(num)
            }
        }
        return false
    }
}