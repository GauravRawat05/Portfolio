import { resumeData } from '../content/resumeData.js';
import { playClickSound, playSwooshSound } from '../audio/soundEffects.js';

export function initModals() {
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalContainer = document.getElementById('project-modal-content');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay || !modalContainer) return;

  function closeModal() {
    modalOverlay.classList.remove('active');
    playClickSound();
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  window.openProjectModal = function (projectId) {
    const project = resumeData.projects.find(p => p.id === projectId);
    if (!project) return;

    playSwooshSound();

    let agentsHTML = '';
    if (project.agents) {
      agentsHTML = `
        <div class="modal-section">
          <h4>Multi-Agent Architecture</h4>
          <div class="modal-agents-grid">
            ${project.agents.map(a => `
              <div class="modal-agent-card">
                <span class="agent-name">${a.name}</span>
                <p class="agent-desc">${a.role}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    modalContainer.innerHTML = `
      <div class="modal-header">
        <span class="modal-category">${project.category}</span>
        <h2 class="modal-title">${project.title}</h2>
      </div>

      <div class="modal-body">
        <p class="modal-description">${project.description}</p>

        <div class="modal-section">
          <h4>Technical Highlights</h4>
          <ul class="modal-bullets">
            ${project.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        ${agentsHTML}

        <div class="modal-section">
          <h4>Technologies Used</h4>
          <div class="modal-tags">
            ${project.stack.map(s => `<span class="tag-pill">${s}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-primary btn-glow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          View Source Code on GitHub
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
  };
}
