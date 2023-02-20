// // 1. Написать функцию makeCalculator, которая принимает число x и возвращает функцию, которая возвращает произведение x на 2.

// function makeCalculator(x) {

//     return function() {
//         return x * 2;
//     };
// }
// console.log(makeCalculator(2)());
// console.log(makeCalculator(3)());
// console.log(makeCalculator(2)());


// // Второй способ

// function makeCalculator(x) {

//     const result = function() {
//         return x * 2;
//     };
//     return result
// }

// let calc = makeCalculator(2);
// console.log(calc());
// calc = makeCalculator(5)
// console.log(calc());


// 2. Написать функцию makeCounter, которая возвращает функцию, внутри которой увеличивается сохраненный каким-то образом ранее счетчик.



function makeCounter() {
    let count = 0;
    return function() {
        return count++
    }
}

let counter1 = makeCounter();
let counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());