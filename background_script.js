chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({'button': 'disabled'}, function() {
    console.log('Button initialized.')
  });
});
