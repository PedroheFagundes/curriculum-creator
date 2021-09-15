// Initial Data

let reviewSectionCounter = 0;

// Functions

function showReview () {
  hideHomeScreen();
  hideSections();
  hideCurriculum();
  hideCongrat();
  hideShare();
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
    downloadCurriculum();
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

function getUserInfo() {
  getPersonalInfo();
  getSkills();
}

function getPersonalInfo() {
  var formatedName = document.querySelector('#name').value;
  var formatedHeadline = document.querySelector('#headline').value;
  var formatedPersonalDescription = document.querySelector('#description').value;
  var formatedEmail = document.querySelector('#email').value;
  var formatedPhoneNumber = document.querySelector('#phone').value;
  var formatedLocation = document.querySelector('#location').value;
  var formatedLinkedinProfile = document.querySelector('#linkedin').value;
}

function getSkills() {
  let skillsArray = document.querySelector('#skills').value.split(',');
}

function getWorkExperience() {
  var formatedTitle = document.querySelector('#title').value;
  var formatedCompany = document.querySelector('#company').value;
  var formatedWorkExpPeriodStart = document.querySelector('#periodStart').value;
  var formatedWorkExpPeriodFinish = document.querySelector('#periodFinish').value;
  var formatedCompanyLocation = document.querySelector('#companyLocation').value;
  var formatedAward = document.querySelector('#award').value;
}

