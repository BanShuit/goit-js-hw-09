import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

flatpickr(datetimePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if (selectedDate < new Date()) {
            window.alert("Please choose a date in the future");
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
        }
    },
});

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
}

let intervalId;

function startTimer() {
    const endDate = new Date(datetimePicker.value).getTime();

    intervalId = setInterval(() => {
        const currentDate = new Date().getTime();
        const remainingTime = endDate - currentDate;

        if (remainingTime <= 0) {
            clearInterval(intervalId);
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(remainingTime);

        timerDays.textContent = addLeadingZero(days);
        timerHours.textContent = addLeadingZero(hours);
        timerMinutes.textContent = addLeadingZero(minutes);
        timerSeconds.textContent = addLeadingZero(seconds);
    }, 1000);
}

startButton.addEventListener('click', startTimer);
