// Initial Data

let inputCounter = 0;

//Events

// Functions

function hideHomeScreen () {
  document.getElementById('homeScreen').setAttribute("class", "showOff");
  document.getElementById('progressNumber-total').innerHTML = document.getElementById('sections').children.length;
  document.getElementById('progressBar').setAttribute("class", "showOn");
  progressBarUpdate();
}

function showHomeScreen () {
  document.getElementById('homeScreen').setAttribute("class", "showOn");
  document.getElementById('progressBar').setAttribute("class", "showOff");
  inputCounter = 0;
}