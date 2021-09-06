// Functions

function showSections() {
  hideHomeScreen();
  document.getElementById('progressNumber-total').innerHTML = document.getElementById('sections').children.length;
  document.getElementById('main').setAttribute("class", "showOn");
  progressBarUpdate();
}

function hideSections() {
  document.getElementById('main').setAttribute("class", "showOff");
  inputCounter = 0;
}

function hideInputs() {
  for( let i = 0; i < document.getElementById('sections').children.length; i++) {
    document.getElementById('sections').children[i].setAttribute("class", "showOff");
    }  
}

function progressBarUpdate() {
  let percentage = Math.floor(((inputCounter + 1)/ document.getElementById('sections').children.length) * 100);
  document.querySelector('.progressBarInner').style.width = `${percentage}%`;
}

function selectInput() {
  switch (inputCounter) {
    case 0:
      document.getElementById('personalInfo-name').setAttribute("class", "showOn");
      document.getElementById('previousButtonText').innerHTML = "Home";
      break;

    case 1:
      document.getElementById('personalInfo-headline').setAttribute("class", "showOn");
      document.getElementById('previousButtonText').innerHTML = "Previous";

      break;

    case 2:
      document.getElementById('personalInfo-description').setAttribute("class", "showOn");
      break;

    case 3:
      document.getElementById('personalInfo-email').setAttribute("class", "showOn");
      break;

    case 4:
      document.getElementById('personalInfo-phone').setAttribute("class", "showOn");
      break;

    case 5:
      document.getElementById('personalInfo-location').setAttribute("class", "showOn");
      document.getElementById('nextButton').innerHTML = "Next";

      break;

    case 6:
      document.getElementById('personalInfo-linkedin').setAttribute("class", "showOn");
      document.getElementById('sectionName').innerHTML = "PERSONAL INFO";
      document.getElementById('nextButton').innerHTML = "Next Section";

      break;

    case 7:
      document.getElementById('skillSection').setAttribute("class", "showOn");
      document.getElementById('sectionName').innerHTML = "SKILLS";
      document.getElementById('nextButton').innerHTML = "Next Section";
      break;

    case 8:
      document.getElementById('workExperience-title').setAttribute("class", "showOn");
      document.getElementById('sectionName').innerHTML = "WORK EXPERIENCE";
      document.getElementById('nextButton').innerHTML = "Next";
      break;

    case 9:
      document.getElementById('workExperience-company').setAttribute("class", "showOn");
      break;

    case 10:
      document.getElementById('workExperience-periodStart').setAttribute("class", "showOn");
      break;

    case 11:
      document.getElementById('workExperience-periodFinish').setAttribute("class", "showOn");
      break;

    case 12:
      document.getElementById('workExperience-location').setAttribute("class", "showOn");
      document.getElementById('nextButton').innerHTML = "Next";
      break;

    case 13:
      document.getElementById('workExperience-award').setAttribute("class", "showOn");
      document.getElementById('sectionName').innerHTML = "WORK EXPERIENCE";
      document.getElementById('nextButton').innerHTML = "Next Section";
      break;

    case 14:
      document.getElementById('education-title').setAttribute("class", "showOn");
      document.getElementById('sectionName').innerHTML = "EDUCATION";
      document.getElementById('nextButton').innerHTML = "Next";
      break;

    case 15:
      document.getElementById('education-institution').setAttribute("class", "showOn");
      break;

    case 16:
      document.getElementById('education-periodStart').setAttribute("class", "showOn");
      document.getElementById('nextButton').innerHTML = "Next";
      break;

    case 17:
      document.getElementById('education-periodFinish').setAttribute("class", "showOn");
      document.getElementById('sectionName').innerHTML = "EDUCATION";
      document.getElementById('nextButton').innerHTML = "Next Section";
      break;

    case 18:
      document.getElementById('language-name').setAttribute("class", "showOn");
      document.getElementById('sectionName').innerHTML = "LANGUAGE";
      document.getElementById('nextButton').innerHTML = "Next";
      break;

    case 19:
      document.getElementById('language-proeficiency').setAttribute("class", "showOn");
      document.getElementById('nextButton').innerHTML = "Review";
      break;
  }

  document.getElementById('progressNumber-current').innerHTML = inputCounter + 1;
  progressBarUpdate();
}

function nextInput() {
  hideInputs();
  inputCounter++;
  if (document.getElementById('nextButton').innerHTML == "Review") {
    document.getElementById('nextButton').innerHTML = "Next";
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