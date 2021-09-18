// Functions

function showSections() {
  hideAllScreens();
  document.querySelector('#progressNumber-total').innerHTML = document.querySelector('#sections').children.length;
  document.querySelector('#main').setAttribute("class", "showOn");
  progressBarUpdate();
}

function hideSections() {
  document.querySelector('#main').setAttribute("class", "showOff");
  inputCounter = 0;
}

function hideInputs() {
  for( let i = 0; i < document.querySelector('#sections').children.length; i++) {
    document.querySelector('#sections').children[i].setAttribute("class", "showOff");
    }  
}

function progressBarUpdate() {
  let percentage = Math.floor(((inputCounter + 1)/ document.querySelector('#sections').children.length) * 100);
  document.querySelector('.progressBarInner').style.width = `${percentage}%`;
}

function selectInput() {
  switch (inputCounter) {
    case 0:
      document.querySelector('#personalInfo-name').setAttribute("class", "showOn");
      document.querySelector('#previousButtonText').innerHTML = "Home";
      break;

    case 1:
      document.querySelector('#personalInfo-headline').setAttribute("class", "showOn");
      document.querySelector('#previousButtonText').innerHTML = "Previous";

      break;

    case 2:
      document.querySelector('#personalInfo-description').setAttribute("class", "showOn");
      break;

    case 3:
      document.querySelector('#personalInfo-email').setAttribute("class", "showOn");
      break;

    case 4:
      document.querySelector('#personalInfo-phone').setAttribute("class", "showOn");
      break;

    case 5:
      document.querySelector('#personalInfo-location').setAttribute("class", "showOn");
      document.querySelector('#nextButton').innerHTML = "Next";

      break;

    case 6:
      document.querySelector('#personalInfo-linkedin').setAttribute("class", "showOn");
      document.querySelector('#sectionName').innerHTML = "PERSONAL INFO";
      document.querySelector('#nextButton').innerHTML = "Next Section";

      break;

    case 7:
      document.querySelector('#skillSection').setAttribute("class", "showOn");
      document.querySelector('#sectionName').innerHTML = "SKILLS";
      document.querySelector('#nextButton').innerHTML = "Next Section";
      break;

    case 8:
      document.querySelector('#workExperience-title').setAttribute("class", "showOn");
      document.querySelector('#sectionName').innerHTML = "WORK EXPERIENCE";
      document.querySelector('#nextButton').innerHTML = "Next";
      break;

    case 9:
      document.querySelector('#workExperience-company').setAttribute("class", "showOn");
      break;

    case 10:
      document.querySelector('#workExperience-periodStart').setAttribute("class", "showOn");
      break;

    case 11:
      document.querySelector('#workExperience-periodFinish').setAttribute("class", "showOn");
      break;

    case 12:
      document.querySelector('#workExperience-location').setAttribute("class", "showOn");
      document.querySelector('#nextButton').innerHTML = "Next";
      break;

    case 13:
      document.querySelector('#workExperience-award').setAttribute("class", "showOn");
      document.querySelector('#sectionName').innerHTML = "WORK EXPERIENCE";
      document.querySelector('#nextButton').innerHTML = "Next Section";
      break;

    case 14:
      document.querySelector('#education-title').setAttribute("class", "showOn");
      document.querySelector('#sectionName').innerHTML = "EDUCATION";
      document.querySelector('#nextButton').innerHTML = "Next";
      break;

    case 15:
      document.querySelector('#education-institution').setAttribute("class", "showOn");
      break;

    case 16:
      document.querySelector('#education-periodStart').setAttribute("class", "showOn");
      document.querySelector('#nextButton').innerHTML = "Next";
      break;

    case 17:
      document.querySelector('#education-periodFinish').setAttribute("class", "showOn");
      document.querySelector('#sectionName').innerHTML = "EDUCATION";
      document.querySelector('#nextButton').innerHTML = "Next Section";
      break;

    case 18:
      document.querySelector('#language-name').setAttribute("class", "showOn");
      document.querySelector('#sectionName').innerHTML = "LANGUAGE";
      document.querySelector('#nextButton').innerHTML = "Next";
      break;

    case 19:
      document.querySelector('#language-proeficiency').setAttribute("class", "showOn");
      document.querySelector('#nextButton').innerHTML = "Review";
      break;
  }

  document.querySelector('#progressNumber-current').innerHTML = inputCounter + 1;
  progressBarUpdate();
}

function nextInput() {
  hideInputs();
  inputCounter++;
  getUserInfo();
  setUserInfo();
  if (document.querySelector('#nextButton').innerHTML == "Review") {
    document.querySelector('#nextButton').innerHTML = "Next";
    showReview();
  }
  selectInput();
}

function previousInput() {
  hideInputs();
  inputCounter--;
  if(inputCounter < 0) {
    showHomeScreen();
  }
  selectInput();
}