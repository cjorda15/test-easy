function hey()
{
	alert("hey");
}

function startListeners()
{
	chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
	    console.log(request);
	    if(request.command === "command")
	    {
	       doFunction();
	    }
	  });

}


document.addEventListener('DOMContentLoaded', () => {

  var button = document.getElementById('button');
  button.addEventListener('click', () => {
    hey();
  });

  startListeners();

});