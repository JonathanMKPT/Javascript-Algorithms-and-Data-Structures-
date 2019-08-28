function bubbleSort(arr){
	var noSwaps;
	for(var i = arr.length; i > 0;  i--){
		noSwaps = true;
		for(var j = 0; j < i - 1; j++){
			//log readout from console window
			console.log(arr,arr[j],arr[j+1]);
			if(arr[j] > arr[j+1]){
				//swap
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				noSwaps = false;
			}
		}
		if(noSwaps) break
	}
	return arr;
}

/*ES6 Syntax 
function bubbleSort(arr){
	const swap = (arr,idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	
	for(let i = arr.length; i > 0; i--){
		for(let j = 0; j < i - 1; j++) {
			if(arr[j] > arr[j + 1]){
				swap(arr, j, j + 1);
			}
		}
	}
} */

bubbleSort([4,6,12,8,9,25,47,34,43]);