// script.js

document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');

    // Set the event date (YYYY-MM-DD format)
    const eventDate = new Date('2024-12-31T00:00:00');

    function updateCountdown() {
        const currentDate = new Date();
        const difference = eventDate - currentDate;

        if (difference <= 0) {
            countdownElement.innerHTML = '<h2>Event has started!</h2>';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = formatTime(days);
        document.getElementById('hours').textContent = formatTime(hours);
        document.getElementById('minutes').textContent = formatTime(minutes);
        document.getElementById('seconds').textContent = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Initial call to update countdown
    updateCountdown();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});
