//ES6 Syntax version
function binarySearch(arr,elem){
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while(arr[middle] !== elem && start <= end){
		if(elem < arr[middle])end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === elem ? middle : -1;
}

binarySearch([2,4,5,6,7,9,12,13,15,20], 15);

//Longer version below
/* function binarySearch(arr,elem){
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while(arr[middle] !== elem && start <= end){
		if(elem < arr[middle]){
			end = middle - 1;
		} else{
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	if(arr[middle] == elem){
		return middle;
	}
	return -1;
} */

