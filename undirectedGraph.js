
var Graph = function(){
	this._adjacencyList = {};
};

/**
 * [addNode description]
 * @param {[type]} newNode [description]
 * @param {[type]} toNode  [description]
 */
Graph.prototype.addNode = function addNode(newNode, toNode){

	if (newNode === undefined || newNode === null) {
		return null;
	}

	// safe default; prevent overwrites
	this._adjacencyList[newNode] = this._adjacencyList[newNode] || [];

	// instantiate and connect if has toNode;
	if ((toNode !== undefined && toNode !== null)) {
		this._adjacencyList[toNode] = this._adjacencyList[toNode] || [];
		this.addEdge(newNode, toNode);
	}

	return this;
};

/**
 * [contains description]
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
Graph.prototype.contains = function contains(node){
	return !this._adjacencyList.hasOwnProperty(node);
};

/**
 * [removeNode description]
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
Graph.prototype.removeNode = function removeNode(node){

	// if node is invalid || doesnt exist, do nothing;
	if (node === undefined || node === null || !this._adjacencyList.hasOwnProperty(node)) {
		return null;
	}

	var edges = this._adjacencyList[node];

	for (var i = 0 ; i < edges.length ; i++) {

		var toNode = edges[i];
		this.removeEdge(fromNode, toNode);
	}

	delete this._adjacencyList[node];
	return this;
};

/**
 * [getEdge description]
 * @param  {[type]} fromNode [description]
 * @param  {[type]} toNode   [description]
 * @return {[type]}          [description]
 */
Graph.prototype.getEdge = function getEdge(fromNode, toNode){


	if (fromNode === undefined || fromNode === null) {
		return null;
	}

	if (toNode === undefined || toNode === null) {
		return null;
	}

	if (!this._adjacencyList.hasOwnProperty(fromNode)) {
		return null;
	}

	return this._adjacencyList[fromNode].indexOf(toNode) !== -1;
};

/**
 * [addEdge description]
 * @param {[type]} fromNode [description]
 * @param {[type]} toNode   [description]
 */
Graph.prototype.addEdge = function addEdge(fromNode, toNode){

	// fromNode and toNode must exist to continue;
	if (fromNode === undefined || fromNode === null) {
		return null;
	}

	if (toNode === undefined || toNode === null) {
		return null;
	}

	// connect fromNode;
	if (this._adjacencyList.hasOwnProperty(fromNode)) {

		this._adjacencyList[fromNode].push(toNode);

	} else {

		this._adjacencyList[fromNode] = [toNode];
	}

	// connect toNode;
	if (this._adjacencyList.hasOwnProperty(toNode)) {

		this._adjacencyList[toNode].push(fromNode);

	} else {

		this._adjacencyList[toNode] = [fromNode];
	}


	return this;
};

/**
 * [removeEdge description]
 * @param  {[type]} fromNode [description]
 * @param  {[type]} toNode   [description]
 * @return {[type]}          [description]
 */
Graph.prototype.removeEdge = function removeEdge(fromNode, toNode){

	if (fromNode === undefined || fromNode === null) {
		return null;
	}

	if (toNode === undefined || toNode === null) {
		return null;
	}

	// if either dont exist
	if (!this._adjacencyList.hasOwnProperty(fromNode) || !this._adjacencyList.hasOwnProperty(toNode)) {
		return null;
	}

	var fromIndex 	= this._adjacencyList[fromNode].indexOf(toNode);
	var toIndex 	= this._adjacencyList[toNode].indexOf(fromNode);

	if (fromIndex !== -1) {
		this._adjacencyList[fromNode].splice(fromIndex, 1);
	}

	if (toIndex !== -1) {
		this._adjacencyList[toNode].splice(toIndex, 1);
	}

	return this;
};

/**
 * [depthFirstTraversal description]
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
Graph.prototype.depthFirstTraversal = function depthFirstTraversal(node, result) {

	if (!this._adjacencyList.hasOwnProperty(node)) {
		return null;
	}

	if (node === undefined || node === null) {
		return result;
	}

	result = result || [];

	if (!Array.isArray(result)) {
		throw new Error('Expected result to be of type Object. Instead received ' + typeof result);
		return null;
	}

	var edges = this._adjacencyList[node];

	result.indexOf(node) === -1 && result.push(node);

	for (var i = 0 ; i < edges.length ; i++) {
		
		var edge 			= edges[i];
		var undiscovered 	= result.indexOf(edge) === -1;

		undiscovered && result.push(edge) && this.depthFirstTraversal(edge, result);
	}

	return result;
};

/**
 * [breadthFirstTraversal description]
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
Graph.prototype.breadthFirstTraversal = function breadthFirstTraversal (node, result) {

	if (!this._adjacencyList.hasOwnProperty(node)) {
		return null;
	}

	if (node === undefined || node === null) {
		return result;
	}

	result = result || [];

	if (!Array.isArray(result)) {
		throw new Error('Expected result to be of type Object. Instead received ' + typeof result);
		return null;
	}

	var queue = [];
	var edges = this._adjacencyList[node];

	result.indexOf(node) === -1 && result.push(node);

	for (var i = 0 ; i < edges.length ; i++) {

		var edge 			= edges[i];
		var undiscovered 	= result.indexOf(edge) === -1;

		undiscovered && queue.push(edge) && result.push(edge);
	}

	while(queue.length) {
		this.breadthFirstTraversal(queue.shift(), result);
	}

	return result;
};

new Graph()
	.addNode('a', 'c').addEdge('a', 'd').addEdge('a', 'b')
	.addEdge('c', 'e').addEdge('d', 'f').addEdge('d', 'g')
	.addEdge('f', 'h').addEdge('f', 'a').addEdge('h', 'h').depthFirstTraversal('a');