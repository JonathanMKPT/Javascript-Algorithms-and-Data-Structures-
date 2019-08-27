function kmpStringSearch(t, p){
	var i = 0;
	var j = 0;
	while(i < n){
		if(p[j] === t[i]){
			if( j === m - 1){
				return (i -m ) + 1;
			}
			i = i++;
			j + j++;
		}else if(j > 0){
			j = f(j--);
		} else {
			i = i++;
		}
		return - 1;
	}
	}
}