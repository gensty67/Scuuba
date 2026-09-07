// SCUUBA Contact JS
document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const email = window.SCUUBA_CONFIG.contactEmail;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast("Email copied to clipboard!");
                }).catch(() => {
                    fallbackCopyText(email);
                });
            } else {
                fallbackCopyText(email);
            }
        });
    }

    function fallbackCopyText(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showToast("Email copied to clipboard!");
        } catch (err) {
            showToast("Failed to copy email.");
        }
        document.body.removeChild(textArea);
    }

    window.showToast = function(message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
});
