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