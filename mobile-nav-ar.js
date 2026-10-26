(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#mobile-navigation');

  if (!header || !toggle || !nav) return;

  const setOpen = (open) => {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل');
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
  document.querySelectorAll('.site-footer a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === 'privacy.html') link.setAttribute('href', 'privacy-ar.html');
    if (href === 'terms.html') link.setAttribute('href', 'terms-ar.html');
  });
})();
