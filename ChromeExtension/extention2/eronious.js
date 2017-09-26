function hey() {
  alert('hey');
}

function startListeners() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var selectedElement = document.getElementById('render-options');

    const idDetails = request.path[0].id
      ? `<div class="selected-element-details">id: ${request.path[0].id}</div>`
      : '';
    const classDetails = request.path[0].class
      ? `<div class="selected-element-details">id: ${request.path[0].id}</div>`
      : '';
    const styleDetails = request.path[0].style
      ? `<div class="selected-element-details">id: ${request.path[0]
          .style}</div>`
      : '';
    const typeDetails = request.path[0].type
      ? `<div class="selected-element-details">id: ${request.path[0]
          .type}</div>`
      : '';

    selectedElement.innerHTML = `<div class="selected-element-container">

					<div class="selected-element-details">id: ${request.path[0].id}</div>
					<div class="selected-element-details">class: ${request.path[0].class}</div>
					<div class="selected-element-details">style: ${request.style}</div>
					<div class="selected-element-details">type: ${request.type}</div>

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
