function hey()
{
	console.log("hey");
}

console.log("runnin background.js")
// console.log(chrome.tabs);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request)
  	//var obj = JSON.parse(request.data);
  	//console.log("start:",obj,":end");
  });


// function hey()
// {
// 	alert("hey");
// }
// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // Send a message to the active tab
//   console.log("clicked");
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//   });
// });