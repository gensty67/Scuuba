// SCUUBA Utils JS
window.ScuubaUtils = {
    formatDate: function(date) {
        return new Date(date).toLocaleDateString();
    },
    sanitize: function(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }
};
