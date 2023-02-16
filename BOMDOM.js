// // 1. Повторите поведение страницы по данному образцу. Координаты должны меняться и зависеть от положения курсора мыши на в области

// function coordinates(event) {
//     document.body.innerText = event.clientX + ':' + event.clientY
// }
// document.body.addEventListener('mousemove', coordinates)

// // 2. Повторите поведение страницы по данному образцу. При нажатии на область, красный квадрат его верхний левый угол доложен поместиться в ту координату, на которую вы нажали


// let square = document.querySelector('#square')


// function coordinates(event) {

//     square.style.left = event.clientX + 'px'
//     square.style.top = event.clientY + 'px'
// }

// window.addEventListener('click', coordinates)

// // 3. По аналогии со вторым заданием сделайте чтобы центр квадрата помещался в координату области

// let square = document.querySelector('#square');
// let field = document.querySelector('.field');

// field.onclick = function(event) {

//     let fieldCoords = this.getBoundingClientRect();
//     let squareCoords = {
//         top: event.clientY - fieldCoords.top - field.clientTop - square.clientHeight / 2,
//         left: event.clientX - fieldCoords.left - field.clientLeft - square.clientWidth / 2
//     };

//     if (squareCoords.top < 0) squareCoords.top = -square.clientWidth / 2;

//     if (squareCoords.left < 0) squareCoords.left = -square.clientWidth / 2;

//     if (squareCoords.left + square.clientWidth > field.clientWidth) {
//         squareCoords.left = field.clientWidth - square.clientWidth / 2;
//     }

//     if (squareCoords.top + square.clientHeight > field.clientHeight) {
//         squareCoords.top = field.clientHeight - square.clientHeight / 2;
//     }

//     square.style.left = squareCoords.left + 'px';
//     square.style.top = squareCoords.top + 'px';
// }

// // 4. Создайте инпут который будет выводить код последнего элемента введенного в инпут 

// let input = document.querySelector('.code');
// let result = document.querySelector('.text-code')

// function showKeyCode(event) {
//     let code = event.keyCode;
//     let key = String.fromCharCode(event.keyCode);
//     result.innerHTML = 'Код: ' + code + ', клавиша: ' + key;
// }

// document.body.addEventListener('keypress', showKeyCode)

// // 5. Создайте инпут который будет выводить последний элемент введенный в инпут 


// let form = document.querySelector('form');
// let input = document.querySelector('.last-element')

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let last = input.value.split('')
//     input.value = '';
//     console.log(last[last.length - 1]);

// })


// // 6. Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl.

// let button = document.querySelector('.click-red');

// function getRedCtrl(event) {
//     if (event.ctrlKey) {
//         button.style.background = 'red'
//     }
// }
// button.addEventListener('click', getRedCtrl)

// 7. Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'.

let div = document.querySelector('.write');

function showDownKey(event) {
    if (event.ctrlKey) {
        div.innerHTML = 1
    } else if (event.altKey) {
        div.innerHTML = 2
    } else if (event.shiftKey) {
        div.innerHTML = 3
    } else {
        div.innerHTML = "Ни одна из клавиш не была нажата"
    }
}

div.addEventListener('click', showDownKey)

// // 8. Создайте кнопку и элемент. При нажатии на кнопку, будет скрываться элемент

// document.body.querySelector('.click').onclick = function() {
//     document.body.querySelector('.text-click').hidden = true
// }