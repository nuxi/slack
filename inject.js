function main() {
    if (navigator.platform === "Linux x86_64") {
        Object.defineProperties(navigator, {
            'appVersion': {
                value: "5.0 (Windows)"
            },
            'oscpu': {
                value: "Windows NT 10.0; Win64; x64"
            },
            'platform': {
                value: "Win32"
            }
        });
    }
}

main();
