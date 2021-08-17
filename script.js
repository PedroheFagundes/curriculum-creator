// Functions

function hideSections() {
  for( let i = 0; i < document.getElementById('sections').children.length; i++) {
    document.getElementById('sections').children[i].setAttribute("class", "sectionOff");
    }  
}

function showPersonalInfo() {
  hideSections();
  document.getElementById('personal-info').setAttribute("class", "sectionOn");
}