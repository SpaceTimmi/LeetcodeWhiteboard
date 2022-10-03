(() => {

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { message } = obj; 
        if (message === "onLeetcode") {
            console.log("success!")
        }
    })
})();
