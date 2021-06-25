
let l1 = [], l2 = []

function leet(l1 , l2){
    
    let test = l1.concat(l2);
    test.sort( (a, b) => a - b);
    return test;
}

console.log(leet(l1,l2));