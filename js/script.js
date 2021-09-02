// Initial Data

let inputCounter = 0;
let sectionCounter = 0;

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
      document.getElementById('progressNumber-current').innerHTML = inputCounter + 1;
      document.getElementById('previousButtonText').innerHTML = "Home";
      progressBarUpdate();
      break;

    case 1:
      document.getElementById('personalInfo-headline').setAttribute("class", "showOn");
      document.getElementById('progressNumber-current').innerHTML = inputCounter + 1;
      document.getElementById('previousButtonText').innerHTML = "Previous";
      progressBarUpdate();
      break;

    case 2:
      document.getElementById('professionalExperience').setAttribute("class", "showOn");
      break;

    case 3:
      document.getElementById('certificate').setAttribute("class", "showOn");
      break;

    case 4:
      document.getElementById('awards').setAttribute("class", "showOn");
      break;

    case 5:
      document.getElementById('professionalOrganization').setAttribute("class", "showOn");
      break;

    case 6:
      document.getElementById('conferencesCourses').setAttribute("class", "showOn");
      break;

    case 7:
      document.getElementById('education').setAttribute("class", "showOn");
      break;

    case 8:
      document.getElementById('languages').setAttribute("class", "showOn");
      document.getElementById('nextButton').removeAttribute("disabled");
      document.getElementById('formatedCurriculumButton').setAttribute("class", "showOff");
      document.getElementById('formatedCurriculum').setAttribute("class", "showOff");
      break;

    case 9:
      document.getElementById('interests').setAttribute("class", "showOn");
      document.getElementById('nextButton').setAttribute("disabled", "disabled");
      document.getElementById('formatedCurriculumButton').setAttribute("class", "showOn");
      break;
  }
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

function saveToPDF() {
  var HTML_Width = $(".canvas_div_pdf").width();
  var HTML_Height = $(".canvas_div_pdf").height();
  var top_left_margin = 15;
  var PDF_Width = HTML_Width+(top_left_margin*2);
  var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;
  
  var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
  

  html2canvas($(".canvas_div_pdf")[0],{allowTaint:true}).then(function(canvas) {
    canvas.getContext('2d');
    
    console.log(canvas.height+"  "+canvas.width);
    
    
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
    
    
    for (var i = 1; i <= totalPDFPages; i++) { 
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
    }
    
      pdf.save("Dados-Formatados.pdf");
      });
}

function showCurriculum() {
  document.getElementById('formatedCurriculum').setAttribute("class", "showOn");
  setPersonalInfo();
  setExpertiseArea();
}

function setPersonalInfo() {
  document.getElementById('formatedName').innerHTML = document.getElementById('name').value;
  document.getElementById('formatedHeadline').innerHTML = document.getElementById('headline').value;
  document.getElementById('formatedPersonalDescription').innerHTML = document.getElementById('personalDescription').value;
  document.getElementById('formatedEmail').innerHTML = document.getElementById('email').value;
  document.getElementById('formatedPhoneNumber').innerHTML = document.getElementById('phoneNumber').value;
  document.getElementById('formatedLocation').innerHTML = document.getElementById('location').value;
  document.getElementById('formatedWebsite').innerHTML = document.getElementById('website').value;
  document.getElementById('formatedLinkedinProfile').innerHTML = document.getElementById('linkedinProfile').value;
}

function setExpertiseArea() {
  let expertiseArray = document.getElementById('expertiseAreaString').value.split(',');
  document.getElementById('formatedExpertiseArea').innerHTML = expertiseArray;
}