const leftContent = document.querySelector('.left-content');
const rightContent = document.querySelector('.right-content');
const closeLink = document.querySelector('.close-icon');
const workLink = document.querySelector('.work-link');

function handleMobileAnimation() {

		workLink.addEventListener('click', () => {
			if (window.matchMedia('screen and (max-width: 830px)').matches) {
				leftContent.classList.add('open');
			  rightContent.classList.add('open');
			};
		});

		closeLink.addEventListener('click', () => {
			if (window.matchMedia('screen and (max-width: 830px)').matches) {
				leftContent.classList.add('close');
			  rightContent.classList.add('close');
			  setTimeout(() => {
			  	leftContent.classList.remove('close');
			  	rightContent.classList.remove('close');
			    leftContent.classList.remove('open');
			  	rightContent.classList.remove('open');
			  }, 350);
			}
		});
}

function removeMobileClasses() {
	if (window.matchMedia('screen and (min-width: 830px)').matches) {
		leftContent.classList.remove('close');
		rightContent.classList.remove('close');
		leftContent.classList.remove('open');
		rightContent.classList.remove('open');
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
	handleMobileAnimation();
});

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
    console.log("Resource conscious resize callback!");
		handleMobileAnimation();
		removeMobileClasses();
});
