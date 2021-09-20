function downloadSample() {

document.querySelector('.container').innerHTML = `
<div class="formatedName"><span>James Ford</span></div>
<div class="formatedHeadline"><span>Head of Security</span></div>
<div class="formatedPersonalDescription"><span>Professional Head of Security with more than four years is experience in the business development security. Involved in product testing, managment and development os new business opportunits.</span></div>
<div class="blueBar">
  <div class="formatedEmail"><span>lafleur@dharma.com</span></div>
  <div class="formatedPhoneNumber"><span>+55 48 15162342</span></div>
  <div class="formatedLocation"><span>Alabama, USA</span></div>
  <div class="formatedLinkedinProfile"><span>linkedin.com/in/jamesford</span></div>  
</div>

<h2>SKILLS</h2>
<div class="gridArea">
  <div class="formatedGridArea">
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
  <h3 class="formatedTitle"><span>Head of Security</span></h3>
  <div class="formatedCompany"><span>Dharma Corporation</span></div>
  <div class="period-location">
    <div class="formatedWorkExpPeriod"><span>09/2018 - Present</span></div>
    <div class="formatedCompanyLocation"><span>Sidney - Australia</span></div>
  </div>
  <ul>
    <li class="formatedAward"><span></span>Succefully managed $2-3 million budget projects and succefully the project scheduled goals.</li>  
    <li class="formatedAward"><span></span>Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.</li>    
    <li class="formatedAward"><span></span>Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels.</li>  
    <li class="formatedAward"><span></span>Planned, supervised and coordinated daily activity of 3 junior business analysts.</li>    
  </ul>

  <h3 class="formatedTitle"><span>Developer Assistant</span></h3>
  <div class="formatedCompany"><span>Pluma Tech Inc</span></div>
  <div class="period-location">
    <div class="formatedWorkExpPeriod"><span>04/2014 - 08/2018</span></div>
    <div class="formatedCompanyLocation"><span>Montreal - Canada</span></div>
  </div>
  <ul>
    <li class="formatedAward"><span></span>Succefully managed $2-3 million budget projects and succefully the project scheduled goals.</li>  
    <li class="formatedAward"><span></span>Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.</li>    
    <li class="formatedAward"><span></span>Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels.</li>  
    <li class="formatedAward"><span></span>Planned, supervised and coordinated daily activity of 3 junior business analysts.</li>    
  </ul>
</div> 

<h2>EDUCATION</h2>
<h3 class="formatedEducationTitle"><span>Graphic Designer</span></h3>
<div class="formatedEducationInstitution"><span>Miskatonic University</span></div>
<div class="formatedEducationPeriod period-location"><span>08/2010 - 09/2013</span></div>

<h2>LANGUAGES</h2>
<div class="gridArea">
  <div class="formatedGridArea">
    <div class="formatedCurriculumLanguage"><span>English</span><span>Conversational</span></div>
    <div class="formatedCurriculumLanguage"><span>French</span><span>Native/Bilingual</span></div>
    <div class="formatedCurriculumLanguage"><span>Spanish</span><span>Conversational</span></div>    
  </div>
</div>
`;



downloadCurriculum();
}