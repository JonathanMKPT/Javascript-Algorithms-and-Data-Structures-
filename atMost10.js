//returns input only up to 10 but no more, this is in O(N) time and O(N) space complexity
function logAtMost10(n){
    for(var i = 0; i <= Math.min(n,10); i++){
        console.log(i);
    }
}