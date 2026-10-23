(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#mobile-navigation');

  if (!header || !toggle || !nav) return;

  const setOpen = (open) => {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  toggle.addEventListener('click', () => {
    setOpen(!header.classList.contains('menu-open'));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  const desktop = window.matchMedia('(min-width: 981px)');
  desktop.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
})();

(() => {
  if (!document.querySelector('#media-watch')) return;
  const script = document.createElement('script');
  script.src = 'media-watch.js?v=1';
  script.defer = true;
  document.body.appendChild(script);
})();
