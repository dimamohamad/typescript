"use strict";
// rest parameter
function summation(...str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str[i];
    }
    return sum;
}
console.log(summation(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function positive(...arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    return false;
}
console.log(positive(-1, 2, -3, 4, 5, -6, 7, 8, 9, 10));
function maxlength(...str) {
    let max = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > max.length) {
            max = str[i];
        }
    }
    return max;
}
console.log(maxlength("Hello", "World", "TypeScript"));
function occuriance(arr, x) {
    let count = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == x) {
            count++;
        }
    return count;
}
console.log(occuriance("Hello World", "l"));
function Prim(...a) {
    const primes = [];
    for (let i = 0; i < a.length; i++) {
        const num = a[i];
        let isPrime = true;
        if (num <= 1) {
            continue;
        }
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}
console.log(Prim(10, 4, 3, 1, 5));
