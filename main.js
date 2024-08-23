/* https://www.etsglobal.org/fr/en/digital-score-report/50C429F0A2D40BAD3879E51A2F9DAA9DFD7E039B2AE3320D13667EFC94AD4966OEJwRGFWRjN6VERySWxFRW1jTjRJcGlBb0swRmpUMVh0WnZ3ZHdaaVZmY0tnSFNW */
const redirectUrl = 'https://www.etsglobal.org/fr/en'

const currentPath = window.location.pathname

if (!currentPath.includes('/fr/en/digital-score-report/')) {
  window.location.href = redirectUrl
}

const getDateString = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedDate = `${year}${month}${day}${hours}${minutes}${seconds}`;

  return formattedDate

}

const triggerNativeDownload = async () => {
  const aElement = document.createElement('a')

  aElement.download = `certificate_${getDateString()}.pdf`
  aElement.href = '/pdf/test.pdf'

  setTimeout(() => {
    aElement.click()
    aElement.remove()
    URL.revokeObjectURL(url)
  }, 2000)
}

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
  if (obj.birthDate) birthDateEl.innerHTML = obj.birthDate
  if (obj.name) nameEl.innerHTML = obj.name
  if (obj.name) nameReport.innerHTML = obj.name
  if (obj.testDate) testDateEl.innerHTML = obj.testDate
  if (obj.testCenter) testCenterEl.innerHTML = obj.testCenter
  if (obj.endOfValidity) endOfValidityEl.innerHTML = obj.endOfValidity
  if (obj.totalScore) totalScoreEl.innerHTML = obj.totalScore
  if (obj.listeningScore) listeningScoreEl.innerHTML = obj.listeningScore
  if (obj.readingScore) readingScoreEl.innerHTML = obj.readingScore
  if (obj.blockChainDate) blockChainDateEl.innerHTML = `On ${obj.blockChainDate}`


  const downloadButton = document.querySelector('#download')
  downloadButton.addEventListener('click', () => {
    triggerNativeDownload()
  })

});


/* "birthDate": "2048/12/12",
"name": "John Doe",
"testDate": "2048/12/12",
"testCenter": "ETS Global PARIS France, Metropolitan",
"endOfValidity": "2048/12/12",
"totalScore": "999",
"listeningScore": "999",
"readingScore": "999",
"blockChainDate": "2048/01/12" */