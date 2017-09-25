console.log("Background application is running...")

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request);
  	var parser = new DOMParser();
  	var doc = parser.parseFromString(request.elementInfo, "text/html");
  	console.log(doc);
  });


setTimeout(function(){
	var windowList;
	chrome.windows.getAll({populate : true}, function (window_list) {
        //console.log("windows",window_list);
        windowList = window_list;

        console.log(windowList);
        chrome.tabs.getAllInWindow(windowList[0].id,function(tabs){console.log("tabs",tabs)
        	chrome.tabs.sendMessage(tabs[1].id,{command:"command", message:"sentit"});
    	});
    });


	
	console.log("windows ",chrome.windows);

    //chrome.tabs.sendMessage(tab.id,{action:"SendIt"});
},10000 );