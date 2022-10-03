chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("leetcode.com")) {

      chrome.tabs.sendMessage(tabId, {
        message: "Onleetcode"
      });
  }
})
