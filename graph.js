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
	return !!this._adjacencyList[node];
};

/**
 * [removeNode description]
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
Graph.prototype.removeNode = function removeNode(node){
};

Graph.prototype.getEdge = function getEdge(fromNode, toNode){
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

	this._adjacencyList[fromNode].push(toNode);
	this._adjacencyList[toNode].push(fromNode);

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
	if (!!this._adjacencyList[fromNode] || !!this._adjacencyList[toNode]) {
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

	// should i be killing the nodes just because they dont have edges?
	// leave commented in the mean time; the answer should be NO;
	// !this._adjacencyList[fromNode].length && this.removeNode(fromNode);
	// !this._adjacencyList[toNode].length && this.removeNode(toNode);

	return this;
};

/**
 * [depthFirstTraversal description]
 * @return {[type]} [description]
 */
Graph.prototype.depthFirstTraversal = function depthFirstTraversal() {

};

/**
 * [breadthFirstTraversal description]
 * @return {[type]} [description]
 */
Graph.prototype.breadthFirstTraversal = function breadthFirstTraversal () {

};

var graph = new Graph();
graph.addNode('kittens');
graph.addNode('puppies', 'fish');