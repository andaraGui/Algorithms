
const strs = ["aaa","aaaa","aaaa"];


const longestCommonPrefix = function (strs) {

    let outputString = '';

    for (let i = 0; i < strs[0].length; i++) {
        let counter = 0;
        for (let j = 1; j < strs.length; j++) {

            if (strs[0][i] === strs[j][i]) {
                counter++;
            }else{
                i = strs[0].length;
                break;
            }
        }
        if(counter === strs.length-1){
            outputString+=strs[0][i];
        }
    }

    return outputString;

};

console.log(longestCommonPrefix(strs));