"use strict";
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        var _a;
        e.preventDefault();
        const targetId = (_a = this.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.substring(1); // handle possible null
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Update URL without the hash
                window.history.pushState({}, '', `${targetId}`); // Correctly formatted as suggested
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href;
    const hashIndex = currentUrl.indexOf("#");
    if (hashIndex !== -1) {
        // Construct a new URL by removing only the "#" character
        const newUrl = currentUrl.slice(0, hashIndex) + currentUrl.slice(hashIndex + 1);
        // Using the History API to update the URL without refreshing the page
        history.pushState({}, document.title, newUrl);
    }
});
