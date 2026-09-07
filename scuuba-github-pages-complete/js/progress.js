// SCUUBA Progress JS
document.addEventListener('DOMContentLoaded', () => {
    const targetProgress = window.SCUUBA_CONFIG.progress || 34;
    const progressBar = document.getElementById('heroProgressBar');
    const percentageEl = document.getElementById('heroPercentage');

    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = targetProgress + '%';
        }, 300);
    }

    if (percentageEl) {
        let current = 0;
        const duration = 1500;
        const stepTime = Math.max(Math.floor(duration / targetProgress), 20);
        
        const timer = setInterval(() => {
            current += 1;
            percentageEl.textContent = current + '%';
            if (current >= targetProgress) {
                clearInterval(timer);
                percentageEl.textContent = targetProgress + '%';
            }
        }, stepTime);
    }
});
