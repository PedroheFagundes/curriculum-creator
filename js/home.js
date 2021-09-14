// Initial Data

let inputCounter = 0;

// Functions

function showHomeScreen () {
  document.querySelector('#homeScreen').setAttribute("class", "showOn");
  hideSections();
  hideReview();
  hideCurriculum();
  hideCongrat();
  hideShare()
}

function hideHomeScreen () {
  document.querySelector('#homeScreen').setAttribute("class", "showOff");
}

