class Node{
	constructor(val){
		this.val = val
		this.left = null
		this.right = null
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null
	}
	/* insert(val){
		var newNode = new Node(val)
		if(this.root === null){
			this.root = newNode
			return this
		} else {
			var current = this.root
			while(true){
				if(val === current.val) return undefined
				if(val < current.val){
					if(current.left === null){
						current.left = newNode
						return this
					} else {
						current = current.left
					}
				} else if(val > current.val){
					if(current.right === null){
						current.right = newNode
						return this
					} else {
						current = current.right
					}
				}
			}
		}
	} */
	insert(val){
		var newNode = new Node(val)
		if(this.root === null){
			this.root = newNode
			return this
		}
		var current = this.root
		while(true){
			if(val === current.val) return undefined
			if(val < current.val){
				if(current.left === null){
					current.left = newNode
					return this
				} 
				current = current.left
			} else {
				if(current.right === null){
					current.right = newNode
					return this
				}
				current = current.right
				}
			}
		}
		find(val){
			if(this.root === null) return false
			var current = this.root,
				found = false
			while(current && !found){
				if(val < current.val){
					current = current.left
				} else if(val > current.val){
					current = current.right
				} else {
					found = true
				}
			}
			if(!found) return undefined
			return current
		}
		contains(val){
			if(this.root === null) return false
			var current = this.root,
				found = false
			while(current && !found){
				if(val < current.val){
					current = current.left
				} else if(val > current.val){
					current = current.right
				} else {
					return true
				}
			}
			return false
		}
		BFS(){
			var node = this.root,
				data = [],
				queue = []
				
			queue.push(node)
			
			while(queue.length){
				node = queue.shift()
				data.push(node.val)
				if(node.left) queue.push(node.left)
				if(node.right) queue.push(node.right)
			}
		    return data
		}
		DFSPreOrder(){
			var data = []
			function traverse(node){
				data.push(node.val)
				if(node.left) traverse(node.left)
				if(node.right) traverse(node.right)
			}
			traverse(this.root)
			return data
		}
		DFSPostOrder(){
			var data = []
			function traverse(node){
				if(node.left) traverse(node.left)
				if(node.right) travers(node.right)
				data.push(node.val)
			}
			traverse(this.root)
			return data
		}
}
	
var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
