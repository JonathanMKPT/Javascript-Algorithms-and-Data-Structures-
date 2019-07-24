function sumZero(arr){
    //identify the left and right parts of the array to start checking against
    let left = 0;
	//dependent on array size
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
		//exits if array size is zero....I think....
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            //moves to the next element from right 
            right --;
        } else {
            //moves to the next element from the left
            left ++;
        }
    }
}