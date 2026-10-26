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

(() => {
  const inner = document.querySelector('#events .language-section-inner');
  if (!inner) return;

  const copy = inner.querySelector('div');
  if (!copy) return;

  copy.innerHTML = `
    <p class="section-label">UPCOMING EVENT</p>
    <h2>Syrian Liberation Celebration</h2>
    <p><strong>December 6, 2026 · Evening</strong></p>
    <p>Free Syrians is preparing a community celebration ahead of Syrian Liberation Day on December 8. The evening is planned to bring Syrians and friends of Syria together to mark the occasion, celebrate community, and look toward Syria’s future.</p>

    <div class="places-block" aria-label="Syrian Liberation Celebration details">
      <div class="places-grid">
        <div class="place-card">
          <h3>Program</h3>
          <p>Planned live singer performance, music, community recognition, and an opportunity for guests and supporters to participate.</p>
        </div>
        <div class="place-card">
          <h3>Hospitality</h3>
          <p>Finger food and drinks are planned for guests during the evening.</p>
        </div>
        <div class="place-card">
          <h3>Venue</h3>
          <p>Venue and final event details will be announced once confirmed.</p>
        </div>
        <div class="place-card">
          <h3>Participation & Sponsorship</h3>
          <p>For participation or sponsorship inquiries, contact <a href="mailto:info@freesyrians.ca">info@freesyrians.ca</a>.</p>
        </div>
      </div>
    </div>
  `;
})();

(() => {
  const inner = document.querySelector('#stories .language-section-inner');
  if (!inner) return;

  const copy = inner.querySelector('div');
  if (!copy) return;

  copy.innerHTML = `
    <p class="section-label">SYRIAN STORIES</p>
    <h2>Share a story that should not be lost.</h2>
    <p>Free Syrians welcomes personal memories, eyewitness accounts, family histories, photographs, reflections, and experiences from Syrians inside Syria and throughout the diaspora.</p>

    <div class="places-block" aria-label="Share a Syrian story">
      <div class="places-grid">
        <div class="place-card">
          <h3>What to share</h3>
          <p>A memory of a city or neighborhood, a family experience, displacement or return, a personal turning point, community life, cultural traditions, or another part of Syria’s lived history.</p>
        </div>
        <div class="place-card">
          <h3>What you can send</h3>
          <p>Written stories, photographs, scanned documents, captions, audio or video references, and background information that helps preserve the context.</p>
        </div>
        <div class="place-card">
          <h3>Your identity</h3>
          <p>Tell us whether you want your name shown, prefer limited identification, or would like your submission considered anonymously.</p>
        </div>
        <div class="place-card">
          <h3>Before publication</h3>
          <p>Submissions may be edited for clarity and context. Free Syrians will review material before deciding whether it is appropriate for publication.</p>
        </div>
      </div>
    </div>

    <p>Send your story or idea to <a href="mailto:info@freesyrians.ca?subject=Syrian%20Story%20Submission">info@freesyrians.ca</a>.</p>
  `;

  if (!inner.querySelector('.section-button')) {
    const storyButton = document.createElement('a');
    storyButton.className = 'section-button';
    storyButton.href = 'mailto:info@freesyrians.ca?subject=Syrian%20Story%20Submission';
    storyButton.textContent = 'Share Your Story';
    inner.appendChild(storyButton);
  }
})();

(() => {
  const inner = document.querySelector('#media-watch .language-section-inner');
  if (!inner) return;

  const copy = inner.querySelector('div');
  if (!copy) return;

  copy.innerHTML = `
    <p class="section-label">MEDIA WATCH</p>
    <h2>Accuracy matters. Corrections should be constructive.</h2>
    <p>Free Syrians monitors public reports, headlines, social-media posts, and allegations about Syria when information appears inaccurate, misleading, incomplete, unsupported, or in need of additional context.</p>
    <p>Our approach is to verify the original material, preserve the relevant evidence, and contact the publisher or platform professionally when a correction or clarification may be needed.</p>
    <p>When an outlet responds constructively or corrects the issue, our priority is resolving the problem rather than publicly naming or embarrassing the organization. Individual correspondence and case records are therefore generally kept private.</p>
    <p>If a serious issue remains unresolved, concerns may be raised through appropriate publisher complaint procedures, professional bodies, or lawful regulatory channels. Criticism is not treated as misinformation simply because Free Syrians disagrees with it.</p>
  `;
})();

(() => {
  const about = document.querySelector('#about .intro-copy');
  if (about) {
    about.innerHTML = `
      <p class="section-label">WHO WE ARE</p>
      <h2>An independent platform for information, memory, and connection.</h2>
      <p>Free Syrians brings together reliable information, Syrian stories, community resources, events, and cultural and historical material for Syrians and friends of Syria around the world.</p>
      <p>Our work is organized around three practical roles: helping people understand Syria, supporting Syrian voices and dignity, and connecting people who want to contribute positively to the community and the country’s future.</p>
    `;
  }
})();

(() => {
  const inner = document.querySelector('#mission .language-section-inner');
  if (!inner) return;

  const copy = inner.querySelector('div');
  if (!copy) return;

  copy.innerHTML = `
    <p class="section-label">OUR MISSION</p>
    <h2>Preserve truth, dignity, memory, and participation in Syria’s future.</h2>
    <p>We believe Syria belongs to all its people. Every Syrian should be able to live with dignity, enjoy individual rights, and participate freely in shaping the country’s future.</p>
    <p>Our mission is to preserve Syrian voices and historical memory, encourage accurate public understanding, defend human dignity, and keep meaningful connections alive between Syrians inside the country and throughout the diaspora.</p>
    <p>We aim to remember what happened, document what matters, support constructive dialogue, and contribute to a future built on freedom, justice, diversity, and responsibility.</p>
  `;
})();

(() => {
  const actions = document.querySelector('#mobile-navigation');
  if (!actions || actions.querySelector('.language-switch')) return;

  const languageSwitch = document.createElement('div');
  languageSwitch.className = 'language-switch';
  languageSwitch.setAttribute('aria-label', 'Language selection');
  languageSwitch.innerHTML = `
    <a href="index.html" lang="en" aria-current="page">EN</a>
    <span class="language-divider" aria-hidden="true">|</span>
    <a href="index-ar.html" lang="ar" dir="rtl">العربية</a>
  `;
  actions.appendChild(languageSwitch);
})();
