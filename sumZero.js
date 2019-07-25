//Naive solution
function sumZero(arr){
	for(let i = 0; i < arr.length; i++){
		for(let j = i + 1; j < arr.length; j++){
			if(arr[i] + arr[j] === 0){
				return [arr[i], arr[j]];
			}
		}
	}
}
//Time complexity = O(N^2) because of nested loops
//Space complexity = O(1) because of reserved memeory for arrays