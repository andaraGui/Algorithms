const input = require('fs').readFileSync('URI_2165_stdin', 'utf-8');
const tweetInput = input.split('\n')

if(tweetInput[0].length <= 141){
    console.log('TWEET');
}else{
    console.log('MUTE');
}