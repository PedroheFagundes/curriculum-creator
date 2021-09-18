// Initial Data

let inputCounter = 0;

let reviewSectionCounter = 0;

let formatedName;
let formatedHeadline;
let formatedPersonalDescription;
let formatedEmail;
let formatedPhoneNumber;
let formatedLinkedinProfile;

let formatedSkill;

let formatedTitle;
let formatedCompany;
let formatedWorkExpPeriod;
let formatedCompanyLocation;
let formatedAward;

let formatedEducationTitle;
let formatedEducationInstitution;
let formatedEducationPeriod;

let formatedLanguageName;
let formatedLanguageProeficiency;


// Functions

function getUserInfo() {
  getPersonalInfo();
  getSkills();
  getWorkExperience();
  getEducation();
  getLanguage();
}

function getPersonalInfo() {
  formatedName = document.querySelector('#name').value;
  formatedHeadline = document.querySelector('#headline').value;
  formatedPersonalDescription = document.querySelector('#description').value;
  formatedEmail = document.querySelector('#email').value;
  formatedPhoneNumber = document.querySelector('#phone').value;
  formatedLocation = document.querySelector('#location').value;
  formatedLinkedinProfile = document.querySelector('#linkedin').value;
};

function getSkills() {
  formatedSkill = document.querySelector('#skills').value;
};

function getWorkExperience() {
  formatedTitle = document.querySelector('#title').value;
  formatedCompany = document.querySelector('#company').value;
  formatedWorkExpPeriod = `${document.querySelector('#periodStart').value} - ${document.querySelector('#periodFinish').value}`;
  formatedCompanyLocation = document.querySelector('#companyLocation').value;
  formatedAward = document.querySelector('#award').value;
};

function getEducation() {
  formatedEducationTitle = document.querySelector('#educationTitle').value;
  formatedEducationInstitution = document.querySelector('#educationInstitution').value;
  formatedEducationPeriod = `${document.querySelector('#educationPeriodStart').value} - ${document.querySelector('#educationPeriodFinish').value}`;
};

function getLanguage() {
  formatedLanguageName = document.querySelector('#languageName').value;
  formatedLanguageProeficiency = document.querySelector('#languageProeficiency').value;
};

function hideAllScreens() {
  hideCongrat();
  hideCurriculum();
  hideHomeScreen();
  hideReview();
  hideSections();
  hideShare();
}

function setUserInfo() {
  document.querySelectorAll('.formatedName span').forEach((item) => item.innerHTML = formatedName);
  document.querySelectorAll('.formatedHeadline span').forEach((item) => item.innerHTML = formatedHeadline);
  document.querySelectorAll('.formatedPersonalDescription span').forEach((item) => item.innerHTML = formatedPersonalDescription);
  document.querySelectorAll('.formatedEmail span').forEach((item) => item.innerHTML = formatedEmail);
  document.querySelectorAll('.formatedPhoneNumber span').forEach((item) => item.innerHTML = formatedPhoneNumber);
  document.querySelectorAll('.formatedLocation span').forEach((item) => item.innerHTML = formatedLocation);
  document.querySelectorAll('.formatedLinkedinProfile span').forEach((item) => item.innerHTML = formatedLinkedinProfile);
  
  document.querySelectorAll('.formatedSkill span').forEach((item) => item.innerHTML = formatedSkill);
  
  document.querySelectorAll('.formatedTitle span').forEach((item) => item.innerHTML = formatedTitle);
  document.querySelectorAll('.formatedCompany span').forEach((item) => item.innerHTML = formatedCompany);
  document.querySelectorAll('.formatedWorkExpPeriod span').forEach((item) => item.innerHTML = formatedWorkExpPeriod);
  document.querySelectorAll('.formatedCompanyLocation span').forEach((item) => item.innerHTML = formatedCompanyLocation);
  document.querySelectorAll('.formatedAward span').forEach((item) => item.innerHTML = formatedAward);
  
  document.querySelectorAll('.formatedEducationTitle span').forEach((item) => item.innerHTML = formatedEducationTitle);
  document.querySelectorAll('.formatedEducationInstitution span').forEach((item) => item.innerHTML = formatedEducationInstitution);
  document.querySelectorAll('.formatedEducationPeriod span').forEach((item) => item.innerHTML = formatedEducationPeriod);
  
  document.querySelectorAll('.formatedLanguage span:first-child').forEach((item) => item.innerHTML = formatedLanguageName);
  document.querySelectorAll('.formatedLanguage span:last-child').forEach((item) => item.innerHTML = formatedLanguageProeficiency);
};