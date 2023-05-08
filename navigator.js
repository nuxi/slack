function main() {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('inject.js');
    document.documentElement.appendChild(script);
}

main();
