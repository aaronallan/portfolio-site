function initImageFade() {
  document.documentElement.classList.add('js');

  var images = document.querySelectorAll('.product-inner img');
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', markLoaded);
      img.addEventListener('error', markLoaded);
    }
  }

  function markLoaded(event) {
    event.currentTarget.classList.add('loaded');
  }
}

if (typeof document !== 'undefined') {
  // add the gate class before the body parses so images are never
  // painted visible and then re-hidden
  document.documentElement.classList.add('js');
  if (document.readyState !== 'loading') {
    initImageFade();
  } else {
    document.addEventListener('DOMContentLoaded', initImageFade);
  }
}

if (typeof module !== 'undefined') {
  module.exports = { initImageFade: initImageFade };
}
