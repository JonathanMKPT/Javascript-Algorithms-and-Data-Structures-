function collectOdds(num){
	let results = [];
	
	function helper(helperInput){
		if(helperInput.length === 0){
			return;
		}
		
		if(helperInput[0] % 2 !== 0){
			result.push(helperInput[0])
		}
		helper(helperInput.slice(1))
	}
	helper(arr)
	
	return result;
}

collectOdds([1,2,3,4,5,6,7,8])
//expected output 3,5,7