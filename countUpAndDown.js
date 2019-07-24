function countUpAndDown(n){
    console.log("Going up");
    for(let i = 0; i < n; i++){
        console.log(i);
    }
    console.log("At the top!\n Going Down!");
    for(let j = n -1; j >= 0; j--){
        console.log(j);
    }
}