import browser from 'webextension-polyfill';

const defaultFilters = ["*://*.zedo.com/*","*://*.wikipedia.org/*"];
interface RequestDetails {
  url: string;
}

export function blockRequest(details: RequestDetails) {
  if (defaultFilters.some(filter => details.url.match(filter))) {
    console.log("Blocking request:", details.url);
    return { cancel: true };
  }
  return { cancel: false };
}

browser.tabs.onActivated.addListener((activeInfo) => {
  console.log("Tab activated:", activeInfo.tabId);
});

browser.webRequest.onBeforeRequest.addListener(
  function(details: RequestDetails) {
    return blockRequest(details);
  },
  { urls: defaultFilters },
  ["blocking"]
);
