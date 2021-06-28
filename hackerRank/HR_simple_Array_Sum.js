let ar = [1,4,5,7,2]

function simpleArraySum(ar) {
    let sum = 0;
    for(let i = 0 ; i < ar.length ; i++){
        sum+= ar[i]
    }
    return sum;
}

console.log(simpleArraySum(ar))