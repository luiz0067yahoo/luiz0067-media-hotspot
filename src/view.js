/**
 * Luiz0067 Media Hotspot - Frontend Interactivity Controller
 * Handles Bootstrap 5 modals, quiz evaluation validation, Agamotto layer fading, and 360 panorama rendering.
 */

// Web Audio API helper for quiz feedback sounds
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playSuccess() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  }

  playError() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(180, now + 0.12);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {
      // Ignore audio failure
    }
  }
}

const sfx = new SoundEffects();

// Lightweight Fallback Modal Engine
function showModal(modalEl) {
  if (!modalEl) return;

  // Use Bootstrap 5 API if available
  if (window.bootstrap && window.bootstrap.Modal) {
    const modalInstance =
      window.bootstrap.Modal.getInstance(modalEl) || new window.bootstrap.Modal(modalEl);
    modalInstance.show();
    return;
  }

  // Graceful standalone fallback
  modalEl.style.display = 'block';
  modalEl.classList.add('show');
  document.body.classList.add('modal-open');

  let backdrop = document.querySelector('.luiz0067-modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show luiz0067-modal-backdrop';
    document.body.appendChild(backdrop);
  }

  const closeFn = () => {
    modalEl.style.display = 'none';
    modalEl.classList.remove('show');
    document.body.classList.remove('modal-open');
    if (backdrop && backdrop.parentNode) {
      backdrop.parentNode.removeChild(backdrop);
    }
    modalEl.removeEventListener('click', handleBackdropClick);
    document.removeEventListener('keydown', handleKeydown);
  };

  const handleBackdropClick = (e) => {
    if (e.target === modalEl) closeFn();
  };

  const handleKeydown = (e) => {
    if (e.key === 'Escape') closeFn();
  };

  modalEl.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleKeydown);

  const dismissButtons = modalEl.querySelectorAll('[data-bs-dismiss="modal"]');
  dismissButtons.forEach((btn) => {
    btn.onclick = closeFn;
  });
}

// Initialize block instance
function initBlock(blockEl) {
  const mediaType = blockEl.dataset.mediaType || 'image-hotspots';
  const isQuizEval = blockEl.dataset.quizEval === 'true';

  // 1. Hotspots & Quiz Engine
  if (mediaType === 'image-hotspots') {
    const pins = blockEl.querySelectorAll('.luiz0067-hotspot-pin');
    const scoreCountEl = blockEl.querySelector('.luiz0067-score-count');
    const resetBtn = blockEl.querySelector('.luiz0067-quiz-reset-btn');
    const foundCorrect = new Set();

    pins.forEach((pin) => {
      pin.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSelector = pin.getAttribute('data-bs-target');
        const isCorrect = pin.getAttribute('data-is-correct') === 'true';
        const spotId = pin.getAttribute('data-spot-id');

        if (isQuizEval) {
          if (isCorrect) {
            pin.classList.remove('is-incorrect');
            pin.classList.add('is-correct');
            foundCorrect.add(spotId);
            sfx.playSuccess();
          } else {
            pin.classList.remove('is-correct');
            pin.classList.add('is-incorrect');
            sfx.playError();
          }

          if (scoreCountEl) {
            scoreCountEl.textContent = foundCorrect.size;
          }
        }

        if (targetSelector) {
          const modalEl = document.querySelector(targetSelector);
          if (modalEl) {
            showModal(modalEl);
          }
        }
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        foundCorrect.clear();
        pins.forEach((pin) => {
          pin.classList.remove('is-correct', 'is-incorrect');
        });
        if (scoreCountEl) {
          scoreCountEl.textContent = '0';
        }
      });
    }
  }

  // 2. Agamotto Layer Slider Engine
  if (mediaType === 'image-slider-layers') {
    const slider = blockEl.querySelector('.luiz0067-agamotto-slider');
    const layers = blockEl.querySelectorAll('.luiz0067-overlay-layer');
    const labelEl = blockEl.querySelector('.luiz0067-current-layer-label');
    const tickLabels = blockEl.querySelectorAll('.luiz0067-layer-tick-label');

    if (slider && layers.length > 0) {
      const updateLayers = () => {
        const val = parseFloat(slider.value);
        const totalSteps = Math.max(1, layers.length - 1);
        const progressPerLayer = 100;

        // Current float index
        const currentProgress = (val / (totalSteps * 100)) * totalSteps;
        const currentActiveIndex = Math.min(layers.length - 1, Math.floor(currentProgress));

        // Update layer opacities
        layers.forEach((layer, idx) => {
          if (idx === 0) {
            // Base layer is always bottom, next layers fade on top
            layer.style.opacity = Math.max(0, 1 - currentProgress);
          } else {
            // Layer i appears between (i-1) and i
            const layerStart = idx - 1;
            const layerEnd = idx;
            if (currentProgress >= layerStart && currentProgress <= layerEnd) {
              const fraction = currentProgress - layerStart;
              layer.style.opacity = fraction;
            } else if (currentProgress > layerEnd) {
              layer.style.opacity = 1;
            } else {
              layer.style.opacity = 0;
            }
          }
        });

        // Update label
        const nearestIndex = Math.min(layers.length - 1, Math.round(currentProgress));
        if (tickLabels[nearestIndex] && labelEl) {
          labelEl.textContent = tickLabels[nearestIndex].textContent.trim();
        }
      };

      slider.addEventListener('input', updateLayers);
      updateLayers();
    }
  }

  // 3. 360° Panorama Viewer Engine
  if (mediaType === 'panorama-360') {
    const viewport = blockEl.querySelector('.luiz0067-panorama-viewport');
    const canvas = blockEl.querySelector('.luiz0067-panorama-canvas');
    const panoSrc = viewport ? viewport.dataset.panoramaSrc : '';
    const shouldAutoRotate = viewport ? viewport.dataset.autoRotate === 'true' : true;
    const rotateBtn = blockEl.querySelector('.luiz0067-pano-autorotate-btn');
    const resetBtn = blockEl.querySelector('.luiz0067-pano-reset-btn');

    if (canvas && panoSrc) {
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = panoSrc;

      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let yaw = 0; // horizontal angle
      let pitch = 0; // vertical angle
      let targetYaw = 0;
      let targetPitch = 0;
      let autoRotate = shouldAutoRotate;
      let reqId = null;

      const resize = () => {
        canvas.width = viewport.clientWidth || 800;
        canvas.height = viewport.clientHeight || 450;
      };

      const render = () => {
        if (!img.complete || img.naturalWidth === 0) {
          reqId = requestAnimationFrame(render);
          return;
        }

        if (autoRotate && !isDragging) {
          targetYaw += 0.15;
        }

        // Smooth interpolation
        yaw += (targetYaw - yaw) * 0.1;
        pitch += (targetPitch - pitch) * 0.1;

        // Clamp pitch
        pitch = Math.max(-60, Math.min(60, pitch));
        targetPitch = Math.max(-60, Math.min(60, targetPitch));

        const w = canvas.width;
        const h = canvas.height;

        ctx.clearRect(0, 0, w, h);

        // Normalize yaw between 0 and img.naturalWidth
        const scale = (h / img.naturalHeight) * 1.5;
        const scaledWidth = img.naturalWidth * scale;
        const scaledHeight = img.naturalHeight * scale;

        let offsetX = -((yaw * 4) % scaledWidth);
        if (offsetX > 0) offsetX -= scaledWidth;

        const offsetY = ((pitch / 60) * (scaledHeight - h)) / 2 - (scaledHeight - h) / 2;

        // Draw image repeatedly horizontally for continuous 360 wrap
        ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);
        if (offsetX + scaledWidth < w) {
          ctx.drawImage(img, offsetX + scaledWidth, offsetY, scaledWidth, scaledHeight);
        }
        if (offsetX > 0) {
          ctx.drawImage(img, offsetX - scaledWidth, offsetY, scaledWidth, scaledHeight);
        }

        reqId = requestAnimationFrame(render);
      };

      img.onload = () => {
        resize();
        render();
      };

      window.addEventListener('resize', resize);

      // Mouse and Touch Interaction
      const onStart = (clientX, clientY) => {
        isDragging = true;
        startX = clientX;
        startY = clientY;
      };

      const onMove = (clientX, clientY) => {
        if (!isDragging) return;
        const dx = clientX - startX;
        const dy = clientY - startY;
        startX = clientX;
        startY = clientY;

        targetYaw -= dx * 0.35;
        targetPitch += dy * 0.25;
      };

      const onEnd = () => {
        isDragging = false;
      };

      viewport.addEventListener('mousedown', (e) => onStart(e.clientX, e.clientY));
      window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
      window.addEventListener('mouseup', onEnd);

      viewport.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) onStart(e.touches[0].clientX, e.touches[0].clientY);
      });
      window.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
      });
      window.addEventListener('touchend', onEnd);

      if (rotateBtn) {
        rotateBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          autoRotate = !autoRotate;
          rotateBtn.classList.toggle('active', autoRotate);
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          targetYaw = 0;
          targetPitch = 0;
        });
      }
    }
  }
}

// Auto-initialize all blocks on DOMContentLoaded
function initAll() {
  document.querySelectorAll('.wp-block-luiz0067-media-hotspot').forEach(initBlock);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

// Export for external / preview invocation
window.initLuiz0067MediaHotspot = initBlock;
