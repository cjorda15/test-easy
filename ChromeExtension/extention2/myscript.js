
function startListener(){
	document.addEventListener('click',(event)=>{
		console.log("clicked something");
		var o = getReleventInfo(event);
		console.log("info:",o)
		sendMessageToBackground(o);
	})

	chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
	    console.log(request);
	    if(request.command === "command")
	    {
	       doFunction();
	    }
	  });

	// chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
 //   			//if (msg.action == 'SendIt') {
 //      		alert("Message recieved!");
 //   	});
};


function doFunction(element, command, parapeter)
{
	console.log("doFunciton");
	document.getElementById("header-bottom-left").click();
}


function sendMessageToBackground(object){
	chrome.extension.sendMessage(object);
}

function getReleventInfo(event)
{
	//console.log(event.target.innerHTML);

	var objInfo = {type:"element",
	path:processPath(event.path),
	elementInfo:event.target.outerHTML}
	return objInfo;
}

function getObjectInfo(target)
{
	rtnObj = {};
	rtnObj.id = target.id;
	rtnObj.class = target.className;
	return rtnObj;
}

function processPath(path)
{
	var partPath = [];
 	var part = path[0];
	if("HTMLBodyElement|HTMLHtmlElement|HTMLHtmlElement|Window".includes(elemType(part)))
	{
		//do nothing for now
	}
	else
	{
		partPath.push(getObjectInfo(part));
		//console.log(partPath)
		path.splice(0, 1);
		partPath = partPath.concat(processPath(path));
	}
	return partPath;
}

// function logOutPath(path)
// {
// 	outputList =[];
// 	path.forEach(function(val)
// 	{
// 		outputList.push(elemType(val));
// 	});
// 	console.log(outputList);
// }


function elemType(elementObj)
{
	//"HTMLElement",
	//"HTMLDivElement",
	//"HTMLBodyElement",
	//"HTMLHtmlElement",
	//"HTMLHtmlElement", 
	//"Window"
	return elementObj.toString().split(" ")[1].split("]")[0];
}

$(document).ready(startListener);
