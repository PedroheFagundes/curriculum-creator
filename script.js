// Initial Data

let sectionCounter = 0;

//Events


// Functions

function requestFullScreen(element) {

  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  if (check === true) {

  // Supports most browsers and their versions.
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

  if (requestMethod) { // Native full screen.
      requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
          wscript.SendKeys("{F11}");
      }
  }
}
}

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
      document.getElementById('previousButton').innerHTML = 'Previous';
      document.getElementById('nextButton').innerHTML = 'Next: Expertise Area';

      break;

    case 1:
      document.getElementById('expertiseArea').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').removeAttribute("disabled");
      document.getElementById('previousButton').innerHTML = 'Previous: Personal Info';
      document.getElementById('nextButton').innerHTML = 'Next: Professional Experience';
      break;

    case 2:
      document.getElementById('professionalExperience').setAttribute("class", "sectionOn");
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
      document.getElementById('professionalOrganization').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Awards';
      document.getElementById('nextButton').innerHTML = 'Next: Conferences & Courses';
      break;

    case 6:
      document.getElementById('conferencesCourses').setAttribute("class", "sectionOn");
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
      document.getElementById('formatedCurriculumButton').setAttribute("class", "sectionOff");
      document.getElementById('formatedCurriculum').setAttribute("class", "sectionOff");
      break;

    case 9:
      document.getElementById('interests').setAttribute("class", "sectionOn");
      document.getElementById('previousButton').innerHTML = 'Previous: Languages';
      document.getElementById('nextButton').setAttribute("disabled", "disabled");
      document.getElementById('nextButton').innerHTML = 'Next';
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