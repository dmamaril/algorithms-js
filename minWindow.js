/**
 * 76. Minimum Window Substring 
 * https://leetcode.com/problems/minimum-window-substring/
 * 
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 * 
 * For example,
 * S = "ADOBECODEBANC"
 * T = "ABC"
 * Minimum window is "BANC".
 * 
 * Note:
 * If there is no such window in S that covers all characters in T, return the empty string "".
 * 
 * If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    var minString;
    var nodes   = {};
    var minLen  = Infinity;
    var letters = convertToHash(t);

    var updateNodes = function(letter, index) {

        for (var key in nodes) {

            var node = nodes[key];

            node.decrementLetter(letter, index);

            if (node.isComplete && node.windowLen < minLen) {
                minLen      = node.windowLen;
                minString   = node.stringify();
            }
        }
    };


    for (var i = 0 ; i < s.length ; i++) {

        var letter = s[i];

        if (letters[letter]) {

            if (t.length >= s.length - i) {
                nodes[i] = new Node(letter, i);
            }

            updateNodes(letter, i);
        }

    }

    return minString || '';
};

  
var convertToHash = function (str) {
    return str.split('').reduce(function (mem, letter) {
        mem[letter] = mem[letter] || 0;
        mem[letter]++;
        return mem;
    }, {});
};


var Node = function (letter, index) {

    this.lettersToFind  = Object.assign({}, letters);
    this.lettersLeft    = t.length;
    this.startIndex     = index;
    this.isComplete     = false;
    this.windowLen      = 1;
};

Node.prototype.decrementLetter = function (letter, index) {

    if (this.lettersToFind[letter]) {

        this.lettersToFind[letter]--;
        this.lettersLeft--;
        
        if (this.lettersLeft === 0) {
            this.isComplete = true;
            this.windowLen  = (index + 1) - this.startIndex;
            return;
        }
        
        if (this.lettersToFind[letter] === 0) {
            delete this.lettersToFind[letter];
        }

    }
};

Node.prototype.stringify = function () {

    if (!this.isComplete) return;
    
    var startIndex  = this.startIndex;
    var endIndex    = this.windowLen;

    if (startIndex === endIndex - 1) {
        return t[startIndex];
    }

    return t.substr(startIndex, endIndex);
};