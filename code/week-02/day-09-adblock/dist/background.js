"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webextension_polyfill_1 = __importDefault(require("webextension-polyfill"));
const defaultFilters = ["*://*.zedo.com/*", "*://*.wikipedia.org/*"];
webextension_polyfill_1.default.tabs.onActivated.addListener((activeInfo) => {
    console.log("Tab activated:", activeInfo.tabId);
});
webextension_polyfill_1.default.webRequest.onBeforeRequest.addListener(function (details) {
    console.log("Blocking request:", details.url);
    return { cancel: true };
}, { urls: defaultFilters }, ["blocking"]);
//# sourceMappingURL=background.js.map