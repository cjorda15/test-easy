function hey()
{
	alert("hey");
}

function startListeners()
{
	chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
	    console.log("working?:",request);
	  });

}


document.addEventListener('DOMContentLoaded', () => {

  var button = document.getElementById('button');
  button.addEventListener('click', () => {
    hey();
  });

  startListeners();

});