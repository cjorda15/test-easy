
function startListener(){
	document.addEventListener('click',(event)=>{
		var o = getReleventInfo(event);
		sendMessageToBackground(o);
	})

}

function sendMessageToBackground(object){
	chrome.extension.sendMessage(object);
}

function getReleventInfo(event)
{
	console.log(event.target.innerHTML);

	var objInfo = {type:"element",
	path:processPath(event.path),
	elementInfo:event.target.innerHTML}
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

function logOutPath(path)
{
	outputList =[];
	path.forEach(function(val)
	{
		outputList.push(elemType(val));
	});
	console.log(outputList);
}


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
