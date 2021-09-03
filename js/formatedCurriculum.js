
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