let totalTime = 60; // total waktu dalam detik
let timerElement = document.getElementById('timer');

function startTimer() {
    let timeLeft = totalTime;

    const interval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // Format angka menjadi dua digit
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerElement.textContent = `${minutes}:${seconds}`;

        // Jika waktu habis
        if (timeLeft <= 0) {
            clearInterval(interval);
            // Mulai kembali timer
            startTimer();
        }

        timeLeft--;
    }, 1000);
}

// Mulai timer saat halaman dimuat
window.onload = startTimer;