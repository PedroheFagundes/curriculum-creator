// Functions

function showShare() {
  hideAllScreens();
  document.querySelector('#shareScreen').setAttribute("class", "showOn");
}

function hideShare() {
  document.querySelector('#shareScreen').setAttribute("class", "showOff");
}