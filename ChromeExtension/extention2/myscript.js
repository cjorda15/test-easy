
function myfunc(){

	console.log(document);


	document.addEventListener('click',(event)=>{
		
		var id = event.target.id;
		console.log("target",event.path);

		testFunction({message:"test1",data:id});
	})

}

function testFunction(object){
	chrome.extension.sendMessage(object);
}

$(document).ready(myfunc);
