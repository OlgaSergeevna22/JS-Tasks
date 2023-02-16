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

// 3. По аналогии со вторым заданием сделайте чтобы центр квадрата помещался в координату области

let square = document.querySelector('#square');
let field = document.querySelector('.field');

field.onclick = function(event) {

    let fieldCoords = this.getBoundingClientRect();
    let squareCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - square.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - square.clientWidth / 2
    };

    if (squareCoords.top < 0) squareCoords.top = -square.clientWidth / 2;

    if (squareCoords.left < 0) squareCoords.left = -square.clientWidth / 2;

    if (squareCoords.left + square.clientWidth > field.clientWidth) {
        squareCoords.left = field.clientWidth - square.clientWidth / 2;
    }

    if (squareCoords.top + square.clientHeight > field.clientHeight) {
        squareCoords.top = field.clientHeight - square.clientHeight / 2;
    }

    square.style.left = squareCoords.left + 'px';
    square.style.top = squareCoords.top + 'px';
}



// // 8. Создайте кнопку и элемент. При нажатии на кнопку, будет скрываться элемент

// document.body.querySelector('.click').onclick = function() {
//     document.body.querySelector('.text-click').hidden = true
// }