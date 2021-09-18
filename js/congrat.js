// Functions

function showCongrat() {
  hideAllScreens();
  document.querySelector('#congratScreen').setAttribute("class", "showOn");
}

function hideCongrat() {
  document.querySelector('#congratScreen').setAttribute("class", "showOff");
}