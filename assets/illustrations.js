/* Progressive enhancement: image links and the complete gallery work without JS. */
(() => {
  const gallery = document.querySelector('#illustration-grid');
  if (!gallery) return;
  const cards = [...gallery.querySelectorAll('.illustration-card')];
  const filters = document.querySelector('.gallery-filters');
  const count = document.querySelector('#gallery-count');
  const dialog = document.querySelector('#illustration-lightbox');
  const image = dialog.querySelector('#lightbox-image');
  const title = dialog.querySelector('#lightbox-title');
  const position = dialog.querySelector('#lightbox-position');
  const loading = dialog.querySelector('#lightbox-loading');
  let active = 0;
  let previousFocus = null;
  let scrollPosition = 0;
  const visibleLinks = () => cards.filter(card => !card.hidden).map(card => card.querySelector('.illustration-open'));

  filters.hidden = false;
  filters.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      filters.querySelectorAll('button').forEach(other => {
        const selected = other === button;
        other.setAttribute('aria-pressed', String(selected));
        other.classList.toggle('is-active', selected);
      });
      cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
      const total = visibleLinks().length;
      count.textContent = `${total} illustration${total === 1 ? '' : 's'}`;
    });
  });

  // On older browsers, leave the original full-size image links untouched.
  if (typeof dialog.showModal !== 'function') return;
  function show(index) {
    const links = visibleLinks();
    active = (index + links.length) % links.length;
    const link = links[active];
    title.textContent = link.dataset.title;
    position.textContent = `Illustration ${active + 1} of ${links.length}`;
    image.alt = link.dataset.alt;
    loading.textContent = 'Loading full-size illustration…';
    image.classList.add('is-loading');
    image.src = link.href;
  }
  image.addEventListener('load', () => {
    loading.textContent = '';
    image.classList.remove('is-loading');
  });
  image.addEventListener('error', () => {
    loading.textContent = 'This illustration could not load. Please try the next image.';
    image.classList.remove('is-loading');
  });
  gallery.addEventListener('click', event => {
    const link = event.target.closest('.illustration-open');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    previousFocus = link;
    scrollPosition = window.scrollY;
    show(visibleLinks().indexOf(link));
    dialog.showModal();
    document.body.classList.add('lightbox-open');
    document.body.style.top = `-${scrollPosition}px`;
    dialog.querySelector('.lightbox-close').focus();
  });
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.lightbox-prev').addEventListener('click', () => show(active - 1));
  dialog.querySelector('.lightbox-next').addEventListener('click', () => show(active + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(active + (event.key === 'ArrowLeft' ? -1 : 1));
    }
    // The modal dialog isolates the background; keep keyboard focus on its controls.
    if (event.key === 'Tab') {
      const controls = [...dialog.querySelectorAll('button')];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('lightbox-open');
    document.body.style.top = '';
    window.scrollTo({ top: scrollPosition, behavior: 'instant' });
    previousFocus?.focus({ preventScroll: true });
    image.removeAttribute('src');
    loading.textContent = '';
  });
})();
