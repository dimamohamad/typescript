"use strict";
let person1 = {
    name: "dima",
    age: 26,
    checkage() {
        if (this.age > 18)
            console.log("The person is an adult");
        else
            console.log("The person is an minor");
    }
};
person1.checkage();
let techer1 = {
    name: "Dima",
    subject: ["Math", "Science"],
    subjtech() {
        console.log(`${this.name} ,"the subject teaches by ", ${this.subject}`);
    }
};
techer1.subjtech();
let product1 = {
    name: "mobile",
    price: 200,
    quantity: 7,
    checkquant() {
        if (this.quantity > 5) {
            this.price += 0.1 * this.price;
            console.log(this.price);
        }
        else
            console.log(this.price);
    }
};
product1.checkquant();
let device1 = {
    name: "s",
};
function Start1() {
    if (device1.start == undefined) {
        console.log("default setting");
    }
}
;
Start1();
