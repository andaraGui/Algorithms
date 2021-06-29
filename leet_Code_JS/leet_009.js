
const x = 123454321;
const isPalindrome = function(x) {
    
    let numberSplited =  x.toString().split('');
    


    while(numberSplited.length > 1){
        
        const finish = numberSplited.pop();
        const begin =   numberSplited.shift();
        if(finish !== begin){
            return false;
        }
    }
    return true;
    
    
};  

console.log(isPalindrome(x));