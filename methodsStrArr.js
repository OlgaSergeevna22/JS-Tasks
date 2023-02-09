// Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// ucFirst('javaScript');
// ucFirst('ольга');

// Задание 2

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// function checkSpam(str) {
//     let newStr = str.toLowerCase();
//     if (newStr.includes('badword') || newStr.includes('xxx')) {
//         return true
//     } else {
//         return false
//     }
// }

// checkSpam('you can\'t say badWord');

// Задание 3

// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
// Обратите внимание: метод reverse существует только у массивов.
function getReverseStr(str) {
    return str.split('').reverse().join('')
}

getReverseStr('qwert');
getReverseStr('привет Женя');