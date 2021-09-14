// Initial Data

let reviewSectionCounter = 0;

// Functions

function showReview () {
  hideHomeScreen();
  hideSections();
  hideCurriculum();
  hideCongrat();
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

    case 3:
      document.querySelector('#educationReview').setAttribute("class", "showOnReview");
      document.querySelector('#reviewName').innerHTML = "EDUCATION";
      document.querySelector('#reviewNextButtonText').innerHTML = "Next";
      break;

    case 4:
      document.querySelector('#languageReview').setAttribute("class", "showOnReview");
      document.querySelector('#reviewName').innerHTML = "LANGUAGES";
      document.querySelector('#reviewNextButtonText').innerHTML = "Download <br> Curriculum";
      break;
  }
}

function nextReview() {
  hideReviewSections();
  reviewSectionCounter++;
  if (document.querySelector('#reviewNextButtonText').innerHTML == "Download <br> Curriculum") {
    document.querySelector('#reviewNextButton').innerHTML = "Next";
    showCurriculum();
    saveToPDF();
    showCongrat();
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

