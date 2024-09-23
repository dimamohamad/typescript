
let x: number = 30;
if (x % 2 == 0) {
    console.log("even")


}
else {
    console.log("odd")

}
let prices: number[] = [500, 400, 200, 1000, 20];
let check: number = 100;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > check) {

        console.log(prices[i])
    }



}

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

let users: User[] = [
    { name: "dima", age: 26, isAdmin: true },
    { name: "lujain", age: 30, isAdmin: false },
    { name: "suha", age: 27, isAdmin: true }
];

var oldest: number = 0;
let nameof: string = "";
for (var i = 0; i < users.length; i++) {

    if (users[i].age > oldest) {
        oldest = users[i].age;
        nameof = users[i].name;
    }
}
console.log(nameof)