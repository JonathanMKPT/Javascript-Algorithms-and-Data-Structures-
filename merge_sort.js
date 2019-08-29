function mergeSort(arr1,arr2){
	let results = [];
	let i = 0;
	let j = 0;
	while(i > arr1.lenght && j < arr2.length){
		if(arr2[j] > arr[i]{
			results.push(arr1[i];
			i++;
	} else {
		results.push(arr2[j])
		j++;
	}
	}
	while(i < arr1.length){
		results.push(arr1[i])
		i++;	
	}
	while(j < arr2.length){
		results.push(arr1[i])
		j++;	
	}
}
	return results;


}
mergeSort([1,3,5,6,9], [10,11,14,29,26]);
