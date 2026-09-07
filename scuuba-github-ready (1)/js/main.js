// SCUUBA Main JS
document.addEventListener('DOMContentLoaded', () => {
    // Hide Loading Screen
    setTimeout(() => {
        const loader = document.getElementById('loadingScreen');
        if (loader) loader.classList.add('hidden');
    }, 400);

    // Dynamic Year
    const yearEls = document.querySelectorAll('#currentYear');
    const currentYear = new Date().getFullYear();
    yearEls.forEach(el => el.textContent = currentYear);

    // Online / Offline Detection
    const networkStatus = document.getElementById('networkStatus');
    window.addEventListener('offline', () => {
        if (networkStatus) {
            networkStatus.textContent = "You're currently offline.";
            networkStatus.className = "network-status offline";
        }
    });

    window.addEventListener('online', () => {
        if (networkStatus) {
            networkStatus.textContent = "Connection restored.";
            networkStatus.className = "network-status online";
            setTimeout(() => {
                networkStatus.className = "network-status";
            }, 3000);
        }
    });

    // Centralized Error Handling
    window.addEventListener('error', (e) => {
        console.error("Scuuba Runtime Notice:", e.message);
    });
});
