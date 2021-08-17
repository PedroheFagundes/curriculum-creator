// Functions

function hideSections() {
  for( let i = 0; i < document.getElementById('sections').children.length; i++) {
    document.getElementById('sections').children[i].setAttribute("class", "sectionOff");
    }  
}

function ableButtons() {
  for( let i = 0; i < document.getElementById('sections-buttons').children.length; i++) {
    document.getElementById('sections-buttons').children[i].removeAttribute("disabled");
    }  
}

function showPersonalInfo() {
  ableButtons();
  hideSections();
  document.getElementById('personal-info').setAttribute("class", "sectionOn");
  document.getElementById('personal-info-button').setAttribute("disabled", true);
}

function showExpertiseArea() {
  ableButtons();
  hideSections();
  document.getElementById('expertise-area').setAttribute("class", "sectionOn");
  document.getElementById('expertise-area-button').setAttribute("disabled", true);
}