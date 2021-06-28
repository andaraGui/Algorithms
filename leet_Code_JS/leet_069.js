
let x = 1;
var mySqrt = function(x) {
    
    let i = 0;

    do{
        if( i * i >= x){
            if(i * i === x){
                return i;
            }else{
                return i-1;
            }
        }
        i++;
    }while(i <= x);

};


console.log(mySqrt(x));