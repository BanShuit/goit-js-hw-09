const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const colorInfoTextarea = document.getElementById('info');

let intervalId = null;

startButton.addEventListener('click', startColorSwitch);
stopButton.addEventListener('click', stopColorSwitch);

function startColorSwitch() {
    clearInterval(intervalId);
    intervalId = setInterval(changeColor, 750);
}

function stopColorSwitch() {
    clearInterval(intervalId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorInfoTextarea.value = `Aktualny kolor: ${randomColor}`;
}
