class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // create empty array
        // loop through nums and push val/index pairs [nums[i], i] to empty array
        // sort array of pairs
        // set pointers i and j to start and end of array
        // while i < j check if array[i[0]] + array[j[0]] == target
        // if yes, return indeces in correct order using Math.min & Math.max
        // if no and the sum is < target, i++ and loop
        // if no and sum is > target, j-- and loop

        let arr = []

        for (let i = 0; i < nums.length; i++) {
            arr.push([nums[i], i])
        }

        arr.sort((a, b) => a[0] - b[0])

        let i = 0, j = nums.length - 1
        while (i < j) {
            const cur = arr[i][0] + arr[j][0]
            if (cur === target) {
                return [Math.min(arr[i][1], arr[j][1]), Math.max(arr[i][1], arr[j][1])]
            } else if (cur < target) {
                i++
            } else {
                j--
            }
        }
    }
}
