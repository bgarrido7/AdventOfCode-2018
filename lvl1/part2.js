const line = require('fs').readFileSync('input.txt').toString().split('\n');

function sum(){
    let freq = 0;
    let found = false;
    let compare = [0]
    while(!found){
        for (let key in line){
            if( !isNaN( parseInt(line[key]) ) ){
                freq += parseInt(line[key]);
                //console.log(compare)
                if(compare.some(elem => elem == freq)){
                    found = true
                    return freq
                }
                compare.push(freq)
            }
        }
    }
}

console.log(sum())
