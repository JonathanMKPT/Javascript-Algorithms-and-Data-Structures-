function addUpTo(n){
  return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpTo(10000000);
let t2 = performance.now();
consoloe.log(`Time elapsed:"  ${(t2 - t1)) / 1000 } seconds.`);



/*
Exception: SyntaxError: missing } in template string
@Scratchpad/5:8
*/