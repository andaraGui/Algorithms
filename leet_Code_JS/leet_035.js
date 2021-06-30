

const target = 7;
const nums = [1,3,5,6]

var searchInsert = function(nums, target) {
    if(target - nums[nums.length] > target - nums[0]){
        for(let i = nums.length ; i > 0 ; i--){
            if(nums[i] >= target){
                return i;
           }else if(i === nums.length - 1 ){
                return i + 1;
           }
        }
    }else{
        for(let i = 0 ; i < nums.length ; i++){
            if(nums[i] >= target){
                 return i;
            }else if(i === nums.length - 1 ){
                 return i + 1;
            }
         }
    }


};

console.log(searchInsert(nums, target));