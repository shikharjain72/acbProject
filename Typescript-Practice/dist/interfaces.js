"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
    set nameChange(someName) {
        this.name = someName;
    }
}
let Person1;
Person1 = new Person("Raj");
let Person2 = new Person("Anjali");
console.log(Person2.name);
Person2.nameChange = "wrfd";
console.log(Person2.name);
