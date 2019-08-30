class Node{
	constructor(val,next,prev){
		this.val = val
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
		constructor(){
				this.head = null
				this.tail = null
				this.length = 0
		}
		push(val){
			var newNode = new Node(val)
			if(this.length === 0){
					this.head = newNode
					this.tail = newNode
			} else {
				 this.tail.next = newNode
				 newNode.prev = this.tail
				 this.tail = newNode
			}
			this.length++
			return this;
				
		}
		pop(){
				if(!this.head) return undefined
				var popped = this.tail
				if(this.length === 1){
						this.head = null
						this.tail = null
						
				} else {
					this.tail = popped.prev
					this.tail.next = null
					popped.prev = null
				}
				this.length--
				return popped
		}
		shift(){
				if(this.length === 0) return undefined
				var oldHead = this.head
				if(this.length === 1){
						this.head = null
						this.tail = null
				}
				this.head = oldHead.next
				this.head.prev = null
				oldHead.next = null
				this.length--
				return oldHead
				
				
		}
		
	
}
