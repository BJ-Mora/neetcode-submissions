class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // nums == array of int
        // target == int 
        // return i & j where nums[i] + nums[j] == target && i != j
        // can assme that every input will have one pair of indeces that satisfy the cond
        // return answer w smaller index first
        let arr = []

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    arr.push(j)
                    arr.push(i)
                    return arr
                }
            }
        }
    }
}
