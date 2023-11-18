# Day 9

# AdBlock Extension - Day 9 Documentation

## Overview

This document provides an overview of the AdBlock extension developed on Day 9 of the 100 Days of Code challenge. The extension is designed to block specific URLs from loading in the browser, enhancing user experience and privacy.

## Code Snippet

```javascript
import browser from 'webextension-polyfill';

const defaultFilters = ["*://*.zedo.com/*","*://*.wikipedia.org/*"];

browser.tabs.onActivated.addListener((activeInfo) => {
  console.log("Tab activated:", activeInfo.tabId);
});

// List of URLs to block
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocking request:", details.url);
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);
```

## Functionality

1. **Import Statement**:
   - `import browser from 'webextension-polyfill';`:
     This line imports the `webextension-polyfill` library, which allows the extension to use the `browser` namespace, ensuring compatibility across different browsers.

2. **URL Filters**:
   - `const defaultFilters = ["*://*.zedo.com/*","*://*.wikipedia.org/*"];`:
     An array of strings specifying which URLs to block. Currently, it blocks all requests to `zedo.com` and `wikipedia.org`.

3. **Tab Activation Listener**:
   - `browser.tabs.onActivated.addListener((activeInfo) => {...});`:
     This function logs the ID of the activated tab to the console. It's useful for debugging and understanding user interaction.

4. **Request Blocking**:
   - `browser.webRequest.onBeforeRequest.addListener(...);`:
     This listener intercepts all web requests matching the URLs specified in `defaultFilters`. When a match is found, it cancels the request, effectively blocking the website.

5. **Blocking Mechanism**:
   - `return { cancel: true };`:
     This line instructs the browser to cancel the web request, thereby preventing the page or resource from loading.

## Usage

To use this extension, it must be loaded into a compatible web browser. It will automatically start blocking the specified URLs. Users can modify the `defaultFilters` array to customize the blocking behavior.

## Potential Enhancements

1. **User Interface**:
   Implementing a user interface to allow dynamic addition and removal of URLs from the block list.
2. **Whitelist Feature**:
   Adding a whitelist feature to allow certain pages from the blocked domains.
3. **Performance Optimization**:
   Refining the code for better performance, especially with a large list of URLs.
