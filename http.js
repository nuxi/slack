"use strict";

/**
 * Rewrite the User-Agent header to be Windows.
 */
function rewriteUserAgentHeader(e) {
    for (let header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
            header.value = header.value.replace("X11; Linux x86_64;", "Windows NT 10.0; Win64; x64;");
        }
    }
    return {requestHeaders: e.requestHeaders};
}

/**
 * Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
 * only for the target page.
 *
 * Make it "blocking" so we can modify the headers.
 */
browser.webRequest.onBeforeSendHeaders.addListener(rewriteUserAgentHeader,
                                                   {urls: ["*://*.slack.com/*"]},
                                                   ["blocking", "requestHeaders"]);
