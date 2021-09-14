// Functions

function showCongrat() {
  hideHomeScreen();
  hideSections();
  hideReview();
  hideCurriculum();
  hideShare();
  document.querySelector('#congratScreen').setAttribute("class", "showOn");
}

function hideCongrat() {
  document.querySelector('#congratScreen').setAttribute("class", "showOff");
}