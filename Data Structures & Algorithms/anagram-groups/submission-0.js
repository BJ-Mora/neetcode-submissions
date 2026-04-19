class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create a map
        // loop through all strs array
        // create count array, 26 0's
        //// we'll use this to have a uniform way to track each letters count in every word and to compare later
        // loop through each letter in a str
        //// increment its corresponding index in the count array using charCodeAt
        // create a key var
        //// will be the count array but with comma separation
        // check if anagrams does not have key, if it does not then set key, []
        // push str to anagrams.get(key)
        // return Array.from(anagrams.values())
        const anagrams = new Map()

        for (const str of strs) {
            const count = new Array(26).fill(0)
            for (const l of str) {
                count[l.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            const key = count.join(',')
            if (!anagrams.has(key)) {
                anagrams.set(key, [])
            }
            anagrams.get(key).push(str)
        }
        return Array.from(anagrams.values())
    }
}
