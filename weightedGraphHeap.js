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

class PriorityQueue{
	constructor(){
		this.values = []
	}
	enqueue(val,priority){
		let newNode = new Node(val,priortiy)
		this.values.push(newNode)
		this.bubbleUp()
	}
	bubbleUp(){
		let idx = this.values.length - 1
		const element = this.values[idx]
		while(idx > 0){
			let parentIdx = Math.floor((idx -1 ) / 2)
			let parent = this.values[parentIdx]
			if(element.priority >= parent.priority) break
			this.values[parentIdx] = element
			this.values[idx] = parent
			idx = parentIdx
		}
	}
    dequeue(){
        const min = this.values[0]
        const end = this.values.pop()
        this.values[0] = end
        this.sinkDown()
        
        return max
    }
    sinkDown(){
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true){
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null
            
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightchild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx 
                }
            }
            if(swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

}

class Node{
	constructor(val,priority){
		this.val = val
		this.priority = priority
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

