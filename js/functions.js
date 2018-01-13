// TODO rename these project 1, 2, etc.
const ycf = document.querySelector('.ycf-link');
const ycfContainer = document.querySelector('.ycf');

const nff = document.querySelector('.nff-link');
const nffContainer = document.querySelector('.nff');
const employerLink = document.querySelector('.employer-link');
const avatar = document.querySelector('.filter');
const djTrigger = document.querySelector('.dj-trigger');

function registerEventListeners() {
	ycf.addEventListener('click', () => {
		ycfContainer.classList.add('open');
		nffContainer.classList.add('open');
		avatar.classList.add('open');
		employerLink.classList.add('nff-open');
	});

	nff.addEventListener('click', () => {
		nffContainer.classList.add('close');
		ycfContainer.classList.add('close');
		ycfContainer.classList.add('close');
		employerLink.classList.remove('nff-open');
		avatar.classList.remove('open');
	  setTimeout(() => {
	  	nffContainer.classList.remove('close');
	  	ycfContainer.classList.remove('close');
	    nffContainer.classList.remove('open');
	  	ycfContainer.classList.remove('open');
	  }, 350);
	});

	djTrigger.addEventListener('mouseover', () => {
		avatar.classList.add('rotate');
		setTimeout(() => avatar.classList.remove('rotate'), 9000)
	})
}

document.addEventListener("DOMContentLoaded", function(event) {
	registerEventListeners();
});
