(() => {
  // src/view.js
  var SoundEffects = class {
    constructor() {
      this.ctx = null;
    }
    init() {
      if (!this.ctx && typeof window !== "undefined") {
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
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } catch (e) {
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
        osc.type = "triangle";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(180, now + 0.12);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.28);
      } catch (e) {
      }
    }
  };
  var sfx = new SoundEffects();
  function showModal(modalEl) {
    if (!modalEl) return;
    if (window.bootstrap && window.bootstrap.Modal) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl) || new window.bootstrap.Modal(modalEl);
      modalInstance.show();
      return;
    }
    modalEl.style.display = "block";
    modalEl.classList.add("show");
    document.body.classList.add("modal-open");
    let backdrop = document.querySelector(".luiz0067-modal-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop fade show luiz0067-modal-backdrop";
      document.body.appendChild(backdrop);
    }
    const closeFn = () => {
      modalEl.style.display = "none";
      modalEl.classList.remove("show");
      document.body.classList.remove("modal-open");
      if (backdrop && backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
      modalEl.removeEventListener("click", handleBackdropClick);
      document.removeEventListener("keydown", handleKeydown);
    };
    const handleBackdropClick = (e) => {
      if (e.target === modalEl) closeFn();
    };
    const handleKeydown = (e) => {
      if (e.key === "Escape") closeFn();
    };
    modalEl.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleKeydown);
    const dismissButtons = modalEl.querySelectorAll('[data-bs-dismiss="modal"]');
    dismissButtons.forEach((btn) => {
      btn.onclick = closeFn;
    });
  }
  function initBlock(blockEl) {
    const mediaType = blockEl.dataset.mediaType || "image-hotspots";
    const isQuizEval = blockEl.dataset.quizEval === "true";
    if (mediaType === "image-hotspots") {
      const pins = blockEl.querySelectorAll(".luiz0067-hotspot-pin");
      const scoreCountEl = blockEl.querySelector(".luiz0067-score-count");
      const resetBtn = blockEl.querySelector(".luiz0067-quiz-reset-btn");
      const foundCorrect = /* @__PURE__ */ new Set();
      pins.forEach((pin) => {
        pin.addEventListener("click", (e) => {
          e.preventDefault();
          const targetSelector = pin.getAttribute("data-bs-target");
          const isCorrect = pin.getAttribute("data-is-correct") === "true";
          const spotId = pin.getAttribute("data-spot-id");
          if (isQuizEval) {
            if (isCorrect) {
              pin.classList.remove("is-incorrect");
              pin.classList.add("is-correct");
              foundCorrect.add(spotId);
              sfx.playSuccess();
            } else {
              pin.classList.remove("is-correct");
              pin.classList.add("is-incorrect");
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
        resetBtn.addEventListener("click", () => {
          foundCorrect.clear();
          pins.forEach((pin) => {
            pin.classList.remove("is-correct", "is-incorrect");
          });
          if (scoreCountEl) {
            scoreCountEl.textContent = "0";
          }
        });
      }
    }
    if (mediaType === "image-slider-layers") {
      const slider = blockEl.querySelector(".luiz0067-agamotto-slider");
      const layers = blockEl.querySelectorAll(".luiz0067-overlay-layer");
      const labelEl = blockEl.querySelector(".luiz0067-current-layer-label");
      const tickLabels = blockEl.querySelectorAll(".luiz0067-layer-tick-label");
      if (slider && layers.length > 0) {
        const updateLayers = () => {
          const val = parseFloat(slider.value);
          const totalSteps = Math.max(1, layers.length - 1);
          const progressPerLayer = 100;
          const currentProgress = val / (totalSteps * 100) * totalSteps;
          const currentActiveIndex = Math.min(layers.length - 1, Math.floor(currentProgress));
          layers.forEach((layer, idx) => {
            if (idx === 0) {
              layer.style.opacity = Math.max(0, 1 - currentProgress);
            } else {
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
          const nearestIndex = Math.min(layers.length - 1, Math.round(currentProgress));
          if (tickLabels[nearestIndex] && labelEl) {
            labelEl.textContent = tickLabels[nearestIndex].textContent.trim();
          }
        };
        slider.addEventListener("input", updateLayers);
        updateLayers();
      }
    }
    if (mediaType === "panorama-360") {
      const viewport = blockEl.querySelector(".luiz0067-panorama-viewport");
      const canvas = blockEl.querySelector(".luiz0067-panorama-canvas");
      const panoSrc = viewport ? viewport.dataset.panoramaSrc : "";
      const shouldAutoRotate = viewport ? viewport.dataset.autoRotate === "true" : true;
      const rotateBtn = blockEl.querySelector(".luiz0067-pano-autorotate-btn");
      const resetBtn = blockEl.querySelector(".luiz0067-pano-reset-btn");
      if (canvas && panoSrc) {
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = panoSrc;
        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let yaw = 0;
        let pitch = 0;
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
          yaw += (targetYaw - yaw) * 0.1;
          pitch += (targetPitch - pitch) * 0.1;
          pitch = Math.max(-60, Math.min(60, pitch));
          targetPitch = Math.max(-60, Math.min(60, targetPitch));
          const w = canvas.width;
          const h = canvas.height;
          ctx.clearRect(0, 0, w, h);
          const scale = h / img.naturalHeight * 1.5;
          const scaledWidth = img.naturalWidth * scale;
          const scaledHeight = img.naturalHeight * scale;
          let offsetX = -(yaw * 4 % scaledWidth);
          if (offsetX > 0) offsetX -= scaledWidth;
          const offsetY = pitch / 60 * (scaledHeight - h) / 2 - (scaledHeight - h) / 2;
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
        window.addEventListener("resize", resize);
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
        viewport.addEventListener("mousedown", (e) => onStart(e.clientX, e.clientY));
        window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
        window.addEventListener("mouseup", onEnd);
        viewport.addEventListener("touchstart", (e) => {
          if (e.touches.length === 1) onStart(e.touches[0].clientX, e.touches[0].clientY);
        });
        window.addEventListener("touchmove", (e) => {
          if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
        });
        window.addEventListener("touchend", onEnd);
        if (rotateBtn) {
          rotateBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            autoRotate = !autoRotate;
            rotateBtn.classList.toggle("active", autoRotate);
          });
        }
        if (resetBtn) {
          resetBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            targetYaw = 0;
            targetPitch = 0;
          });
        }
      }
    }
  }
  function initAll() {
    document.querySelectorAll(".wp-block-luiz0067-media-hotspot").forEach(initBlock);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
  window.initLuiz0067MediaHotspot = initBlock;
})();
//# sourceMappingURL=view.js.map
