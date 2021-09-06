// Initial Data

let inputCounter = 0;

// Functions

function hideHomeScreen () {
  document.getElementById('homeScreen').setAttribute("class", "showOff");
}

function showHomeScreen () {
  document.getElementById('homeScreen').setAttribute("class", "showOn");
  hideSections();
}