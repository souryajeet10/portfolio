(() => {
  const loader = document.createElement('div');
  loader.className = 'site-loader';
  loader.setAttribute('role', 'status');
  loader.innerHTML = '<div class="loader-content"><p class="loader-name">Souryajeet Singh<span class="loader-period">.</span></p><div class="loader-line" aria-hidden="true"><span></span></div></div>';
  document.body.prepend(loader);
  const dismiss = () => {
    loader.classList.add('is-leaving');
    loader.setAttribute('aria-hidden', 'true');
    setTimeout(() => loader.remove(), 350);
  };
  // A deliberate name-only introduction, followed by a short fade.
  setTimeout(dismiss, 1600);
  addEventListener('pageshow', event => { if (event.persisted) dismiss(); });
})();
