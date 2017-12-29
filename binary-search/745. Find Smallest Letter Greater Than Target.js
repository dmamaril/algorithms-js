/**
 * 
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/
 * 
 * Given a list of sorted characters letters containing only lowercase letters,
 * and given a target letter target,
 * find the smallest element in the list that is larger than the given target.
 * 
 * Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.
 * 
 * Examples:
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "a"
 * Output: "c"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "c"
 * Output: "f"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "d"
 * Output: "f"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "g"
 * Output: "j"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "j"
 * Output: "c"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "k"
 * Output: "c"
 * 
 * Note:
 * letters has a length in range [2, 10000].
 * letters consists of lowercase letters, and contains at least 2 unique letters.
 * target is a lowercase letter.
 * 
 */

/**
 *
 * Perform Binary Search since the values are ordered.
 * Move min/max while searching for a letter greater than target.
 * Return the letter in the last index found.
 * Use modulo operator to get the first element
 * should there be no elements greater than target in array.
 * 
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {

    var min = 0, max = letters.length;

    while (min < max) {

        var mid = Math.floor(min + (max - min) /  2);

        if (letters[mid] <= target) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }

    return letters[min % letters.length];
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'k'), 'c');
console.log(nextGreatestLetter(['c', 'f', 'j'], 'j'), 'c');
console.log(nextGreatestLetter(['c', 'f', 'j'], 'g'), 'j');
console.log(nextGreatestLetter(['c', 'f', 'j'], 'd'), 'f');
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'), 'f');
console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'), 'c');
