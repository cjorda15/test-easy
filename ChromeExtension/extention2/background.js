
console.log("runnin background.js")

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	var parser = new DOMParser();
    var doc = parser.parseFromString(request.elementInfo, "text/xml");
  	console.log(doc);
  });