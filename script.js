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
      document.getElementById('formated-curriculum-button').setAttribute("class", "sectionOff");
      break;

    case 9:
      document.getElementById('interests').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Languages';
      document.getElementById('nextButton').setAttribute("disabled", "disabled");
      document.getElementById('nextButton').innerHTML = 'Next';
      document.getElementById('formated-curriculum-button').setAttribute("class", "sectionOn");
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

//// Save to PDF
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
  document.getElementById('formated-curriculum').setAttribute("class", "sectionOn");
}