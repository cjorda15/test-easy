function hey() {
  alert('hey');
}

function startListeners() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var selectedElement = document.getElementById('render-options');

    const idDetails = request.path[0];

    // request.path[0].elementType = request.path[0].elementType.toLowerCase();
    selectedElement.innerHTML = `
					<div class="selected-element-container">
					<div class="selected-element-details">text: ${request.text}</div>
					<div class="selected-element-details">id: ${request.path[0].id}</div>
					<div class="selected-element-details">class: ${request.path[0].class}</div>
					<div class="selected-element-details">element type: ${request.path[0]
            .elementType}</div>
				</div>`;

    console.log('working?:', request);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  var button = document.getElementById('button');
  button.addEventListener('click', () => {
    hey();
  });

  startListeners();
});
