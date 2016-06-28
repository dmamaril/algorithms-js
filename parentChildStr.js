// List of parent, child relationship from a tree.
// [['a', 'd'], ['h', 'c'], ['a', 'e'], ['h', 'a'], ['d', 'x'], ['d', 'z'], ['h', 'b']]

// h
// .a
// ..d
// ...x
// ...z
// ..e
// .b
// .c
function printTree(rels) {
	var hash = {};

	// construct hash;
	for ( var i = 0 ; i < rels.length ; i++) {
		// TODO: error checks.
		var parent 	= rels[i][0];
		var child 	= rels[i][1];

		hash[parent] = hash[parent] || [];
		hash[parent].push(child);
	}

	// todo: find to parent;
	var highestParent = null;

	for (var parent in hash) {
		
		if (highestParent === null) {
			highestParent = parent;
			continue;
		}

		var children = hash[parent];

		if (children.indexOf(highestParent) !== -1) {
			highestParent = parent;
		}
	}


	function buildString(parent, depth) {

		var children = hash[parent];
		var prefix 	 = dotsToDepth(depth);
		var str 	 = dotsToDepth(depth-1) + parent + '\n';

		for (var i = 0 ; i < children.length ; i++) {

			var child = children[i];

			str += hash.hasOwnProperty(child) ? buildString(child, depth + 1) : prefix + child + '\n';
		}

		return str;
	}

	function dotsToDepth(n) {
		var str = '';

		for (var i = 0 ; i < n ; i++) {
			str += '.';
		}

		return str;
	}


	return '\n' + buildString(highestParent, 1);
}


printTree([['a', 'd'], ['h', 'c'], ['a', 'e'], ['h', 'a'], ['d', 'x'], ['d', 'z'], ['h', 'b']]);