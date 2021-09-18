// Functions

function showHomeScreen() {
  hideAllScreens();
  document.querySelector('#homeScreen').setAttribute("class", "showOn");
}

function hideHomeScreen() {
  document.querySelector('#homeScreen').setAttribute("class", "showOff");
}

