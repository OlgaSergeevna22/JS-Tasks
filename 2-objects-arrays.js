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



// Задание 2

// Есть объект с именами и заработными платами инженеров:
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
// Заработная плата ххх составляет ххх рублей.
// Ваше решение должно работать для любого количества ключей в объекте!

const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}

for (let key in engineers) {
    console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей`);
}


// Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

const elements = [2, 10, 'cat', true, [1, 2, 3]]

for (let i = 1; i < elements.length; i += 2) {

    console.log(elements[i]);
}


// Задание 4
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

for (let i = 0; i < numbers.length; i++) {

    console.log(`Индексу ${[i]} соответствует число ${numbers[i]}`);
}


// Задание 5
// Дан массив объектов, например:
// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];


for (let i = 0; i < questions.length; i++) {

    questions[i].usersAnswer = null;

}

console.log(questions);