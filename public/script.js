const form = document.getElementById('uv-form');
const address = document.getElementById('uv-address');

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/service/'
    }).then(() => {
        console.log('Service Worker registered');
    }).catch((error) => {
        console.error('Service Worker registration failed:', error);
    });
}

// Handle form submission
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    let url = address.value.trim();
    if (!url) return;

    // Check if input is a search query or URL
    if (!isUrl(url)) {
        url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
    } else if (!(url.startsWith('http://') || url.startsWith('https://'))) {
        url = 'https://' + url;
    }

    // Encode the URL using Ultraviolet
    const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);
    
    // Navigate to the proxied URL
    window.location.href = encodedUrl;
});

// Handle quick links
document.querySelectorAll('.links-grid a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.getAttribute('data-url');
        const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);
        window.location.href = encodedUrl;
    });
});

// Check if string is a valid URL
function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') {
        return true;
    }
    return false;
}
