
const n = 2;

var climbStairs = function (n) {
    let arr = [];
    arr[1] = 1;
    arr[2] = 2;
    for (let x = 3; x <= n; x++) {
        arr[x] = arr[x - 1] + arr[x - 2];
    }
    return arr[n];
};

console.log(climbStairs(n))