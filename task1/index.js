"use strict";
let x = 30;
if (x % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
let prices = [500, 400, 200, 1000, 20];
let check = 100;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > check) {
        console.log(prices[i]);
    }
}
let users = [
    { name: "dima", age: 26, isAdmin: true },
    { name: "lujain", age: 30, isAdmin: false },
    { name: "suha", age: 27, isAdmin: true }
];
var oldest = 0;
let nameof = "";
for (var i = 0; i < users.length; i++) {
    if (users[i].age > oldest) {
        oldest = users[i].age;
        nameof = users[i].name;
    }
}
console.log(nameof);
