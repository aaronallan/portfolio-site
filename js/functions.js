// TODO rename these project 1, 2, etc.
const ycf = document.querySelector('.ycf-link');
const ycfContainer = document.querySelector('.ycf');

const nff = document.querySelector('.nff-link');
const nffContainer = document.querySelector('.nff');
const employerLink = document.querySelector('.employer-link');
const avatar = document.querySelector('.filter');
// const djTrigger = document.querySelector('.dj-trigger');

function registerEventListeners() {
	ycf.addEventListener('click', () => {
		[ycfContainer, nffContainer, avatar, employerLink].map(el => el.classList.add('open'));
	});

	nff.addEventListener('click', () => {
		[nffContainer, ycfContainer].map(el => el.classList.add('close'));
		[employerLink, avatar].map(el => el.classList.remove('open'));

	  setTimeout(() => {
			[nffContainer, ycfContainer].map(el => el.classList.remove('close'));
			[nffContainer, ycfContainer].map(el => el.classList.remove('open'));
	  }, 350);
	});

	// djTrigger.addEventListener('mouseover', () => {
	// 	avatar.classList.add('rotate');
	// 	setTimeout(() => avatar.classList.remove('rotate'), 9000)
	// })
}

function fadeIn(obj) {
	obj.classList.add('fadeIn');
}

const pic = new Image();
const pic2 = new Image();

pic.src="images/avatar-purple.png";
pic2.src="images/avatar-orange.png";

document.addEventListener("DOMContentLoaded", function(event) {
	registerEventListeners();
});
