const nums = [-1,0,3,5,9,12];
const target = 2;


function leet(nums , target) {
    let indexOfTarget = -1;

    for(let i = 0 ; i < nums.length ; i++){

        if(nums[i] === target){
            indexOfTarget = i;
            break;
        }
    }
    return indexOfTarget;
}
console.log(leet(nums, target))