var x = 30;
if (x % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
var prices = [500, 400, 200, 1000, 20];
var check = 100;
for (var i_1 = 0; i_1 < prices.length; i_1++) {
    if (prices[i_1] > check) {
        console.log(prices[i_1]);
    }
}
var users = [
    { name: "dima", age: 26, isAdmin: true },
    { name: "lujain", age: 30, isAdmin: false },
    { name: "suha", age: 27, isAdmin: true }
];
var oldest = 0;
var nameof = "";
for (var i = 0; i < users.length; i++) {
    if (users[i].age > oldest) {
        oldest = users[i].age;
        nameof = users[i].name;
    }
}
console.log(nameof);
