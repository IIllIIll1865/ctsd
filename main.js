/* https://www.etsglobal.org/fr/en/digital-score-report/50C429F0A2D40BAD3879E51A2F9DAA9DFD7E039B2AE3320D13667EFC94AD4966OEJwRGFWRjN6VERySWxFRW1jTjRJcGlBb0swRmpUMVh0WnZ3ZHdaaVZmY0tnSFNW */

const redirectUrl = 'https://www.etsglobal.org/fr/en'

const currentPath = window.location.pathname

document.addEventListener("DOMContentLoaded", (event) => {
  const infos = atob(currentPath.split('/')[4].split('.')[1])

  const birthDateEl = document.querySelector('#birthDate')
  const nameEl = document.querySelector('#name')
  const nameReport = document.querySelector('#nameReport')
  const testDateEl = document.querySelector('#testDate')
  const testCenterEl = document.querySelector('#testCenter')
  const endOfValidityEl = document.querySelector('#endOfValidity')
  const totalScoreEl = document.querySelector('#totalScore')
  const listeningScoreEl = document.querySelector('#listeningScore')
  const readingScoreEl = document.querySelector('#readingScore')
  const blockChainDateEl = document.querySelector('#blockChainDate')

  const obj = JSON.parse(infos)
  birthDateEl.innerHTML = obj.birthDate
  nameEl.innerHTML = obj.name
  nameReport.innerHTML = obj.name
  testDateEl.innerHTML = obj.testDate
  testCenterEl.innerHTML = obj.testCenter
  endOfValidityEl.innerHTML = obj.endOfValidity
  totalScoreEl.innerHTML = obj.totalScore
  listeningScoreEl.innerHTML = obj.listeningScore
  readingScoreEl.innerHTML = obj.readingScore
  blockChainDateEl.innerHTML = obj.blockChainDate



});


/* if (!currentPath.includes('/fr/en/digital-score-report/')) {
  window.location.href = redirectUrl
} */


/* "birthDate": "2048/12/12",
"name": "John Doe",
"testDate": "2048/12/12",
"testCenter": "ETS Global PARIS France, Metropolitan",
"endOfValidity": "2048/12/12",
"totalScore": "999",
"listeningScore": "999",
"readingScore": "999",
"blockChainDate": "2048/01/12" */