

const nums = [2,7,11,15]
const target = 9


function leet (nums, target ){
    
   nums.filter( num => num < target);
   
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i + 1; j < nums.length ; j++){
                if(nums[i] + nums[j] === target){
                    return [i,j]
                }
        }
    }
  
}

console.log(leet(nums, target))