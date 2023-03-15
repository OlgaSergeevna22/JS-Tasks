const button = document.querySelector('button');

button.onclick = function() {
    const theme = document.getElementById('theme')

    if (theme.getAttribute('href') == 'light-theme.css') {
        theme.href = 'dark-theme.css'
        button.innerHTML = 'Светлая тема'
    } else {
        theme.href = 'light-theme.css'
        button.innerHTML = 'Тёмная тема'
    }
}