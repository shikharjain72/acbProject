"use strict";
class Product {
    constructor(productName) {
        this.productName = productName;
    }
    describe() {
        console.log(this.productName);
    }
}
class MicrosoftProducts extends Product {
    static introduction() {
        console.log("Welcome to Microsoft Products");
    }
    constructor(productName, ceo) {
        super(productName);
        this.ceo = ceo;
    }
    describe() {
        console.log(this.productName, this.ceo);
    }
}
const appleWatch = new Product("Apple watch");
console.log(appleWatch.productName); //Private access modifier will give error.
const appleMacbook = { productName: "Macbook", describe: appleWatch.describe };
appleMacbook.describe();
const microsoftSurface = new MicrosoftProducts("Microsoft Surface", "Satya nadela");
microsoftSurface.describe();
MicrosoftProducts.introduction();
