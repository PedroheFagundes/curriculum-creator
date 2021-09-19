function downloadSample() {

document.querySelector('.container').innerHTML = `
<div class="formatedName"><span>James Ford</span></div>
<div class="formatedHeadline"><span>Head of Security</span></div>
<div class="formatedPersonalDescription"><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iusto, aperiam suscipit voluptate vero libero sit molestiae natus eveniet, amet aliquid consectetur fuga at itaque quod quos nobis architecto optio?</span></div>
<div class="blueBar">
  <div class="formatedEmail"><span>lafleur@dharma.com</span></div>
  <div class="formatedPhoneNumber"><span>+55 48 15162342</span></div>
  <div class="formatedLocation"><span>Alabama, USA</span></div>
  <div class="formatedLinkedinProfile"><span>linkedin.com/in/jamesford</span></div>  
</div>

<div class="gridArea">
  <h2>SKILLS</h2>
  <div class="formatedSkillArea">
    <div class="formatedSkill"><span>SE0</span></div>
    <div class="formatedSkill"><span>Communication</span></div>
    <div class="formatedSkill"><span>Decision Making</span></div>
    <div class="formatedSkill"><span>Emotional Intelligence</span></div>
    <div class="formatedSkill"><span>Public Speaking</span></div>
    <div class="formatedSkill"><span>Negotiation</span></div>
    <div class="formatedSkill"><span>Teamwork</span></div>
    <div class="formatedSkill"><span>Research & Strategy</span></div>
    <div class="formatedSkill"><span>Outbound Marketing</span></div>
    <div class="formatedSkill"><span>Email Marketing</span></div>
    <div class="formatedSkill"><span>Google Analytics</span></div>
    <div class="formatedSkill"><span>Sales & Marketing</span></div>
  </div>
</div>

<div class="workExperienceArea">
  <h2>WORK EXPERIENCE</h2>
  <h3 class="formatedTitle"><span>Developer Assistant</span></h3>
  <div class="formatedCompany"><span>Pluma Tech Inc</span></div>
  <div class="formatedWorkExpPeriod"><span>09/2018 - Present</span></div>
  <div class="formatedCompanyLocation"><span>Sidney - Australia</span></div>
  <div class="formatedAward"><span></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident em eos vel asperiores culpa mollitia ex delectus nulla cupiditate, architecto quos.</div>  
</div> 

<div class="formatedEducationTitle"><span>Graphic Designer</span></div>
<div class="formatedEducationInstitution"><span>Miskatonic University</span></div>
<div class="formatedEducationPeriod"><span>08/2010 - 09/2013</span></div>

<div class="formatedLanguage"><span>English</span><span>Conversational</span></div>
`;



downloadCurriculum();
}