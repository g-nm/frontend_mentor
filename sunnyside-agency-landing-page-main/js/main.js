const navbutton = document.querySelector('.header__hamburger');
const navitemblock = document.querySelector('.header__nav');
navbutton.addEventListener('click', function () {
	navitemblock.classList.toggle('header__nav-show');
});
