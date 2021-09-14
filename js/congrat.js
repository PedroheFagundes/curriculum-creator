// Functions

function showCongrat() {
  hideHomeScreen();
  hideSections();
  hideReview();
  hideCurriculum();
  document.querySelector('#congratScreen').setAttribute("class", "showOn");
}

function hideCongrat() {
  document.querySelector('#congratScreen').setAttribute("class", "showOff");
}