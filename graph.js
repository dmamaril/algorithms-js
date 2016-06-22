var Graph = function(){
	this._adjacencyList = {};
};

Graph.prototype.addNode = function(newNode, toNode){

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

Graph.prototype.contains = function(node){
	return !!this._adjacencyList[node];
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){

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

Graph.prototype.removeEdge = function(fromNode, toNode){
};


Graph.prototype.depthFirstTraversal = function() {

};

Graph.prototype.breadthFirstTraversal = function () {

};

var graph = new Graph();
graph.addNode('kittens');
graph.addNode('puppies', 'fish');