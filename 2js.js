// Задание 1
// Перепишите код с использованием тернарного оператора

// let country = 'Sweden';
// let access;
// if (country == 'Sweden') {
// access = true;
// } else{
// access = false;
// }

// let country = 'Sweden';
// let access = (country === 'Sweden') ? 'true' : 'false';

// console.log(access);


// Задание 2
// Создать переменную и записать в нее число, например 10.
// 10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.

// let a = 10;
// for (let i = 0; i < 10; i++) {
//     a = a + 1;
// }

// console.log(a);


// Задание 3
// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

// for (i = 0; i <= 8; i += 2) {
//     let numberUser = +prompt("Введите число");
//     if (numberUser === 10) {
//         console.log('Равно 10');
//     } else {
//         console.log('Не равно 10');
//     }
// }

// Задание 4
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

// const count = +prompt('Введите количество чисел');
// for (let i = 0; i < count; i++) {
//     console.log(i ** 2);
// }

// Задание 5
// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

// for (i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }

// }


// Задание 6
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;

}