
var counter = 1;

var lastTabId = -1;
function sendMessage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, "Background page started.");
  });
}

sendMessage();
chrome.browserAction.setBadgeText({text: "ON"});
console.log("Loaded.");

chrome.runtime.onInstalled.addListener(function() {
  console.log("Installed.");
  console.log("pop js run ")

  document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("title").innerHTML = "yourTextHere";
  })

})
function myFunction(){
  
}
