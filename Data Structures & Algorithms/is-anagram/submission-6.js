class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false
        }

        const sortedS = Array.from(s).sort().join('')
        const sortedT = Array.from(t).sort().join('')

        if (sortedS == sortedT) {
            return true
        }
         return false
    }
}
