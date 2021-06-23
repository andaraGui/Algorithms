const input = require('fs').readFileSync('URI_1837_stdin', 'utf8');
let [a, b] = input.split(' ').map(Number);



if (a > 0) {

    const rest = a % b;
    const div = (a - rest) / b;
    console.log(div + ' ' + rest)

} else {

    let rest = 0;
    while (a % b !== 0) {
        a--;
        rest++;
    }
    const div = a / b;
    console.log(div + ' ' + rest)

}
