(() => {
  const loader = document.createElement('div');
  loader.className = 'site-loader';
  loader.setAttribute('role', 'status');
  loader.innerHTML = '<div class="loader-content"><p class="loader-name">Souryajeet Singh<span class="loader-period">.</span></p><div class="loader-line" aria-hidden="true"><span></span></div></div>';
  document.body.prepend(loader);
  let finished = false, flight, target;
  const cleanup = () => {
    finished = true;
    if (target) target.style.visibility = '';
    flight?.remove();
    loader.remove();
  };
  const dismiss = () => {
    if (finished) return;
    finished = true;
    target = document.querySelector('#main-header .brand-wordmark');
    const header = document.getElementById('main-header');
    const rect = target?.getBoundingClientRect();
    const style = header && getComputedStyle(header);
    const canFly = !matchMedia('(prefers-reduced-motion: reduce)').matches &&
      (!location.hash || location.hash === '#hero') && window.scrollY < 80 &&
      rect?.width > 0 && rect.top >= 0 && rect.bottom < innerHeight &&
      style?.visibility !== 'hidden' && Number(style?.opacity) > .5;
    if (!canFly) {
      loader.classList.add('is-leaving');
      setTimeout(cleanup, 320);
      return;
    }
    const name = loader.querySelector('.loader-name');
    const range = document.createRange();
    range.selectNodeContents(name);
    const source = range.getBoundingClientRect();
    const typography = getComputedStyle(target);
    flight = target.cloneNode(true);
    flight.removeAttribute('class');
    flight.setAttribute('aria-hidden', 'true');
    Object.assign(flight.style, {
      position: 'fixed', left: `${rect.left}px`, top: `${rect.top}px`,
      width: `${rect.width}px`, height: `${rect.height}px`, margin: '0', padding: '0',
      zIndex: '10002', pointerEvents: 'none', whiteSpace: 'nowrap',
      font: typography.font, letterSpacing: typography.letterSpacing,
      color: typography.color, transformOrigin: '0 0'
    });
    document.body.append(flight);
    target.style.visibility = 'hidden';
    name.style.visibility = 'hidden';
    loader.classList.add('is-leaving');
    const animation = flight.animate([
      {transform: `translate(${source.left - rect.left}px, ${source.top - rect.top}px) scale(${source.width / rect.width}, ${source.height / rect.height})`},
      {transform: 'translate(0, 0) scale(1)'}
    ], {duration: 750, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both'});
    animation.finished.then(cleanup, cleanup);
  };
  setTimeout(dismiss, 1200);
  // Restore the real wordmark if the viewport changes during the handoff.
  addEventListener('resize', () => { if (flight) cleanup(); });
  addEventListener('pageshow', event => { if (event.persisted) cleanup(); });
  setTimeout(cleanup, 2500);
})();
