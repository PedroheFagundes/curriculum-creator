// Functions

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
      break;

    case 6:
      document.getElementById('personalInfo-linkedin').setAttribute("class", "showOn");
      document.getElementById('sectionName').innerHTML = "PERSONAL INFO";
      break;

    case 7:
      document.getElementById('skillSection').setAttribute("class", "showOn");
      document.getElementById('sectionName').innerHTML = "SKILLS";
      break;
  }

  document.getElementById('progressNumber-current').innerHTML = inputCounter + 1;
  progressBarUpdate();
}


function nextInput() {
  hideInputs();
  inputCounter++;
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