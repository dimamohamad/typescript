interface Person {
    name: string;
    age: number;
    checkage(): void;



}



let person1: Person = {


    name: "dima",
    age: 26,
    checkage() {
        if (this.age > 18)
            console.log("The person is an adult");
        else
            console.log("The person is an minor")
    }
}



person1.checkage();





interface teacher {

    name: string;
    subject: string[];
    subjtech(): void;

}



let techer1: teacher = {

    name: "Dima",
    subject: ["Math", "Science"],
    subjtech() {
        console.log(`${this.name} ,"the subject teaches by ", ${this.subject}`)
    }
}

techer1.subjtech();


interface Product {

    name: string;
    price: number;
    quantity: number;
    checkquant(): void;


}


let product1: Product = {
    name: "mobile",
    price: 200,

    quantity: 7,
    checkquant() {
        if (this.quantity > 5) {
            this.price += 0.1 * this.price;
            console.log(this.price)
        }
        else
            console.log(this.price)

    }
}

product1.checkquant();




interface Device {
    name: string;
    start?(): void;

}

let device1: Device = {
    name: "s",


}


function Start1() {

    if (device1.start == undefined) {

        console.log("default setting")
    }
};
Start1();