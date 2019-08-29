function pivot(arr, start=0, end=arr.length-1){
	function swap(arr,i,j){
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp
	}
	var pivot = arr[start];
	var swapIndx = start;
	
	for(var i = start + 1; i < arr.length; i++){
		if(pivot > arr[i]){
			swapIndx++;
			swap(arr,swapIdx,i)
			
		}
	}
	swap(arr,start,swapIdx)
	return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])