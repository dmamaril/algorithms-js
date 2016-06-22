/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function (string) {
    // initialize as object to prevent dupes
    var results = {};


    var findAnagrams = function (string, anagram) {
        // when we've cut through each letter in the string,
        // we've run out of possibilities, therefore add anagram to results
        // set to 1 for giggles (can be anything -- doesn't matter as we only need keys);
        if (!string.length) {
            results[anagram] = 1;
            return;
        }

        // decision tree starts; first choices will start at 'a', 'b', && 'c';
        for (var i = 0 ; i < string.length ; i++) {
            // remove the current letter from the current string
            // this allows us to trim our string and eventually meet our basecase
            // add the current letter in the anagram and recurse
            var cutStr = string.substr(0, i) + string.substr(i+1);
            findAnagrams(cutStr, anagram + string[i]);
        }

    };

    findAnagrams(string, '');
    return Object.keys(results);
}

allAnagrams('abc');