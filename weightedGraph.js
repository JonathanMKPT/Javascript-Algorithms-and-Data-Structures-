class PriorityQueue {
	constructor(){
		this.values = []
	}
	enqueue(val, priority){
		this.values.push({val, priority})
		this.sort()
	};
	dequeue(){
		return this.values.shift()
	};
	sort(){
		this.values.sort((a, b) => a.priority - b.priority)
	};
	
}


class WeightedGraph{
	constructor(){
		this.adjacencyList = {}
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}
	addEdge(vertex1, vertex2, weight){
		this.adjacencyList[vertex1].push({node:vertex2, weight})
		this.adjacencyList[vertex2].push({node:vertex1, weight})
	}
	Dijkstra(start, finish){
		const node = new Priority()
		const distances = {}
		const previous = {}
		let path = [] // return at end
		let smallest	
		//build up initial state
		for(let vertex in this.adjacencyList){
			if(vertex === start){
				distances[vertex] = 0
				nodes.enqueue(vertex,0)
			} else {
				distances[vertex] = Infinity
				nodes.enqueue(vertex, Infinity)
			}
			previous[vertex] = null
		}
		// as node needs to be visited
		while(nodes.values.length){
			smallest = node.dequeue().val
			if(smallest === finish){
				//build path to return at the end
				while(previous[smallest]{
					path.push(smallest)
					smallest = previous[smallest]
				}
				break		
			}
			if(smallest || distances[smallest] !== Infinity){
				//find neighbour node
				for(let neighbour in this.adjacecnyList[smallest]){
					let nextNode = this.adjacencyList(smallest[neighbour])
					//calculate new distance to neighbouring node
					let candidate = distances[smallest] + nextNode.weight
					let nextNeighbour = nextNode.node
					if(candidate < distances[nextNeighbour]){
						//updating new smallest distance to neighbour
						distances[nextNeighbour] = candidate
						//updating previous 
						previous[nextNeighbour] = smallest
						//enqueue in priortiy queue with new priority
						nodes.enqueue(nextNeighbour, candidate)
					}
				}
			}
		}
		return path.concat(smallest).reverse()
	}
}


var graph = new WeightedGraph
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B",4)
graph.addEdge("A","C",2)
graph.addEdge("B","E",3)
graph.addEdge("C","D",2)
graph.addEdge("C","F",4)
graph.addEdge("D","E",3)
graph.addEdge("D","F",1)
graph.addEdge("E","F",1)

