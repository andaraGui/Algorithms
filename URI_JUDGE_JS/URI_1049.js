//This code will work only on the URI_JUDGE website, but do not work on nodejs because of '\r' in the broken lines
var input = require('fs').readFileSync('URI_1049_stdin', 'utf8');
let [test1, test2, test3] = input.split('\n');
if (test1 === "vertebrado") {
    if (test2 == "ave") {
        if (test3 == 'carnivoro') {
            console.log('aguia')
        } else if (test3 == "onivoro") {
            console.log("pomba")
        }
    } else if (test2 == "mamifero") {
        if (test3 == "onivoro") {
            console.log("homem")
        } else if (test3 == 'herbivoro') {
            console.log('vaca')
        }
    }
} else if (test1 == 'invertebrado') {
    if (test2 == 'inseto') {
        if (test3 == 'hematofago') {
            console.log('pulga')
        } else if (test3 == 'herbivoro') {
            console.log('lagarta')
        }
    } else if (test2 == 'anelideo') {
        if (test3 == 'hematofago') {
            console.log('sanguessuga')
        } else if (test3 == 'onivoro') {
            console.log('minhoca')
        }
    }
}