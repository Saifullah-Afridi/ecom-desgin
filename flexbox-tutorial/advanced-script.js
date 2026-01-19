// Advanced Flexbox Techniques Interactive Scripts

// Dynamic Content Amount
function updateContentAmount(value) {
  const container = document.getElementById("dynamic-demo");
  const amountSpan = document.getElementById("content-amount");
  const behaviorSpan = document.getElementById("dynamic-behavior");

  // Clear existing items
  container.innerHTML = "";

  // Add new items based on value
  for (let i = 1; i <= value; i++) {
    const item = document.createElement("div");
    item.className = "dynamic-item";
    item.textContent = `Item ${i}`;
    container.appendChild(item);
  }

  // Update display
  amountSpan.textContent = `${value} items`;

  // Update behavior description
  if (value <= 3) {
    behaviorSpan.textContent = "Items fit naturally in container";
    container.style.backgroundColor = "#f8f9fa";
  } else if (value <= 6) {
    behaviorSpan.textContent = "Items wrap to new lines as needed";
    container.style.backgroundColor = "#e8f4fd";
  } else {
    behaviorSpan.textContent = "Multiple rows with flexible sizing";
    container.style.backgroundColor = "#fff3cd";
  }
}

// Sequential Animation
function triggerSequential() {
  const items = document.querySelectorAll(".seq-item");

  // Reset all items
  items.forEach((item) => {
    item.classList.remove("animate");
  });

  // Animate each item with delay
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("animate");

      // Remove animation class after animation completes
      setTimeout(() => {
        item.classList.remove("animate");
      }, 600);
    }, index * 200);
  });
}

// Elastic Container Toggle
let isElasticExpanded = false;

function toggleElastic() {
  const container = document.getElementById("elastic-container");
  isElasticExpanded = !isElasticExpanded;

  if (isElasticExpanded) {
    container.classList.add("expanded");
  } else {
    container.classList.remove("expanded");
  }
}

// Morphing Layout
let isMorphed = false;

function morphLayout() {
  const container = document.getElementById("morph-container");
  isMorphed = !isMorphed;

  if (isMorphed) {
    container.classList.add("morphed");
  } else {
    container.classList.remove("morphed");
  }
}

// Grid vs Flex Comparison
function showComparison(type) {
  // Update active tab
  const tabs = document.querySelectorAll(".tab-button");
  tabs.forEach((tab) => tab.classList.remove("active"));
  event.target.classList.add("active");

  // Show corresponding demo
  const demos = document.querySelectorAll(".layout-demo");
  demos.forEach((demo) => demo.classList.remove("active"));
  document.getElementById(`${type}-demo`).classList.add("active");
}

// Performance Testing
function runLayoutTest(type) {
  const resultsContainer = document.getElementById("performance-results");

  resultsContainer.innerHTML =
    '<div style="text-align: center; color: #007bff;">Running performance test...</div>';

  // Simulate performance test
  setTimeout(() => {
    const optimizedTime = Math.random() * 3 + 1; // 1-4ms
    const unoptimizedTime = Math.random() * 15 + 8; // 8-23ms

    if (type === "optimized") {
      resultsContainer.innerHTML = `
                <div style="color: #28a745; font-weight: bold;">✅ Optimized Layout Performance</div>
                <div>Layout calculation: ${optimizedTime.toFixed(2)}ms</div>
                <div>Paint time: ${(optimizedTime * 0.7).toFixed(2)}ms</div>
                <div>Total time: ${(optimizedTime * 1.7).toFixed(2)}ms</div>
                <div style="margin-top: 10px; font-size: 0.9rem; color: #6c757d;">
                    ⚡ Excellent performance! Layout updates are smooth and efficient.
                </div>
            `;
    } else {
      resultsContainer.innerHTML = `
                <div style="color: #dc3545; font-weight: bold;">❌ Unoptimized Layout Performance</div>
                <div>Layout calculation: ${unoptimizedTime.toFixed(2)}ms</div>
                <div>Paint time: ${(unoptimizedTime * 0.9).toFixed(2)}ms</div>
                <div>Total time: ${(unoptimizedTime * 1.9).toFixed(2)}ms</div>
                <div style="margin-top: 10px; font-size: 0.9rem; color: #6c757d;">
                    ⚠️ Poor performance! Multiple nested flex containers cause layout thrashing.
                </div>
            `;
    }
  }, 1500);
}

function comparePerformance() {
  const resultsContainer = document.getElementById("performance-results");

  resultsContainer.innerHTML =
    '<div style="text-align: center; color: #007bff;">Comparing both approaches...</div>';

  setTimeout(() => {
    const optimizedTime = Math.random() * 3 + 1;
    const unoptimizedTime = Math.random() * 15 + 8;
    const improvement = (
      ((unoptimizedTime - optimizedTime) / unoptimizedTime) *
      100
    ).toFixed(0);

    resultsContainer.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h4 style="color: #2c3e50; margin-bottom: 15px;">📊 Performance Comparison</h4>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div style="background: #d4edda; padding: 15px; border-radius: 8px; border: 1px solid #c3e6cb;">
                        <div style="color: #155724; font-weight: bold;">✅ Optimized</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #28a745;">${optimizedTime.toFixed(2)}ms</div>
                    </div>
                    <div style="background: #f8d7da; padding: 15px; border-radius: 8px; border: 1px solid #f5c6cb;">
                        <div style="color: #721c24; font-weight: bold;">❌ Unoptimized</div>
                        <div style="font-size: 1.5rem; font-weight: bold; color: #dc3545;">${unoptimizedTime.toFixed(2)}ms</div>
                    </div>
                </div>
                
                <div style="background: #d1ecf1; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #bee5eb;">
                    <strong style="color: #0c5460;">🚀 Performance Improvement: ${improvement}% faster!</strong>
                </div>
            </div>
        `;
  }, 2000);
}

// High Contrast Toggle
let isHighContrast = false;

function toggleHighContrast() {
  const demo = document.querySelector(".contrast-demo");
  isHighContrast = !isHighContrast;

  if (isHighContrast) {
    demo.classList.add("high-contrast");
  } else {
    demo.classList.remove("high-contrast");
  }
}

// Modal Functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("show");
  document.body.style.overflow = "auto"; // Restore scroll
}

// Toast Notifications
function showToast(type) {
  const container = document.getElementById("toast-container");
  const toastId = "toast-" + Date.now();

  const messages = {
    success: "Operation completed successfully!",
    error: "An error occurred. Please try again.",
    info: "Here's some useful information for you.",
  };

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
  };

  const toast = document.createElement("div");
  toast.id = toastId;
  toast.className = `toast ${type}`;
  toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">${icons[type]}</span>
            <span class="toast-message">${messages[type]}</span>
            <button class="toast-close" onclick="removeToast('${toastId}')">×</button>
        </div>
    `;

  container.appendChild(toast);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    removeToast(toastId);
  }, 4000);
}

function removeToast(toastId) {
  const toast = document.getElementById(toastId);
  if (toast) {
    toast.classList.add("removing");
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 300);
  }
}

// Progress Steps
let currentStep = 3; // Start at step 3 (active)

function nextStep() {
  if (currentStep < 4) {
    // Mark current step as completed
    const currentStepEl = document.querySelector(
      `.step:nth-child(${currentStep * 2 - 1})`,
    );
    const currentConnector = document.querySelector(
      `.step-connector:nth-child(${currentStep * 2})`,
    );

    currentStepEl.classList.remove("active");
    currentStepEl.classList.add("completed");

    if (currentConnector) {
      currentConnector.classList.remove("active");
      currentConnector.classList.add("completed");
    }

    // Move to next step
    currentStep++;

    if (currentStep <= 4) {
      const nextStepEl = document.querySelector(
        `.step:nth-child(${currentStep * 2 - 1})`,
      );
      const nextConnector = document.querySelector(
        `.step-connector:nth-child(${currentStep * 2})`,
      );

      nextStepEl.classList.add("active");

      if (nextConnector) {
        nextConnector.classList.add("active");
      }
    }

    updateStepButtons();
  }
}

function prevStep() {
  if (currentStep > 1) {
    // Mark current step as inactive
    const currentStepEl = document.querySelector(
      `.step:nth-child(${currentStep * 2 - 1})`,
    );
    const prevConnector = document.querySelector(
      `.step-connector:nth-child(${currentStep * 2 - 2})`,
    );

    currentStepEl.classList.remove("active");

    if (prevConnector) {
      prevConnector.classList.remove("active");
      prevConnector.classList.remove("completed");
    }

    // Move to previous step
    currentStep--;

    const prevStepEl = document.querySelector(
      `.step:nth-child(${currentStep * 2 - 1})`,
    );
    prevStepEl.classList.remove("completed");
    prevStepEl.classList.add("active");

    updateStepButtons();
  }
}

function updateStepButtons() {
  const prevButton = document.querySelector(
    ".progress-controls button:first-child",
  );
  const nextButton = document.querySelector(
    ".progress-controls button:last-child",
  );

  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === 4;
}

// Advanced Animation Effects
function createAdvancedAnimations() {
  // Floating animation for various elements
  const floatingElements = document.querySelectorAll(".stat-card, .tip-card");

  floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`;
    element.classList.add("floating");
  });

  // Add floating animation styles
  const floatingStyles = `
        <style>
        @keyframes floating {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-5px);
            }
        }
        
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        .floating:hover {
            animation-play-state: paused;
        }
        </style>
    `;

  if (!document.querySelector("#floating-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "floating-styles";
    styleElement.textContent = floatingStyles.replace(/<\/?style>/g, "");
    document.head.appendChild(styleElement);
  }
}

// Intersection Observer for scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");

        // Trigger specific animations based on element type
        if (entry.target.classList.contains("dashboard-demo")) {
          animateDashboard();
        } else if (entry.target.classList.contains("animation-showcase")) {
          setTimeout(() => triggerSequential(), 500);
        }
      }
    });
  }, observerOptions);

  // Observe elements
  const animatedElements = document.querySelectorAll(
    ".advanced-demo, .animation-showcase, .component-demo, .dashboard-demo",
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
    el.classList.add("fade-in-element");
  });

  // Add scroll animation styles
  const scrollStyles = `
        <style>
        .fade-in-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .fade-in-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        </style>
    `;

  if (!document.querySelector("#scroll-styles")) {
    const styleElement = document.createElement("style");
    styleElement.id = "scroll-styles";
    styleElement.textContent = scrollStyles.replace(/<\/?style>/g, "");
    document.head.appendChild(styleElement);
  }
}

function animateDashboard() {
  const dashboard = document.querySelector(".dashboard-demo");
  dashboard.style.transform = "scale(0.95)";
  dashboard.style.transition = "transform 0.5s ease";

  setTimeout(() => {
    dashboard.style.transform = "scale(1)";
  }, 200);
}

// Keyboard Navigation Enhancement
function enhanceKeyboardNavigation() {
  // Add keyboard support for interactive elements
  document.addEventListener("keydown", function (e) {
    // Space or Enter to trigger buttons
    if (
      (e.code === "Space" || e.code === "Enter") &&
      e.target.classList.contains("demo-item")
    ) {
      e.preventDefault();
      e.target.click();
    }

    // Arrow keys for navigation
    if (e.target.classList.contains("focus-item")) {
      const focusItems = Array.from(document.querySelectorAll(".focus-item"));
      const currentIndex = focusItems.indexOf(e.target);
      let nextIndex;

      switch (e.code) {
        case "ArrowLeft":
          e.preventDefault();
          nextIndex =
            currentIndex > 0 ? currentIndex - 1 : focusItems.length - 1;
          focusItems[nextIndex].focus();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextIndex =
            currentIndex < focusItems.length - 1 ? currentIndex + 1 : 0;
          focusItems[nextIndex].focus();
          break;
      }
    }

    // Escape to close modals
    if (e.code === "Escape") {
      const activeModal = document.querySelector(".modal-overlay.show");
      if (activeModal) {
        hideModal(activeModal.id);
      }
    }
  });
}

// Responsive Design Helpers
function addResponsiveHelpers() {
  // Add resize listener for dynamic adjustments
  let resizeTimeout;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateResponsiveElements();
    }, 250);
  });

  // Initial call
  updateResponsiveElements();
}

function updateResponsiveElements() {
  const width = window.innerWidth;
  const mobileBreakpoint = 768;
  const tabletBreakpoint = 1024;

  // Update dashboard layout based on screen size
  const dashboard = document.querySelector(".dashboard-demo");
  if (dashboard) {
    if (width <= mobileBreakpoint) {
      dashboard.style.fontSize = "0.8rem";
      dashboard.style.height = "600px"; // Taller for mobile
    } else {
      dashboard.style.fontSize = "0.9rem";
      dashboard.style.height = "500px";
    }
  }

  // Update grid layouts
  const grids = document.querySelectorAll(
    ".animation-demo-grid, .optimization-grid",
  );
  grids.forEach((grid) => {
    if (width <= mobileBreakpoint) {
      grid.style.gridTemplateColumns = "1fr";
    } else if (width <= tabletBreakpoint) {
      grid.style.gridTemplateColumns = "repeat(2, 1fr)";
    } else {
      grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
    }
  });
}

// Performance Monitoring
function createPerformanceMonitor() {
  const monitor = {
    startTime: performance.now(),
    marks: {},

    mark(name) {
      this.marks[name] = performance.now();
    },

    measure(startMark, endMark) {
      if (this.marks[startMark] && this.marks[endMark]) {
        return this.marks[endMark] - this.marks[startMark];
      }
      return 0;
    },

    getPageLoadTime() {
      return performance.now() - this.startTime;
    },
  };

  // Monitor page load performance
  window.addEventListener("load", () => {
    monitor.mark("pageLoaded");
    const loadTime = monitor.getPageLoadTime();

    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);

    // Show performance notification if page loads slowly
    if (loadTime > 3000) {
      setTimeout(() => {
        showNotification(
          "Page load time was slower than expected. Consider optimizing your connection.",
          "warning",
        );
      }, 2000);
    }
  });

  return monitor;
}

// Accessibility Enhancements
function enhanceAccessibility() {
  // Add ARIA labels to interactive elements
  const interactiveElements = document.querySelectorAll(
    ".demo-item, .animation-card button, .tab-button",
  );

  interactiveElements.forEach((element, index) => {
    if (!element.getAttribute("aria-label")) {
      const text =
        element.textContent.trim() || `Interactive element ${index + 1}`;
      element.setAttribute("aria-label", text);
    }

    if (!element.hasAttribute("tabindex")) {
      element.setAttribute("tabindex", "0");
    }
  });

  // Add live region for dynamic content updates
  const liveRegion = document.createElement("div");
  liveRegion.id = "live-region";
  liveRegion.setAttribute("aria-live", "polite");
  liveRegion.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
  document.body.appendChild(liveRegion);

  // Function to announce changes to screen readers
  window.announceChange = function (message) {
    const liveRegion = document.getElementById("live-region");
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = "";
      }, 1000);
    }
  };
}

// Initialize everything on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Advanced Flexbox Tutorial Loaded! 🚀");

  // Initialize performance monitoring
  const performanceMonitor = createPerformanceMonitor();

  // Initialize enhancements
  createAdvancedAnimations();
  initializeScrollAnimations();
  enhanceKeyboardNavigation();
  addResponsiveHelpers();
  enhanceAccessibility();

  // Update step buttons initial state
  updateStepButtons();

  // Add click outside listener for modals
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-overlay")) {
      const modalId = e.target.id;
      hideModal(modalId);
    }
  });

  // Announce page load to screen readers
  setTimeout(() => {
    window.announceChange?.(
      "Advanced Flexbox tutorial page loaded with interactive demonstrations",
    );
  }, 1000);

  // Show welcome notification
  setTimeout(() => {
    showToast("info");
  }, 1500);
});

// Export functions for global access
window.AdvancedFlexbox = {
  updateContentAmount,
  triggerSequential,
  toggleElastic,
  morphLayout,
  showComparison,
  runLayoutTest,
  comparePerformance,
  toggleHighContrast,
  showModal,
  hideModal,
  showToast,
  nextStep,
  prevStep,
  announceChange: () => window.announceChange?.(...arguments),
};
