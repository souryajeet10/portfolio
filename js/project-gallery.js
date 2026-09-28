(() => {
  const gallery = document.getElementById('project-gallery');
  if (!gallery) return;
  const runway = gallery.closest('.project-scroll-runway');
  const stage = gallery.closest('.project-scroll-stage');
  const cards = [...gallery.querySelectorAll('.work-card')];
  const previous = document.querySelector('[data-gallery-prev]');
  const next = document.querySelector('[data-gallery-next]');
  const status = document.getElementById('project-gallery-status');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0, distance = 0, frame = 0;
  const start = () => runway.getBoundingClientRect().top + window.scrollY - 24;
  const update = () => {
    frame = 0;
    if (!distance) return;
    const progress = Math.max(0, Math.min(1, (window.scrollY - start()) / distance));
    gallery.scrollLeft = progress * (gallery.scrollWidth - gallery.clientWidth);
    active = Math.round(progress * (cards.length - 1));
    previous.disabled = active === 0;
    next.disabled = active === cards.length - 1;
    const label = `${String(active + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
    if (status.textContent !== label) status.textContent = label;
  };
  const measure = () => {
    const eligible = innerWidth >= 800 && innerHeight >= 620 && !motion.matches;
    runway.classList.toggle('is-pinned', eligible);
    const fits = eligible && stage.offsetHeight <= innerHeight - 48;
    runway.classList.toggle('is-pinned', fits);
    distance = fits ? (cards.length - 1) * Math.max(innerHeight * .85, 650) : 0;
    runway.style.height = fits ? `${stage.offsetHeight + distance}px` : '';
    if (!fits) gallery.scrollLeft = 0;
    update();
  };
  const move = index => {
    if (!distance) return;
    const target = Math.max(0, Math.min(cards.length - 1, index));
    window.scrollTo({top: start() + distance * target / (cards.length - 1), behavior: 'smooth'});
  };
  previous.addEventListener('click', () => move(active - 1));
  next.addEventListener('click', () => move(active + 1));
  gallery.addEventListener('keydown', event => {
    if (event.target !== gallery || !distance) return;
    const targets = {ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: cards.length - 1};
    if (event.key in targets) { event.preventDefault(); move(targets[event.key]); }
  });
  // Keyboard tabbing to another card also brings its vertical scroll position into view.
  gallery.addEventListener('focusin', event => {
    const card = event.target.closest('.work-card');
    if (card && cards.indexOf(card) !== active) move(cards.indexOf(card));
  });
  addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, {passive:true});
  addEventListener('resize', measure);
  addEventListener('load', measure);
  motion.addEventListener('change', measure);
  new ResizeObserver(measure).observe(stage);
  measure();
})();
