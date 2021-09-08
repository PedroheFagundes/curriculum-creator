// Initial Data

let reviewSectionCounter = 0;

// Functions

function showReview () {
  hideHomeScreen();
  hideSections();
  document.getElementById('reviewScreen').setAttribute("class", "showOn");
}

function hideReview() {
  document.getElementById('reviewScreen').setAttribute("class", "showOff");
  reviewSectionCounter = 0;
}

function hideReviewSections() {
  for( let i = 0; i < document.getElementById('review').children.length; i++) {
    document.getElementById('review').children[i].setAttribute("class", "showOff");
  }  
}

function selectReview() {
  switch (reviewSectionCounter) {
    case 0:
      document.getElementById('personalInfoReview').setAttribute("class", "showOnReview");
      document.getElementById('reviewPreviousButtonText').innerHTML = "";
      break;

    case 1:
      document.getElementById('skillReview').setAttribute("class", "showOnReview");
      document.getElementById('reviewPreviousButtonText').innerHTML = "Previous";
      break;
  }
}

function nextReview() {
  hideReviewSections();
  reviewSectionCounter++;
  if (document.getElementById('reviewNextButton').innerHTML == "Download Curriculum") {
    document.getElementById('reviewNextButton').innerHTML = "Next";
    saveToPDF();
  }
  selectReview();
}

function previousReview() {
  hideReviewSections();
  reviewSectionCounter--;
  if(reviewSectionCounter < 0) {
    showHomeScreen();
  }
  selectReview();
}

