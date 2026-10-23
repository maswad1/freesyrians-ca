(() => {
  const section = document.querySelector('#media-watch .language-section-inner > div');
  if (!section || section.querySelector('.media-review-workspace')) return;

  const styles = document.createElement('style');
  styles.textContent = `
    .media-review-workspace {
      margin-top: 36px;
    }
    .media-review-heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      margin-bottom: 14px;
    }
    .media-review-heading h3 {
      margin: 0;
      font-size: 1.18rem;
      letter-spacing: -0.02em;
    }
    .media-empty-badge {
      display: inline-flex;
      align-items: center;
      min-height: 30px;
      padding: 0 11px;
      border: 1px solid rgba(15, 45, 34, 0.14);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.7);
      color: #53605a;
      font-size: 0.76rem;
      font-weight: 750;
      white-space: nowrap;
    }
    .media-review-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }
    .media-review-card {
      padding: 22px;
      border: 1px solid rgba(15, 45, 34, 0.12);
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.62);
    }
    .media-review-card h4 {
      margin: 0 0 14px;
      font-size: 1.08rem;
    }
    .case-fields {
      margin: 0;
    }
    .case-fields div {
      display: grid;
      grid-template-columns: 112px 1fr;
      gap: 12px;
      padding: 9px 0;
      border-top: 1px solid rgba(15, 45, 34, 0.1);
    }
    .case-fields div:first-child { border-top: 0; padding-top: 0; }
    .case-fields dt {
      font-size: 0.78rem;
      font-weight: 800;
      color: #0f2d22;
    }
    .case-fields dd {
      margin: 0;
      color: #6c7671;
      font-size: 0.88rem;
    }
    .assessment-labels {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 14px;
    }
    .assessment-label {
      display: inline-flex;
      align-items: center;
      min-height: 30px;
      padding: 0 10px;
      border: 1px solid rgba(15, 45, 34, 0.14);
      border-radius: 999px;
      background: #ffffff;
      color: #35413c;
      font-size: 0.76rem;
      font-weight: 800;
    }
    .language-section .media-review-card p {
      margin: 0;
      font-size: 0.9rem;
    }
    .media-review-note {
      margin-top: 14px !important;
      padding-top: 14px;
      border-top: 1px solid rgba(15, 45, 34, 0.1);
    }
    @media (max-width: 760px) {
      .media-review-heading { align-items: flex-start; flex-direction: column; }
      .media-review-grid { grid-template-columns: 1fr; }
      .case-fields div { grid-template-columns: 1fr; gap: 3px; }
    }
  `;
  document.head.appendChild(styles);

  const workspace = document.createElement('div');
  workspace.className = 'media-review-workspace';
  workspace.setAttribute('aria-label', 'Media Watch review framework');
  workspace.innerHTML = `
    <div class="media-review-heading">
      <h3>How each case will be documented</h3>
      <span class="media-empty-badge">No published cases yet</span>
    </div>

    <div class="media-review-grid">
      <article class="media-review-card">
        <h4>Case file</h4>
        <dl class="case-fields">
          <div><dt>Claim</dt><dd>The exact statement, headline, allegation, image, or post being reviewed.</dd></div>
          <div><dt>Publisher & date</dt><dd>Who published it, where it appeared, and when.</dd></div>
          <div><dt>Finding</dt><dd>Our conclusion after reviewing the available evidence.</dd></div>
          <div><dt>Evidence</dt><dd>Documents, records, images, testimony, official information, and independent reporting.</dd></div>
          <div><dt>Sources</dt><dd>Links and references readers can inspect for themselves.</dd></div>
        </dl>
      </article>

      <article class="media-review-card">
        <h4>Assessment labels</h4>
        <div class="assessment-labels" aria-label="Possible Media Watch assessment labels">
          <span class="assessment-label">False</span>
          <span class="assessment-label">Misleading</span>
          <span class="assessment-label">Unsupported</span>
          <span class="assessment-label">Unverified</span>
          <span class="assessment-label">Corrected</span>
        </div>
        <p>Labels will describe the evidence, not the publisher. A critical report will not be classified as false merely because Free Syrians disagrees with it.</p>
        <p class="media-review-note">Every published review should preserve the original claim and explain what evidence would change the assessment if new information emerges.</p>
      </article>
    </div>
  `;

  section.appendChild(workspace);
})();
