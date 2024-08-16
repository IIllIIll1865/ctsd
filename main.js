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

const getBlobFromUrl = async (url) => {
  const response = await fetch(url);
  console.log(response)
  const blob = await response.blob();

  return blob;
};

const convertBlobToDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = reject;
    reader.onload = function () {
      const dataUrl = reader.result;

      resolve(dataUrl);
    };

    reader.readAsDataURL(file);
  });
};

const triggerNativeDownload = async () => {
  const aElement = document.createElement('a')
  const blob = await getBlobFromUrl('https://toeictes2.s3.eu-west-3.amazonaws.com/certificate_202408169158.pdf')
  const url = await convertBlobToDataUrl(blob)

  aElement.download = `certificate_${getDateString()}.pdf`
  aElement.href = url

  aElement.click()

  aElement.remove()

  URL.revokeObjectURL(url)
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