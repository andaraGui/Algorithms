const s = "LXIV"

var romanToInt = function (s) {
    let output = 0;
    const params = [1, 5, 10, 50, 100, 500, 1000];
    const letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];


    for (let i = s.length - 1; i >= 0; i--) {


        const actualIndex = letters.indexOf(s[i]);
        const nextIndex = letters.indexOf(s[i -1])
        

        if(nextIndex >= actualIndex || nextIndex === -1){
            output += params[actualIndex];
        }else{
            output += params[actualIndex] - params[nextIndex];
            i--;
        }
    }
    return output
};

console.log("RES: " + romanToInt(s))