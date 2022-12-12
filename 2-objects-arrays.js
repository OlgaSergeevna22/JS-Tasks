// Задание 1
// Напишите функцию, которая принимает три числовых аргумента: number, min, max.
// Функция проверяет, находится ли число number в диапазоне чисел от min до max.
// 1 вариант решения: с помощью логического И в условии.
// *2 вариант решения: с помощью логического ИЛИ в условии.

const checkNumber = (number, min, max) => {

    // 1 вариант

    if (number > min && number < max) {

        console.log(true);
    } else {

        console.log(false);
    }

    // *2 вариант

    if (!(number < min || number > max)) {

        console.log(true);
    } else {

        console.log(false);
    }

}

checkNumber(-9, 16, 100);