

function myfunc(){
	const store = []
	console.log(document);
	var e = document.getElementById("header");
	console.log("1:",e);
	e.style.backgroundColor = "red";
	e = document.getElementById("header");
	console.log("2:",e);
	document.addEventListener('click',(event)=>{
		console.log("fuck you")
		store.push(document)
		console.log(store,"QQQQ")
		console.log(event.target,"event")
		


	})
	// $("#header").onClick =fun;
	// console.log($("#header-bottom-left").onClick);

	//<div id="header-bottom-left"><a href="/" id="header-img" class="default-header" title="">reddit.com</a>&nbsp;<ul class="tabmenu "><li class="selected"><a href="https://www.reddit.com/" class="choice">hot</a></li><li><a href="https://www.reddit.com/new/" class="choice">new</a></li><li><a href="https://www.reddit.com/rising/" class="choice">rising</a></li><li><a href="https://www.reddit.com/controversial/" class="choice">controversial</a></li><li><a href="https://www.reddit.com/top/" class="choice">top</a></li><li><a href="https://www.reddit.com/gilded/" class="choice">gilded</a></li><li><a href="https://www.reddit.com/wiki/" class="choice">wiki</a></li></ul></div>
    // var x = $('#options option:selected').text();
    // $("body").append('<div style="width:200px; height:200px; border: 1px solid red;"></div>');
}

function fun()
{
	alert("hry");
}

$(document).ready(myfunc);


// var x = $("header-bottom-left");
// x.onClick = testFunction;
// console.log($("header-bottom-left"));
// function testFunction(event)
// {
// 	alert("you clicked it");
// }

// // hey();

// //console.log(chrome.tabs);

/*
function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var makeItGreen = 'document.body.style.border = "5px solid green"';

var executing = chrome.tabs.executescript ({
  code: makeItGreen
});
executing.then(onExecuted, onError);*/


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       var firstHref = $("a[href^='http']").eq(0).attr("href");

//       console.log(firstHref);
//     }
//   }
// );