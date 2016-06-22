/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

/**
 * [telephoneWords description]
 *
 * >> does not currently protect yourself against invalid strings;
 * 
 * @param  {[type]} digitString [description]
 * @return {[type]}             [description]
 */
function telephoneWords(digitString) {

  // safeguard;
  if (typeof digitString !== 'string') {
    return null;
  }

  var results = [];

  var getWords = function (str, combo) {

    // when we've stripped each letter, you've found a leaf
    if (str.length === 0) {
      return results.push(combo);
    }

    var number  = str[0];
    // get current possible letters
    var letters = phoneDigitsToLetters[number];
    // chop newStr to remve current letter;
    var newStr  = str.substr(1);

    for (var i = 0 ; i < letters.length ; i++) {
      // concat curent letter in phoneDigitsToLetters;
      // pass in shortened string;
      getWords(newStr, combo + letters[i]);
    }
  };


  getWords(digitString, '');
  return results;
};