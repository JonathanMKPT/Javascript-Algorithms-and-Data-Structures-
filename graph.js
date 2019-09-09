class Graph{
	constructor(){
		this.adjacencyList = {}
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}
	addEdge(vertex1, vertex2){
		this.adjacencyList[vertex1].push(vertex2)
		this.adjacencyList[vertex2].push(vertex1)
	}
	removeEdge(vertex1,vertex2){
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			v => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			v => v !== vertex1
		);
	}
	removeVertex(vertex){
		while(this.adjacencyList[vertex].length){
			const adjacencyVertex = this.adjacencyList[vertex].pop()
			this.removeEdge(vertex, adjacencyVertex)
		}
		delete this.adjacencyList[vertex]
	}
	dfsRecursive(start){
		const results = []
		const visited = {}
		const adjacencyList = this.adjacencyList
		
		(function dfs(vertex){
			if(!vertex) return null
			visited[vertex] = true
			result.push(vertex)
			adjacencyList[vertex].forEach(neighbour => {
				if(!visisted[neighbour]){
					return dfs(neighbour)
				}
			})
			
		})(start)
		
		return result
	}
	
	
}

let g = new Graph

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A")
g.addEdge("B")
g.addEdge("C")
g.addEdge("D")
g.addEdge("E")
g.addEdge("F")
