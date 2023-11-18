import browser from 'webextension-polyfill';

const defaultFilters = ["*://*.zedo.com/*","*://*.wikipedia.org/*"];

browser.tabs.onActivated.addListener((activeInfo) => {
  console.log("Tab activated:", activeInfo.tabId);
});

//list of urls to block
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocking request:", details.url);
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);
