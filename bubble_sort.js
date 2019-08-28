function bubbleSort(arr){
	for(var i = arr.length; i > 0;  i--){
		for(var j = 0; j < i - 1; j++){
			//log readout from console window
			console.log(arr,arr[j],arr[j+1]);
			if(arr[j] > arr[j+1]){
				//swap
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

bubbleSort([4,6,12,8,9,25,47,34,43]);