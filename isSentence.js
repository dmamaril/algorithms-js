/**
 * 
 * Given a dictionary of English words. And a function isInDict(string) which returns true or false depending on whether the string is in the dictionary.
 * 
 * Write a function that will determine whether a string is an English sentence. I.e. whether that string is constructed of english words.
 * 
 * e.g. isSentence('iamuber') -> 'i am uber' -> should return true e.g. isSentence('ixam')' -> can not be broken up into english words -> return false
 * 
 **/
function isSentenceDP(str, memo) {

	memo = memo || {};

	if (dictionary[str] || memo[str]) {
		return str;
	}

	var len = str.length;

	for (var i = 1 ; i < len ; i++) {

		var prefix = str.substr(0, i);
		var suffix = str.substr(i);

		if (dictionary[prefix] && isSentenceDP(suffix, memo)) {
			return true;
		}
	}

	memo[str] = 1;
	return false;
}

var dictionary = {
	i	: 1,
	is 	: 1,
	a	: 1,
	am	: 1,
	uber: 1,
	max: 1
};

debugger;
isSentenceDP('isauberx');
// isSentenceDP('imaxxuber');

// trie approach
// function isSentence(str) {

// 	var memo = {};

// 	// build trie;
// 	for ( var i = 0 ; i < str.length ; i++ ) {

// 		var letter = str[i];

// 		if (!!dictionary[letter] && !memo[letter]) {
// 			memoize(letter);
// 		}

// 		var word = letter;

// 		for (var j = i+1 ; j < str.length ; j++) {

// 			word += str[j];

// 			if (!!dictionary[word]) {
// 				memoize(letter, word);
// 			}
// 		}
// 	}


// 	var first_letter = str[0];
// 	var first_words  = memo[first_letter];

// 	// no valid words at starting letter just end;
// 	if (!memo[first_letter]) {
// 		return false;
// 	}

// 	// try to build out the sentence with each starting word;
// 	for (i = 0 ; i < first_words.length ; i++) {
// 		if (recurse(first_words[i], first_words[i].length-1)) {
// 			return true;
// 		}
// 	}

// 	return false;

// 	*
// 	 * [memoize description]
// 	 * @param  {[type]} letter [description]
// 	 * @param  {[type]} word   [description]
// 	 * @return {[type]}        [description]
	 
// 	function memoize(letter, word) {
// 		memo[letter] = memo[letter] || [];
// 		memo[letter].push(word || letter);
// 	}

// 	/**
// 	 * [recurse description]
// 	 * @param  {[type]} prevWord  [description]
// 	 * @param  {[type]} rootIndex [description]
// 	 * @return {[type]}           [description]
// 	 */
// 	function recurse(prevWord, rootIndex) {

// 		if (rootIndex === str.length-1) {
// 			return true;
// 		}

// 		var rootLetter = str[rootIndex + 1];

// 		if (!memo[rootLetter] || rootIndex >= str.length) {
// 			return false;
// 		}

// 		var words = memo[rootLetter];

// 		for (var i = 0 ; i < words.length ; i++) {
// 			if(recurse(words[i], rootIndex + words[i].length)) {
// 				return true;
// 			}
// 		}

// 		return false;
// 	}
// }

// initial implementation;
// function isSentence(str) {
    
//     function findSentences(index, word) {
    
//         if (isInDict(word) && index === str.length-1) {
//                return true;
//         }
        
//         if (index >= str.length) {
//             return false;
//         }
        
//         index++;
//         var letter = str[index];
//         return isInDict(word) ? findSentences(index, letter) : findSentences(index, word + letter);
//     }

//     return findSentences(0, str[0]);
// }