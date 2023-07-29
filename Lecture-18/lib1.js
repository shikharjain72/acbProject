const lib2 = require('./lib2');
console.log("Inside Lib1");

let billi = 'Persian Cat';

function add(a, b){
    return a+b;
}

module.exports = {
    add,
    billi,
    lib2
};

