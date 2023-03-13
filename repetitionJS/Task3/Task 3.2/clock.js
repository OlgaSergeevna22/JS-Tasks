const deg = 6;
const hour = document.getElementById('hour-hand');
const min = document.getElementById('min-hand')
const sec = document.getElementById('sec-hand');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
})