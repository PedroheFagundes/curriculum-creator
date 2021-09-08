// Initial Data

let inputCounter = 0;

// Functions

function hideHomeScreen () {
  document.querySelector('#homeScreen').setAttribute("class", "showOff");
}

function showHomeScreen () {
  document.querySelector('#homeScreen').setAttribute("class", "showOn");
  hideSections();
}