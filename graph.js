class Graph{
	constructor(){
		this.adjacencyList = {}
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}
	addEdge(vertex1,vertex2){
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
			results.push(vertex)
			adjacencyList[vertex].forEach(neighbour => {
				if(!visited[neighbour]){
					return dfs(neighbour)
				}
			})
			
		})(start)
		
		return results
	}
	dfsIterative(start){
		const stack = [start]
		const results = []
		const visited = {}
		let currentVertex
		
		visited[start]  = true
		while(stack.length){
			currentVertex = stack.pop()
			results.push(currentVertex)
			
			this.adjacencyList[currentVertex].forEach(neighbour => {
				if(!visited[neighbour]){
					visited[neighbour] = true
					stack.push(neighbour)
				}
			});
		}
		return results
		
	}
	bfs(start) {
		const queue = [start]
		const results = []
		const visited = {}
		let currentVertex
		
		while(queue.length){
			currentVertex = queue.shift()
			results.push(currentVertex)
			
			this.adjacencyList[currentVertex].forEach(neighbout => {
				if(!visited[neighbour]){
					visited[neighbour] = true
					queue.push(neighbour)
				}
			})
		}
		return results
	}
	
	
}

let g = new Graph

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D", "E")
g.addEdge("E","F")
