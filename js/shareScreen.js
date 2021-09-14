// Functions

function showShare() {
  hideHomeScreen();
  hideSections();
  hideReview();
  hideCurriculum();
  hideCongrat();
  document.querySelector('#shareScreen').setAttribute("class", "showOn");
}

function hideShare() {
  document.querySelector('#shareScreen').setAttribute("class", "showOff");
}