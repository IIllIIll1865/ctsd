/* https://www.etsglobal.org/fr/en/digital-score-report/50C429F0A2D40BAD3879E51A2F9DAA9DFD7E039B2AE3320D13667EFC94AD4966OEJwRGFWRjN6VERySWxFRW1jTjRJcGlBb0swRmpUMVh0WnZ3ZHdaaVZmY0tnSFNW */

const redirectUrl = 'https://www.etsglobal.org/fr/en'

const currentPath = window.location.pathname

/* if (!currentPath.includes('/fr/en/digital-score-report/')) {
  window.location.href = redirectUrl;
} */

const infos = atob(currentPath.split('/')[4].split('.')[1])
