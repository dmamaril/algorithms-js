/*
PROBLEM:
--------
Generate all possible 10 digit phone numbers and
corresponding "words".  Words are formed by using any of the
letters corresponding to each digit of the phone number.

e.g. The number 2222222222 maps to the word AAAAAAAAAA.  It
also maps to the word BBBBBBBBBB, ABCAAAABBCA, etc.

Here's what the keypad looks like:


         1     2     3
              ABC   DEF

         4     5     6
        GHI   JKL   MNO

         7     8     9
        PQRS  TUV   WXYZ

               0


Here's a sample output:

OUTPUT:
...
234 555 7777 ADG JJL PPQS
234 555 7777 BDG KJL PPQS
...
244 666 8888 CGG MMM TUVT
...
888 777 5234 ............
....
....

222 AAA
222 AAB
222 AAC



NOTES:
• Some digits do not have a corresponding letter on the
  phone keypad.  Skip those numbers. e.g. 213xxxxxxx will never
  appear in the output because it contains the digit "1".
• You must print an exhaustive list.  All printed lines must
  be unique (no duplicates.)
• You do not have to print the spaces between the digits or
  letters as shown in the sample output–that is there to make
  it easy for us to read it.
*/


var DIGIT_TO_LETTER = {
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'P'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z'],
};

(function telephoneWords() {

    var results = [];

    /**
     * [buildCombinations description]
     * @param  {[type]} combo [description]
     * @return {[type]}       [description]
     */
    function buildCombinations(combo) {

        if (combo.length === 10) {
            return buildString(combo, '');
        }

        for (var i = 2 ; i < 10 ; i++) {
            buildCombinations(combo + i);
        }


        /**
         * [buildString description]
         * @param  {[type]} str   [description]
         * @param  {[type]} combo [description]
         * @return {[type]}       [description]
         */
        function buildString(str, combo) {

            if (str.length === 0) {
                return results.push(combo);
            }

            var letters = DIGIT_TO_LETTER[str[0]];
            str         = str.substr(1);

            for (var i = 0 ; i < letters.length ; i++) {
                buildString(str, combo + letters[i]);
            }
        }
    }


    buildCombinations('');
    return '\n' + results.join('\n');
})();