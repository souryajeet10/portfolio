(() => {
  'use strict';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const portrait = document.querySelector('.portrait-switch');
  if (portrait) {
    const realImage = document.getElementById('hero-img-real');
    let pinned = false, hovering = false;
    function updatePortrait() {
      const revealed = (pinned || hovering) && realImage.complete && realImage.naturalWidth > 0;
      portrait.classList.toggle('is-revealed', revealed);
      portrait.setAttribute('aria-pressed', String(pinned));
      portrait.setAttribute('aria-label', pinned ? 'Show creative portrait' : 'Show real portrait');
    }
    portrait.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovering = true; updatePortrait(); } });
    portrait.addEventListener('pointerleave', () => { hovering = false; updatePortrait(); });
    portrait.addEventListener('click', () => { pinned = !pinned; hovering = false; updatePortrait(); });
    portrait.addEventListener('keydown', event => { if (event.key === 'Escape') { pinned = false; hovering = false; updatePortrait(); } });
    realImage.addEventListener('load', updatePortrait);
    realImage.addEventListener('error', () => {
      portrait.disabled = true;
    });
  }
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const value = id => contactForm.querySelector(`#${id}`).value.trim();
      const body = `${value('message')}\n\nFrom: ${value('name')}\nReply to: ${value('email')}`;
      const draft = `mailto:souryajeet2006@gmail.com?subject=${encodeURIComponent(value('subject'))}&body=${encodeURIComponent(body)}`;
      document.getElementById('contact-status').textContent = 'Your email app will open with a draft. If it does not, email souryajeet2006@gmail.com directly. Your message is still here.';
      window.location.href = draft;
    });
  }
  // A decorative companion to the native pointer; never intercepts interactions.
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const cursor = document.createElement('div');
  cursor.className = 'cursor-companion';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<span class="cursor-ring"></span>';
  document.body.append(cursor);
  let pointerX = 0, pointerY = 0, cursorX = 0, cursorY = 0;
  let cursorFrame = 0, cursorVisible = false, previousFrame = 0;
  const cursorEnabled = () => finePointer.matches && !reducedMotion.matches && !document.hidden;
  function hideCursor() {
    cursorVisible = false;
    cursor.classList.remove('is-visible', 'is-interactive');
    cancelAnimationFrame(cursorFrame);
    cursorFrame = 0;
    previousFrame = 0;
  }
  function drawCursor(time) {
    const elapsed = previousFrame ? Math.min(time - previousFrame, 64) : 16;
    previousFrame = time;
    const easing = 1 - Math.exp(-elapsed / 55);
    cursorX += (pointerX - cursorX) * easing;
    cursorY += (pointerY - cursorY) * easing;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    if (Math.hypot(pointerX - cursorX, pointerY - cursorY) > 0.1) {
      cursorFrame = requestAnimationFrame(drawCursor);
    } else { cursorFrame = 0; previousFrame = 0; }
  }
  document.addEventListener('pointermove', event => {
    if (!cursorEnabled() || event.pointerType === 'touch') { hideCursor(); return; }
    if (event.target.closest('input, textarea, select, [contenteditable="true"], iframe')) {
      hideCursor(); return;
    }
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!cursorVisible) {
      cursorX = pointerX; cursorY = pointerY;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      cursorVisible = true;
      cursor.classList.add('is-visible');
    }
    cursor.classList.toggle('is-interactive', !!event.target.closest('a, button:not(:disabled), [role="button"]'));
    if (!cursorFrame) cursorFrame = requestAnimationFrame(drawCursor);
  }, { passive: true });
  document.addEventListener('pointerdown', event => {
    if (!cursorEnabled() || !cursorVisible || event.pointerType === 'touch' || event.button !== 0) return;
    const ring = cursor.firstElementChild;
    ring.getAnimations().forEach(animation => animation.cancel());
    ring.animate([
      { transform: 'translate(-50%, -50%) scale(0.75)', opacity: 0.9 },
      { transform: 'translate(-50%, -50%) scale(1.4)', opacity: 0.25 },
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }
    ], { duration: 380, easing: 'ease-out' });
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', hideCursor);
  window.addEventListener('blur', hideCursor);
  document.addEventListener('visibilitychange', hideCursor);
  document.addEventListener('keydown', hideCursor);
  finePointer.addEventListener('change', hideCursor);
  reducedMotion.addEventListener('change', hideCursor);
  const scene = document.createElement('div');
  scene.className = 'ambient-scene';
  scene.setAttribute('aria-hidden', 'true');
  const svgNamespace = 'http://www.w3.org/2000/svg';
  const waves = document.createElementNS(svgNamespace, 'svg');
  waves.classList.add('ambient-waves');
  waves.setAttribute('viewBox', '0 0 1440 800');
  waves.setAttribute('preserveAspectRatio', 'none');
  waves.setAttribute('focusable', 'false');
  for (let i = 0; i < 8; i++) {
    const wave = document.createElementNS(svgNamespace, 'path');
    wave.classList.add('ambient-wave');
    wave.setAttribute('d', 'M -240 180 C 260 -20 660 110 1040 270 S 1520 410 1720 350');
    wave.setAttribute('transform', `translate(0 ${i * 43})`);
    wave.style.setProperty('--wave-delay', `${-i * 0.55}s`);
    waves.append(wave);
  }
  scene.append(waves);
  document.body.prepend(scene);
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  let scheduled = false;
  function updateProgress() {
    const distance = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0})`;
    scheduled = false;
  }
  addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  addEventListener('resize', updateProgress);
  updateProgress();

  const revealSelector = [
    '#hero .lg\\:col-span-7 > *', '#hero .lg\\:col-span-5',
    '.watermark-label', 'section h2',
    '#skills .text-center.max-w-3xl', '#skills h3', '#skills .badge-item',
    '#projects .editorial-heading', '#projects article', '#projects .work-end',
    '#experience .journey-intro', '#experience .journey-entry',
    '#about .order-1 > p', '#about .order-1 > .flex', '#about .glass-panel',
    '#contact .text-center.max-w-3xl', '#contact .glass-panel',
    '#site-footer .signature-inner > *'
  ].join(', ');
  // Animate each content block once, without stacking parent and child reveals.
  const targets = [...document.querySelectorAll(revealSelector)]
    .filter(el => !el.parentElement.closest(revealSelector));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    targets.forEach(el => {
      el.classList.add('motion-reveal');
      el.style.setProperty('--reveal-delay', `${Math.min([...el.parentElement.children].indexOf(el) % 6, 4) * 65}ms`);
      observer.observe(el);
    });
    document.documentElement.classList.add('motion-ready');
    function settleMotion() {
      if (reducedMotion.matches) {
        targets.forEach(el => el.classList.add('is-visible'));
        observer.disconnect();
      }
    }
    reducedMotion.addEventListener('change', settleMotion);
    settleMotion();
  }
  document.addEventListener('visibilitychange', () => {
    document.documentElement.classList.toggle('motion-paused', document.hidden);
  });
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.setAttribute('aria-controls', 'mobile-menu');
    const syncMenu = () => toggle.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
    new MutationObserver(syncMenu).observe(menu, { attributes: true, attributeFilter: ['class'] });
    syncMenu();
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !menu.classList.contains('hidden')) { toggle.click(); toggle.focus(); }
    });
  }
})();
