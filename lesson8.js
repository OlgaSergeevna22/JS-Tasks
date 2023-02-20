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


// // 2. Написать функцию makeCounter, которая возвращает функцию, внутри которой увеличивается сохраненный каким-то образом ранее счетчик.


// function makeCounter() {
//     let count = 0;
//     return function() {
//         return count++
//     }
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());


// // 3. Написать функцию startsWith, которая принимает 2 строки и проверяет, начинается ли первая строка с символов второй строки. Функция возвращает true или false.

// function startsWith(str1, str2) {
//     str1 = str1.split('');
//     str2 = str2.split('')
//     return (str2.includes(str1[0]));
// }

// console.log(startsWith('asdf', 'dfg'));
// console.log(startsWith('qwert', 'qazxs'));


// 4* Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку и закрывается по нажатию на кнопку-крестик или на тёмную область вокруг окошка.

let popup = document.getElementById('myPopup');
let btnOpen = document.querySelector('.btnPoput');
let btnClose = document.querySelector('.close');
let windowDark = document.querySelector('.windowDark')
let overlay = document.querySelector('.overlay')

function open() {
    popup.style.display = 'block';
    overlay.style.display = 'block'
}
btnOpen.addEventListener('click', open)

function close() {
    popup.style.display = 'none'
    overlay.style.display = 'none'
}
btnClose.addEventListener('click', close)

function closeDark(event) {
    if (event.target == overlay) {
        popup.style.display = 'none'
        overlay.style.display = 'none'
    }
}
window.addEventListener('click', closeDark)