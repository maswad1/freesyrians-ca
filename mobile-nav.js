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

(() => {
  const inner = document.querySelector('#resources .language-section-inner');
  if (!inner) return;

  const copy = inner.querySelector('div');
  if (!copy) return;

  copy.innerHTML = `
    <p class="section-label">RESOURCES</p>
    <h2>Trusted starting points for Syria.</h2>
    <p>This collection points visitors to established organizations working on humanitarian support, displacement, documentation and accountability, and the preservation of Syria’s cultural heritage.</p>

    <div class="places-block" aria-label="Syria resources">
      <div class="places-grid">
        <a class="place-card place-card-link" href="https://help.unhcr.org/syria/" target="_blank" rel="noopener noreferrer">
          <h3>UNHCR Syria Help</h3>
          <p>Practical information for Syrians returning home, people displaced inside Syria, refugees, asylum seekers, and those looking for UNHCR services.</p>
        </a>

        <a class="place-card place-card-link" href="https://www.icrc.org/en/where-we-work/syria" target="_blank" rel="noopener noreferrer">
          <h3>ICRC in Syria</h3>
          <p>Humanitarian information on assistance, missing persons, family links, health, protection, and the effects of conflict on Syrian communities.</p>
        </a>

        <a class="place-card place-card-link" href="https://iiim.un.org/" target="_blank" rel="noopener noreferrer">
          <h3>UN IIIM</h3>
          <p>The United Nations mechanism that collects, preserves, and analyzes evidence concerning the most serious international crimes committed in Syria since 2011.</p>
        </a>

        <a class="place-card place-card-link" href="https://whc.unesco.org/en/statesparties/sy" target="_blank" rel="noopener noreferrer">
          <h3>UNESCO — Syrian Heritage</h3>
          <p>Information on Syria’s World Heritage sites, including Damascus, Aleppo, Palmyra, Bosra, the Ancient Villages of Northern Syria, and the Crac des Chevaliers.</p>
        </a>
      </div>
    </div>

    <p>These are independent external resources. Inclusion here does not mean Free Syrians endorses every statement or position published by these organizations.</p>
  `;
})();
