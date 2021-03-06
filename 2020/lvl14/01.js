const initialization = require('fs').readFileSync('input.txt').toString().split('\n');
//const initialization = require('fs').readFileSync('example.txt').toString().split('\n');

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function doThing() {
    let res = [];
    let mask;
    initialization.forEach(ini => {
        if (ini.split(" ")[0] === "mask") {
            mask = ini.split("= ")[1];
        } else {
            let mem = parseInt(ini.split("[")[1].split("]")[0]);
            let val = parseInt(ini.split("= ")[1]).toString(2).padStart(mask.length, "0");

            mask.split("").forEach((bit, index) => {
                if (bit !== "X") {
                    val = replaceAt(val, index, bit);
                }
            });
            res[mem] = parseInt(parseInt(val, 2).toString(10));
        }
    });
    return res.reduce((a, b) => a + b);
}

console.log(doThing())