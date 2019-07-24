//returns an output of 10 no matter if input is less than 10, this is O(N) time complexity
function logAtLeast10(n){
    for(var i = 0; i <= Math.max(n,10); i++){
        console.log(i);
    }
}