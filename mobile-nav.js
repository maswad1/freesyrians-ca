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
  const inner = document.querySelector('#contact .language-section-inner');
  if (!inner) return;

  const copy = inner.querySelector('div');
  if (!copy) return;

  copy.innerHTML = `
    <p class="section-label">CONTACT</p>
    <h2>Connect with Free Syrians.</h2>
    <p>Contact us to share a story or event, suggest a resource, report inaccurate media coverage, offer a correction, or discuss community collaboration.</p>
    <p>Email: <a href="mailto:info@freesyrians.ca">info@freesyrians.ca</a></p>
  `;

  if (!inner.querySelector('.section-button')) {
    const emailButton = document.createElement('a');
    emailButton.className = 'section-button';
    emailButton.href = 'mailto:info@freesyrians.ca';
    emailButton.textContent = 'Email Free Syrians';
    inner.appendChild(emailButton);
  }
})();
