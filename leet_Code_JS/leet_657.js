
const moves = "LLRR"

function leet(moves) {
    let L = 0 ;
        R = 0;
        U = 0;
        D = 0; 

    moves.split('').map(a => 
        a === 'L' ? L++:
        a === 'R' ? R++:
        a === 'U' ? U++:
                    D++
    );

    if(D === U && L === R){
        return true;
    }
    return false;
}

console.log(leet(moves))