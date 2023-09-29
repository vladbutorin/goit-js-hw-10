import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateTimer() {
    const endDate = flatpickrInstance.selectedDates[0];
    const now = new Date();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    daysElement.textContent = addLeadingZero(days);
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor((ms % hour) / minute);
    const seconds = Math.floor((ms % minute) / second);

    return { days, hours, minutes, seconds };
}

const now = new Date();
const currentDateTime = `${now.getFullYear()}-${addLeadingZero(now.getMonth() + 1)}-${addLeadingZero(now.getDate())}T${addLeadingZero(now.getHours())}:${addLeadingZero(now.getMinutes())}`;

const datetimePicker = document.querySelector("#datetime-picker");
const flatpickrInstance = flatpickr(datetimePicker, {
    enableTime: true,
    time_24hr: true,
    minuteIncrement: 1,
    defaultDate: currentDateTime, 
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const now = new Date();

        if (selectedDate <= now) {
            window.alert("Please choose a date in the future");
            return;
        }

        startButton.removeAttribute("disabled");

        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    },
});

const startButton = document.querySelector("[data-start]");

const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let timerInterval;

startButton.addEventListener("click", () => {
    startButton.setAttribute("disabled", "disabled");
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
});

function stopTimer() {
    clearInterval(timerInterval);
}

export { stopTimer };