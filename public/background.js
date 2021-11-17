const browserActions = chrome.browserAction;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  browserActions.setBadgeBackgroundColor({ color: [0, 0, 0, 255] });
  browserActions.setBadgeText({ text: "" + request.count });
  sendResponse(true);
});
