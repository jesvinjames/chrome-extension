chrome.storage.local.get(['button'], function(data) {
  if (data.button == 'enabled') {
    document.getElementById("button").innerHTML = "Disable";
  } else {
    document.getElementById("button").innerHTML = "Enable";
  }
});

document.getElementById("button").addEventListener("click", function() {
  var button = document.getElementById("button");
  if (button.innerHTML == 'Enable') {
    chrome.tabs.query({url: "https://www.surveyjunkie.com/*"}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {file: "alert.js"});
    });
    chrome.storage.local.set({'button': 'enabled'});
    button.innerHTML = "Disable";
  } else {
    chrome.tabs.query({url: "https://www.surveyjunkie.com/*"}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {code: "mutationObserver.disconnect()"});
    });
    chrome.storage.local.set({'button': 'disabled'});
    button.innerHTML = "Enable";
  }
});
