console.log("Background application is running...")

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(request);
  	var parser = new DOMParser();
  	// var doc = parser.parseFromString(request.elementInfo, "text/html");
  	// console.log(doc);
    findEidtor(function(tab){
      chrome.tabs.sendMessage(tab.id,{command:"command", message:"sentit"});
    });
    

    //chrome.tabs.sendMessage(findEidtor().id,{command:"command", message:"sentit"});
  });


// setTimeout(function(){
// 	var windowList;
// 	chrome.windows.getAll({populate : true}, function (window_list) {
//         //console.log("windows",window_list);
//         windowList = window_list;

//         console.log(windowList);
//         chrome.tabs.getAllInWindow(windowList[0].id,function(tabs){
//           console.log("tabs",tabs)
//         	chrome.tabs.sendMessage(tabs[1].id,{command:"command", message:"sentit"});
//     	});
//     });


	
// 	console.log("windows ",chrome.windows);

//     //chrome.tabs.sendMessage(tab.id,{action:"SendIt"});
// },10000 );

// 

function findEidtor(callback)
{
  chrome.windows.getAll({populate : true}, function (windowList) {
    console.log("windowList:",windowList);
    for(let i = 0; i < windowList.length; i++)
    {
      chrome.tabs.getAllInWindow(windowList[i].id, theTabs = function(tabs){
        console.log("tabs:",tabs);
        for(let j=0; j < tabs.length; j++)
        {
          if(tabs[j].title === "Eronious")
          {
            console.log("the tab",tabs[j]);
            callback(tabs[j]);
          }
        }
      });
    }
  });
}