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

isSentenceDP('iamuber');
// isSentenceDP('ixam');


// initial implementation;
// function isSentence(str) {
    
//     function findSentences(index, word) {
    
//         if (dictionary[word] && index === str.length-1) {
//                return true;
//         }
        
//         if (index >= str.length) {
//             return false;
//         }
        
//         index++;
//         var letter = str[index];
//         return dictionary[word] ? findSentences(index, letter) : findSentences(index, word + letter);
//     }

//     return findSentences(0, str[0]);
// }