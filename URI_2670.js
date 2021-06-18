const input = require('fs').readFileSync('URI_2670_stdin','utf-8');
const employeesByFloor = input.split('\n').map(Number);

const buildingFloors = 3;

let minsExpendArray = new Array(buildingFloors).fill(0);

for(let  i = 0 ; i < buildingFloors ; i++){

    for(let j = 0 ; j < buildingFloors ; j++){
        if(j !== i){

            let floorsDiference = j - i;
            if(floorsDiference < 0){
                floorsDiference = -floorsDiference;
            }
            minsExpendArray[i] += employeesByFloor[j] * 2 * floorsDiference; 
        }
    }
}  
minsEnxpedArray = minsExpendArray.sort((a, b) => a - b)
console.log(minsExpendArray[0]);
