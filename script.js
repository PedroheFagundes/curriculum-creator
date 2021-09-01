// Initial Data

let sectionCounter = 0;

//Events


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
      document.getElementById('personalInfo').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').setAttribute("disabled", "disabled");

      break;

    case 1:
      document.getElementById('expertiseArea').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').removeAttribute("disabled");
      break;

    case 2:
      document.getElementById('professionalExperience').setAttribute("class", "sectionOn");
      break;

    case 3:
      document.getElementById('certificate').setAttribute("class", "sectionOn");
      break;

    case 4:
      document.getElementById('awards').setAttribute("class", "sectionOn");
      break;

    case 5:
      document.getElementById('professionalOrganization').setAttribute("class", "sectionOn");
      break;

    case 6:
      document.getElementById('conferencesCourses').setAttribute("class", "sectionOn");
      break;

    case 7:
      document.getElementById('education').setAttribute("class", "sectionOn");
      break;

    case 8:
      document.getElementById('languages').setAttribute("class", "sectionOn");
      document.getElementById('nextButton').removeAttribute("disabled");
      document.getElementById('formatedCurriculumButton').setAttribute("class", "sectionOff");
      document.getElementById('formatedCurriculum').setAttribute("class", "sectionOff");
      break;

    case 9:
      document.getElementById('interests').setAttribute("class", "sectionOn");
      document.getElementById('nextButton').setAttribute("disabled", "disabled");
      document.getElementById('formatedCurriculumButton').setAttribute("class", "sectionOn");
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
  document.getElementById('formatedCurriculum').setAttribute("class", "sectionOn");
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