console.log("Background application is running...")

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request);
  	var parser = new DOMParser();
  	// var doc = parser.parseFromString(request.elementInfo, "text/html");
  	// console.log(doc);
    var tb = findEidtor();
    console.log("the tab",tb);

    //chrome.tabs.sendMessage(findEidtor().id,{command:"command", message:"sentit"});
  });


setTimeout(function(){
	var windowList;
	chrome.windows.getAll({populate : true}, function (window_list) {
        //console.log("windows",window_list);
        windowList = window_list;

        console.log(windowList);
        chrome.tabs.getAllInWindow(windowList[0].id,function(tabs){
          console.log("tabs",tabs)
        	chrome.tabs.sendMessage(tabs[1].id,{command:"command", message:"sentit"});
    	});
    });


	
	console.log("windows ",chrome.windows);

    //chrome.tabs.sendMessage(tab.id,{action:"SendIt"});
},10000 );

function findEidtor()
{
  var windowList;
  chrome.windows.getAll({populate : true}, function (window_list) {
    return window_list;
  });
  console.log("windowList:",windowList);

  for(let i = 0; i < windowList.length; i++)
  {
     var theTabs;
      chrome.tabs.getAllInWindow(windowList[i].id, theTabs = function(tabs){
         return tabs;
      });
      for(let j=0; j < theTabs.length; j++)
      {
          if(theTabs[j].title === "Eronious")
          {
            return theTabs[j];
          }
      }
  }
}