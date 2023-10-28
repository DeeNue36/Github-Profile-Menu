const button = document.getElementById('avatar-navbar');
const closeButton = document.querySelector('.close-button');
const navigationMenu = document.querySelector('.navigation__menu');
const icon = document.getElementById('close');

//event listeners
button.addEventListener('click', () => {
    navigationMenu.classList.remove('none');
    navigationMenu.classList.remove('hide');
    icon.style.visibility = 'visible';
});

closeButton.addEventListener('click', () => {
    navigationMenu.classList.add('hide');
});