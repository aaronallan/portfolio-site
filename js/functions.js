// TODO rename these project 1, 2, etc.
const ycf = document.querySelector('.ycf-link');
const ycfContainer = document.querySelector('.ycf');

const nff = document.querySelector('.nff-link');
const nffContainer = document.querySelector('.nff');
const employerLink = document.querySelector('.employer-link');

function registerEventListeners() {
	ycf.addEventListener('click', () => {
		ycfContainer.classList.add('open');
	  nffContainer.classList.add('open');
		employerLink.classList.add('nff-open');
	});

	nff.addEventListener('click', () => {
		nffContainer.classList.add('close');
	  ycfContainer.classList.add('close');
		employerLink.classList.remove('nff-open');
	  setTimeout(() => {
	  	nffContainer.classList.remove('close');
	  	ycfContainer.classList.remove('close');
	    nffContainer.classList.remove('open');
	  	ycfContainer.classList.remove('open');
	  }, 350);
	});
}

document.addEventListener("DOMContentLoaded", function(event) {
	registerEventListeners();
});
