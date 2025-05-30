let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  if (activeTab && startTime) {
    const timeSpent = Date.now() - startTime;
    const url = new URL(activeTab.url);
    const domain = url.hostname;
    chrome.storage.local.get(["log"], (result) => {
      const log = result.log || {};
      log[domain] = (log[domain] || 0) + timeSpent;
      chrome.storage.local.set({ log });
    });
  }
  const tab = await chrome.tabs.get(activeInfo.tabId);
  activeTab = tab;
  startTime = Date.now();
});
