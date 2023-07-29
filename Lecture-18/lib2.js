const lib1 = require('./lib1');
console.log("Inside Lib2");

let dog = 'Dog';

function subtract(a, b){
    return a-b;
}

module.exports = {
    subtract,
    dog,
    lib1
};

