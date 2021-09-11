// Initial Data

let reviewSectionCounter = 0;

// Functions

function showReview () {
  hideHomeScreen();
  hideSections();
  document.querySelector('#reviewScreen').setAttribute("class", "showOn");
}

function hideReview() {
  document.querySelector('#reviewScreen').setAttribute("class", "showOff");
  reviewSectionCounter = 0;
}

function hideReviewSections() {
  for( let i = 0; i < document.querySelector('#review').children.length; i++) {
    document.querySelector('#review').children[i].setAttribute("class", "showOff");
  }  
}

function selectReview() {
  switch (reviewSectionCounter) {
    case 0:
      document.querySelector('#personalInfoReview').setAttribute("class", "showOnReview");
      document.querySelector('#reviewPreviousButtonText').innerHTML = "";
      document.querySelector('#reviewName').innerHTML = "PERSONAL INFO";
      break;

    case 1:
      document.querySelector('#skillReview').setAttribute("class", "showOnReview");
      document.querySelector('#reviewPreviousButtonText').innerHTML = "Previous";
      document.querySelector('#reviewName').innerHTML = "SKILLS";
      break;

    case 2:
      document.querySelector('#workExperienceReview').setAttribute("class", "showOnReview");
      document.querySelector('#reviewName').innerHTML = "WORK EXPERIENCE";
      break;
  }
}

function nextReview() {
  hideReviewSections();
  reviewSectionCounter++;
  if (document.querySelector('#reviewNextButton').innerHTML == "Download Curriculum") {
    document.querySelector('#reviewNextButton').innerHTML = "Next";
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

