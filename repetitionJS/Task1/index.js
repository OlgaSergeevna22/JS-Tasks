const buttons = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.content');


buttons.forEach(item => item.addEventListener('click', function openTab(event) {
    event.preventDefault();
    buttons.forEach(button => button.classList.remove('active'))
    contents.forEach(text => text.classList.remove('active'))
    const content = document.querySelector('#' + item.dataset.tab)
    content.classList.add('active')
    item.classList.add('active')
}))