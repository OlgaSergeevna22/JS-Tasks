// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра



const sum = (num1, num2) => {

    if (typeof num1 === 'number' && typeof num2 === 'number') {

        console.log(num1 + num2);
    } else if (typeof num1 === "undefined" || typeof num2 === "undefined") {

        console.log('введите два параметра');
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {

        console.log('введенные данные не являются числами');
    }
}

sum(2, 4); // 6
sum('d', 4); // введенные данные не являются числами
sum(1, [2]); // введенные данные не являются числами
sum(1); // введите два параметра
sum(); // введите два параметра


// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
// "Функция "square" не может быть вызвана без аргумента"
// function square(a) {
//   console.log(a * a)
// }
// square(10) // 100
// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента


function square(a) {

    if (typeof a === "undefined") {

        console.log('Функция "square" не может быть вызвана без аргумента');
    } else {
        console.log(a * a)

    }

}
square(10) // 100
square()

// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

const guesTheNumber = (number) => {

    if (number > 10 || number < 0) {

        console.log('Вы ввели число не от 0 до 10');
    } else {

        let computerNumber = Math.floor(Math.random() * 10);

        if (number === computerNumber) {

            console.log('Вы выиграли');
        } else {

            console.log(`Вы не угадали, ваше число - ${number},  а выпало число ${computerNumber}`);
        }
    }
}

guesTheNumber(11);
guesTheNumber(3);
guesTheNumber(-10);


// Задание 4
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]


let arr = [5, 4, 3, 8, 0];
let newArr = [];

const filterFor = (arr, a) => {

    for (let item of arr) {

        if (item >= a) {

            newArr.push(item);
        }
    }
    console.log(newArr);
}

filterFor(arr, 5) //[5,8]
    //     // filterFor(arr, 10) //[]
    //     // filterFor(arr, 3.11) //[4,5,8]


// Задание 5
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

const copyArr = (arr) => {

    const newArr = arr.map(item => item);
    console.log(newArr);
}

copyArr([2, 5, 8, 'dd', 'asd', [3, 7]]);


// Задание 6
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }


let summa = 0;

const sumObjectValues = (objectWithNumbers) => {

    for (let key in objectWithNumbers) {

        if (typeof objectWithNumbers[key] === 'number') {

            summa += objectWithNumbers[key]
        }
    }

    console.log(summa);
    return summa
}


sumObjectValues({
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
})