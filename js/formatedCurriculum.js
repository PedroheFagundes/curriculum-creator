
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
    
    pdf.save("Person Name.pdf");
  });
}

function showCurriculum() {
  document.querySelector('#formatedCurriculum').setAttribute("class", "showOn");
}

function hideCurriculum() {
  document.querySelector('#formatedCurriculum').setAttribute("class", "showOff");
}

function setPersonalInfo() {
  document.querySelector('#formatedName').innerHTML = document.querySelector('#name').value;
  document.querySelector('#formatedHeadline').innerHTML = document.querySelector('#headline').value;
  document.querySelector('#formatedPersonalDescription').innerHTML = document.querySelector('#personalDescription').value;
  document.querySelector('#formatedEmail').innerHTML = document.querySelector('#email').value;
  document.querySelector('#formatedPhoneNumber').innerHTML = document.querySelector('#phoneNumber').value;
  document.querySelector('#formatedLocation').innerHTML = document.querySelector('#location').value;
  document.querySelector('#formatedWebsite').innerHTML = document.querySelector('#website').value;
  document.querySelector('#formatedLinkedinProfile').innerHTML = document.querySelector('#linkedinProfile').value;
}

function setExpertiseArea() {
  let expertiseArray = document.querySelector('#expertiseAreaString').value.split(',');
  document.querySelector('#formatedExpertiseArea').innerHTML = expertiseArray;
}