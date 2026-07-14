/**
 * @jest-environment jsdom
 */

const { initImageFade } = require('./functions');

function buildCard(imgClass) {
  const card = document.createElement('div');
  card.className = 'product-inner';
  card.innerHTML = `<img src="images/${imgClass}.png" class="${imgClass}"/>`;
  document.body.appendChild(card);
  return card.querySelector('img');
}

describe('initImageFade', () => {
  beforeEach(() => {
    document.documentElement.className = '';
    document.body.innerHTML = '';
  });

  test('adds the js class to the root element so hidden state only applies with JS', () => {
    buildCard('cb-image');
    initImageFade();
    expect(document.documentElement.classList.contains('js')).toBe(true);
  });

  test('marks an already-loaded (cached) image as loaded immediately', () => {
    const img = buildCard('cb-image');
    Object.defineProperty(img, 'complete', { value: true });
    Object.defineProperty(img, 'naturalWidth', { value: 506 });
    initImageFade();
    expect(img.classList.contains('loaded')).toBe(true);
  });

  test('does not mark a pending image as loaded before its load event', () => {
    const img = buildCard('ba-image');
    Object.defineProperty(img, 'complete', { value: false });
    initImageFade();
    expect(img.classList.contains('loaded')).toBe(false);
  });

  test('marks a pending image as loaded when its load event fires', () => {
    const img = buildCard('ba-image');
    Object.defineProperty(img, 'complete', { value: false });
    initImageFade();
    img.dispatchEvent(new Event('load'));
    expect(img.classList.contains('loaded')).toBe(true);
  });

  test('marks an image as loaded on error so a broken asset never hides the card', () => {
    const img = buildCard('ts-image');
    Object.defineProperty(img, 'complete', { value: false });
    initImageFade();
    img.dispatchEvent(new Event('error'));
    expect(img.classList.contains('loaded')).toBe(true);
  });

  test('handles every product image on the page independently', () => {
    const cached = buildCard('cb-image');
    Object.defineProperty(cached, 'complete', { value: true });
    Object.defineProperty(cached, 'naturalWidth', { value: 506 });
    const pending = buildCard('ba-image');
    Object.defineProperty(pending, 'complete', { value: false });

    initImageFade();
    expect(cached.classList.contains('loaded')).toBe(true);
    expect(pending.classList.contains('loaded')).toBe(false);

    pending.dispatchEvent(new Event('load'));
    expect(pending.classList.contains('loaded')).toBe(true);
  });

  test('ignores images outside product cards', () => {
    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    Object.defineProperty(avatar, 'complete', { value: true });
    Object.defineProperty(avatar, 'naturalWidth', { value: 400 });
    document.body.appendChild(avatar);
    initImageFade();
    expect(avatar.classList.contains('loaded')).toBe(false);
  });

  test('is safe to call on a page with no product images', () => {
    expect(() => initImageFade()).not.toThrow();
  });
});
