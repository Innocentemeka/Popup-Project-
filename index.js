const openPopup = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

openPopup.addEventListener('click', showPopup);

function showPopup() {
  popup.classList.add('open-popup');
}

closePopup.addEventListener('click', hidePopup);

function hidePopup() {
  popup.classList.remove('open-popup');
}