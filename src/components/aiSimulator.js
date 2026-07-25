import { playClickSound, playTerminalBeep, playSwooshSound } from '../audio/soundEffects.js';

export function initAiSimulator(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="simulator-card glass-panel">
      <div class="sim-header">
        <div class="sim-title-group">
          <div class="sim-icon">🤖</div>
          <div>
            <h3>LangGraph Multi-Agent RAG Simulator</h3>
            <p class="sim-subtitle">Simulating DevMind's 4-Agent Codebase Intelligence Pipeline in Browser</p>
          </div>
        </div>
        <div class="sim-status" id="sim-status-badge">STATUS: IDLE</div>
      </div>

      <div class="sim-input-row">
        <input type="text" id="sim-repo-input" value="GauravRawat05/DevMind" placeholder="Enter GitHub repository URL..." />
        <button id="sim-run-btn" class="btn btn-primary btn-glow">
          <span>Run Pipeline</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
      </div>

      <!-- Agent Flow Diagram Nodes -->
      <div class="agent-nodes-grid">
        <div class="agent-node" id="node-doc">
          <div class="agent-badge">AGENT 1</div>
          <h4>Doc Agent</h4>
          <p>AST & Architecture</p>
          <div class="node-state">IDLE</div>
        </div>
        <div class="agent-node" id="node-review">
          <div class="agent-badge">AGENT 2</div>
          <h4>Review Agent</h4>
          <p>Security & Code Audit</p>
          <div class="node-state">IDLE</div>
        </div>
        <div class="agent-node" id="node-qa">
          <div class="agent-badge">AGENT 3</div>
          <h4>Q&A RAG Agent</h4>
          <p>ChromaDB Vector Retrieval</p>
          <div class="node-state">IDLE</div>
        </div>
        <div class="agent-node" id="node-analytics">
          <div class="agent-badge">AGENT 4</div>
          <h4>Analytics Agent</h4>
          <p>Metrics & Health Score</p>
          <div class="node-state">IDLE</div>
        </div>
      </div>

      <!-- Terminal Log Output Stream -->
      <div class="sim-logs-container">
        <div class="sim-logs-header">
          <span>CELERY + REDIS WEBSOCKET STREAM</span>
          <span class="sim-pulse"></span>
        </div>
        <div class="sim-logs-body" id="sim-logs">
          <div class="log-entry log-info">[System] DevMind Agent Graph initialized. Enter repository and click Run Pipeline to execute state graph.</div>
        </div>
      </div>
    </div>
  `;

  const runBtn = document.getElementById('sim-run-btn');
  const repoInput = document.getElementById('sim-repo-input');
  const logsEl = document.getElementById('sim-logs');
  const statusBadge = document.getElementById('sim-status-badge');

  const nodes = {
    doc: document.getElementById('node-doc'),
    review: document.getElementById('node-review'),
    qa: document.getElementById('node-qa'),
    analytics: document.getElementById('node-analytics')
  };

  let isRunning = false;

  runBtn.addEventListener('click', () => {
    if (isRunning) return;
    playClickSound();
    runPipeline(repoInput.value.trim() || 'GauravRawat05/DevMind');
  });

  function appendLog(msg, type = 'info') {
    const entry = document.createElement('div');
    entry.className = `log-entry log-${type}`;
    const time = new Date().toLocaleTimeString();
    entry.innerHTML = `<span class="log-time">[${time}]</span> ${msg}`;
    logsEl.appendChild(entry);
    logsEl.scrollTop = logsEl.scrollHeight;
    playTerminalBeep();
  }

  function setNodeState(nodeKey, state, stateText) {
    const node = nodes[nodeKey];
    if (!node) return;
    node.className = `agent-node node-${state}`;
    node.querySelector('.node-state').textContent = stateText;
  }

  async function runPipeline(repo) {
    isRunning = true;
    runBtn.disabled = true;
    statusBadge.textContent = 'STATUS: EXECUTING GRAPH';
    statusBadge.className = 'sim-status sim-status-active';

    logsEl.innerHTML = '';
    appendLog(`Initializing LangGraph StateGraph for target repo: <strong>${repo}</strong>`, 'info');
    playSwooshSound();

    await sleep(600);

    // Step 1: Doc Agent
    setNodeState('doc', 'active', 'ANALYZING AST');
    appendLog(`[Doc Agent] Cloned AST tree. Extracting symbols & route maps from <strong>${repo}</strong>...`, 'info');
    await sleep(1000);
    appendLog(`[Doc Agent] Generated comprehensive technical architecture summary.`, 'success');
    setNodeState('doc', 'success', 'COMPLETED');

    // Step 2: Review Agent & Q&A Agent in Parallel
    setNodeState('review', 'active', 'AUDITING CODE');
    setNodeState('qa', 'active', 'EMBEDDING CHROMADB');
    appendLog(`[Review Agent] Scanning 42 source files for security vulnerabilities & input sanitization...`, 'warn');
    appendLog(`[Q&A Agent] Chunking codebase into 256-token vectors. Querying ChromaDB Vector Index...`, 'info');
    await sleep(1200);

    appendLog(`[Review Agent] 0 Critical vulnerabilities found. Security audit passed with score 98/100.`, 'success');
    setNodeState('review', 'success', 'PASSED');

    appendLog(`[Q&A Agent] RAG Index built with Sentence-Transformers embeddings. Ready for semantic Q&A.`, 'success');
    setNodeState('qa', 'success', 'INDEXED');

    // Step 3: Analytics Agent
    setNodeState('analytics', 'active', 'COMPUTING METRICS');
    appendLog(`[Analytics Agent] Calculating Cyclomatic Complexity & Commit Velocity metrics...`, 'info');
    await sleep(1000);

    appendLog(`[Analytics Agent] Health Score: <strong>A+ (96.4%)</strong>. Maintainability index optimal.`, 'success');
    setNodeState('analytics', 'success', 'OPTIMAL');

    await sleep(400);
    appendLog(`[System] Multi-Agent Pipeline Execution Complete! All state graph checkpoints saved.`, 'highlight');
    statusBadge.textContent = 'STATUS: SUCCESS';
    statusBadge.className = 'sim-status sim-status-success';

    isRunning = false;
    runBtn.disabled = false;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
