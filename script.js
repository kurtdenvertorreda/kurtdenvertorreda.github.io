
const newsletterPopup = document.getElementById('newsletter-popup');
const closePopup = document.getElementById('close-popup');

window.addEventListener('load', function() {
  newsletterPopup.style.display = 'block';
});

closePopup.addEventListener('click', function() {
  newsletterPopup.style.display = 'none';
});

function shouldShowPopup() {
  const popupCookie = getCookie('popupShown');
  return !popupCookie; 
}

function showPopup() {
  newsletterPopup.style.display = 'block';
}

function setPopupCookie() {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7);
  document.cookie = 'popupShown=true; expires=' + expirationDate.toUTCString();
}

function getCookie(cookieName) {
  const name = cookieName + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return '';
}

closePopup.addEventListener('click', function () {
  newsletterPopup.style.display = 'none';
  setPopupCookie(); 
});

if (shouldShowPopup()) {
  showPopup();
}
