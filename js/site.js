(() => {
  document.querySelectorAll('[data-footer-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.setAttribute('aria-controls', 'mobile-menu');
    const sync = () => toggle.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
    new MutationObserver(sync).observe(menu, { attributes: true, attributeFilter: ['class'] });
    sync();
  }
})();
