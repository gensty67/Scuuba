// SCUUBA Storage JS
window.ScuubaStorage = {
    set: function(key, value) {
        try {
            localStorage.setItem('scuuba_' + key, JSON.stringify(value));
        } catch (e) {
            console.error("Storage error", e);
        }
    },
    get: function(key) {
        try {
            const item = localStorage.getItem('scuuba_' + key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error("Storage error", e);
            return null;
        }
    }
};
