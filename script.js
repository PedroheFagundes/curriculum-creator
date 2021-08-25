// Initial Data

let sectionCounter = 0;

// Functions

function hideSections() {
  for( let i = 0; i < document.getElementById('sections').children.length; i++) {
    document.getElementById('sections').children[i].setAttribute("class", "sectionOff");
    }  
}

function selectSection() {
  switch (sectionCounter) {
    case 0:
      console.log(sectionCounter);
      document.getElementById('personal-info').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').setAttribute("disabled", "disabled");
      document.getElementById('previousButton').innerHTML = 'Previous';
      document.getElementById('nextButton').innerHTML = 'Next: Expertise Area';

      break;

    case 1:
      document.getElementById('expertise-area').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').removeAttribute("disabled");
      document.getElementById('previousButton').innerHTML = 'Previous: Personal Info';
      document.getElementById('nextButton').innerHTML = 'Next: Professional Experience';
      break;

    case 2:
      document.getElementById('professional-experience').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Expertise Area';
      document.getElementById('nextButton').innerHTML = 'Next: Certificates';
      break;

    case 3:
      document.getElementById('certificate').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Professional Experience';
      document.getElementById('nextButton').innerHTML = 'Next: Awards';
      break;

    case 4:
      document.getElementById('awards').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Certificates';
      document.getElementById('nextButton').innerHTML = 'Next: Professional Organizations';
      break;

    case 5:
      document.getElementById('professional-organization').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Awards';
      document.getElementById('nextButton').innerHTML = 'Next: Conferences & Courses';
      break;

    case 6:
      document.getElementById('conferences-courses').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Professional Organizations';
      document.getElementById('nextButton').innerHTML = 'Next: Education';
      break;

    case 7:
      document.getElementById('education').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Conferences & Courses';
      document.getElementById('nextButton').innerHTML = 'Next: Languages';
      break;

    case 8:
      document.getElementById('languages').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Education';
      document.getElementById('nextButton').removeAttribute("disabled");
      document.getElementById('nextButton').innerHTML = 'Next: Interests';
      break;

    case 9:
      document.getElementById('interests').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Languages';
      document.getElementById('nextButton').setAttribute("disabled", "disabled");
      document.getElementById('nextButton').innerHTML = 'Next';
      break;
  }
}

function nextSection() {
  hideSections();
  sectionCounter++;
  selectSection();
}

function previousSection() {
  hideSections();
  sectionCounter--;
  selectSection();
}