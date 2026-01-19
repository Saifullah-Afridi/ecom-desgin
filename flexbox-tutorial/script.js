// Flexbox Tutorial Interactive Scripts

// Basic Flexbox Toggle
let isFlexActive = false;

function toggleBasicFlex() {
  const demo = document.getElementById("basic-demo");
  isFlexActive = !isFlexActive;

  if (isFlexActive) {
    demo.style.display = "flex";
    demo.style.backgroundColor = "#e8f5e8";
    demo.style.border = "2px solid #28a745";
  } else {
    demo.style.display = "block";
    demo.style.backgroundColor = "#f8f9fa";
    demo.style.border = "2px solid #e9ecef";
  }
}

// Direction Demo
function changeDirection(value) {
  const demo = document.getElementById("direction-demo");
  const css = document.getElementById("direction-css");

  demo.style.flexDirection = value;
  css.textContent = `flex-direction: ${value};`;
}

// Justify Content Demo
function changeJustifyContent(value) {
  const demo = document.getElementById("justify-demo");
  const css = document.getElementById("justify-css");

  demo.style.justifyContent = value;
  css.textContent = `justify-content: ${value};`;
}

// Align Items Demo
function changeAlignItems(value) {
  const demo = document.getElementById("align-demo");
  const css = document.getElementById("align-css");

  demo.style.alignItems = value;
  css.textContent = `align-items: ${value};`;
}

// Flex Wrap Demo
function changeFlexWrap(value) {
  const demo = document.getElementById("wrap-demo");
  const css = document.getElementById("wrap-css");

  demo.style.flexWrap = value;
  css.textContent = `flex-wrap: ${value};`;
}

// Gap Demo
function changeGap(value) {
  const demo = document.getElementById("gap-demo");
  const css = document.getElementById("gap-css");
  const valueSpan = document.getElementById("gap-value");

  demo.style.gap = `${value}px`;
  css.textContent = `gap: ${value}px;`;
  valueSpan.textContent = `${value}px`;
}

// Flex Grow Demo
let growValues = [0, 1, 0];

function changeFlexGrow(itemNumber, value) {
  const item = document.getElementById(`grow-item-${itemNumber}`);
  const valueSpan = document.getElementById(`grow${itemNumber}-value`);
  const growInfo = item.querySelector(".grow-info");

  growValues[itemNumber - 1] = parseInt(value);

  item.style.flexGrow = value;
  valueSpan.textContent = value;
  growInfo.textContent = `grow: ${value}`;

  // Add visual feedback for growth
  if (value > 0) {
    item.style.background = "linear-gradient(135deg, #28a745 0%, #20c997 100%)";
    item.style.transform = "scale(1.02)";
  } else {
    item.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    item.style.transform = "scale(1)";
  }
}

// Flex Shrink Demo
function changeShrinkContainer(value) {
  const demo = document.getElementById("shrink-demo");
  const valueSpan = document.getElementById("shrink-width");

  demo.style.width = `${value}px`;
  valueSpan.textContent = `${value}px`;

  // Add visual indication when shrinking is happening
  if (value < 500) {
    demo.style.background = "linear-gradient(45deg, #ffe6e6, #fff0f0)";
    demo.style.border = "2px solid #ff9999";
  } else {
    demo.style.background = "white";
    demo.style.border = "2px solid #e9ecef";
  }
}

// Flex Basis Demo
function changeFlexBasis(value) {
  const target = document.getElementById("basis-target");
  const css = document.getElementById("basis-css");

  target.style.flexBasis = value;
  css.textContent = `flex-basis: ${value};`;

  // Update the text content to show the current basis
  const text = target.innerHTML.split("<br>")[0];
  target.innerHTML = `${text}<br>${value}`;

  // Add visual feedback
  if (value !== "auto") {
    target.style.background =
      "linear-gradient(135deg, #fd7e14 0%, #ff922b 100%)";
    target.style.transform = "scale(1.05)";
  } else {
    target.style.background =
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
    target.style.transform = "scale(1)";
  }
}

// Align Self Demo
function changeAlignSelf(value) {
  const target = document.getElementById("align-self-target");
  const css = document.getElementById("align-self-css");

  target.style.alignSelf = value;
  css.textContent = `align-self: ${value};`;

  // Visual feedback
  if (value !== "auto") {
    target.style.background =
      "linear-gradient(135deg, #6f42c1 0%, #8e5eb7 100%)";
    target.style.border = "3px solid #fff";
    target.style.boxShadow = "0 0 0 2px #6f42c1";
  } else {
    target.style.background =
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
    target.style.border = "none";
    target.style.boxShadow = "none";
  }
}

// Responsive Design Demos
function changeResponsiveBreakpoint(value) {
  const demo = document.getElementById("responsive-demo");
  const css = document.getElementById("responsive-css");
  const valueSpan = document.getElementById("breakpoint-value");

  demo.style.width = `${value}px`;
  valueSpan.textContent = `${value}px`;

  // Change layout based on breakpoint
  if (value <= 600) {
    demo.style.flexDirection = "column";
    demo.style.background = "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)";
    css.textContent = "flex-direction: column; (Mobile Layout)";
  } else {
    demo.style.flexDirection = "row";
    demo.style.background = "white";
    css.textContent = "flex-direction: row; (Desktop Layout)";
  }
}

function toggleResponsiveProperty(property, value) {
  const demo = document.getElementById("responsive-demo");
  const items = demo.querySelectorAll(".demo-item");

  items.forEach((item) => {
    if (property === "flex") {
      item.style.flex = value;
    } else if (property === "order") {
      item.style.order = value;
    }
  });
}

// Grid vs Flexbox Demo
function toggleGridFlexComparison(mode) {
  const gridDemo = document.getElementById("grid-comparison");
  const flexDemo = document.getElementById("flex-comparison");
  const gridButton = document.querySelector(
    "[onclick=\"toggleGridFlexComparison('grid')\"]",
  );
  const flexButton = document.querySelector(
    "[onclick=\"toggleGridFlexComparison('flex')\"]",
  );

  if (mode === "grid") {
    gridDemo.style.display = "grid";
    gridDemo.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    gridDemo.style.gap = "20px";
    flexDemo.style.display = "none";

    gridButton.style.background = "#007bff";
    flexButton.style.background = "#6c757d";
  } else {
    flexDemo.style.display = "flex";
    flexDemo.style.flexWrap = "wrap";
    flexDemo.style.gap = "20px";
    gridDemo.style.display = "none";

    flexButton.style.background = "#007bff";
    gridButton.style.background = "#6c757d";
  }
}

// Performance Demo
function runPerformanceTest() {
  const resultDiv = document.getElementById("performance-result");
  resultDiv.innerHTML = "Running tests...";

  // Simulate performance test
  setTimeout(() => {
    const flexTime = Math.random() * 5 + 2; // 2-7ms
    const floatTime = Math.random() * 15 + 10; // 10-25ms
    const gridTime = Math.random() * 4 + 1.5; // 1.5-5.5ms

    resultDiv.innerHTML = `
            <h4>Layout Performance Results:</h4>
            <div class="performance-result">
                <div class="result-item">
                    <span class="layout-type">CSS Grid:</span>
                    <span class="time">${gridTime.toFixed(1)}ms</span>
                    <div class="bar grid-bar" style="width: ${(gridTime / 25) * 100}%"></div>
                </div>
                <div class="result-item">
                    <span class="layout-type">Flexbox:</span>
                    <span class="time">${flexTime.toFixed(1)}ms</span>
                    <div class="bar flex-bar" style="width: ${(flexTime / 25) * 100}%"></div>
                </div>
                <div class="result-item">
                    <span class="layout-type">Float:</span>
                    <span class="time">${floatTime.toFixed(1)}ms</span>
                    <div class="bar float-bar" style="width: ${(floatTime / 25) * 100}%"></div>
                </div>
            </div>
            <p><small>* Simulated results for demonstration</small></p>
        `;
  }, 1500);
}

// Advanced Animation Demo
function startFlexAnimation() {
  const items = document.querySelectorAll("#animation-demo .demo-item");

  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = "scale(1.2) rotate(5deg)";
      item.style.background =
        "linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)";

      setTimeout(() => {
        item.style.transform = "scale(1) rotate(0deg)";
        item.style.background =
          index === 1
            ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      }, 600);
    }, index * 200);
  });
}

// Accessibility Demo
function toggleA11yFeatures() {
  const demo = document.getElementById("a11y-demo");
  const isEnabled = demo.classList.contains("a11y-enabled");

  if (!isEnabled) {
    demo.classList.add("a11y-enabled");
    demo.style.outline = "3px solid #007bff";
    demo.style.outlineOffset = "2px";

    // Add focus indicators
    const items = demo.querySelectorAll(".demo-item");
    items.forEach((item, index) => {
      item.setAttribute("tabindex", "0");
      item.setAttribute("aria-label", `Flex item ${index + 1}`);
      item.style.cursor = "pointer";
    });
  } else {
    demo.classList.remove("a11y-enabled");
    demo.style.outline = "none";

    const items = demo.querySelectorAll(".demo-item");
    items.forEach((item) => {
      item.removeAttribute("tabindex");
      item.removeAttribute("aria-label");
      item.style.cursor = "default";
    });
  }
}

// Utility Functions
function copyCodeSnippet(elementId) {
  const element = document.getElementById(elementId);
  const text = element.textContent;

  navigator.clipboard.writeText(text).then(() => {
    // Create and show copy feedback
    const feedback = document.createElement("div");
    feedback.textContent = "Copied!";
    feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            z-index: 1000;
            animation: fadeInOut 2s ease-in-out forwards;
        `;

    document.body.appendChild(feedback);

    setTimeout(() => {
      document.body.removeChild(feedback);
    }, 2000);
  });
}

// Add CSS for copy animation
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(-20px); }
        20% { opacity: 1; transform: translateY(0); }
        80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-20px); }
    }
    
    .performance-result .result-item {
        display: flex;
        align-items: center;
        margin: 10px 0;
        gap: 10px;
    }
    
    .performance-result .layout-type {
        min-width: 80px;
        font-weight: bold;
    }
    
    .performance-result .time {
        min-width: 50px;
        font-family: monospace;
    }
    
    .performance-result .bar {
        height: 20px;
        border-radius: 10px;
        transition: width 1s ease-in-out;
    }
    
    .grid-bar { background: linear-gradient(90deg, #28a745, #20c997); }
    .flex-bar { background: linear-gradient(90deg, #007bff, #6610f2); }
    .float-bar { background: linear-gradient(90deg, #dc3545, #fd7e14); }
    
    .demo-item {
        transition: all 0.3s ease;
    }
    
    #a11y-demo.a11y-enabled .demo-item:focus {
        outline: 3px solid #ffd700;
        outline-offset: 2px;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

// Initialize demos on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Flexbox Tutorial Loaded Successfully! 🎉");

  // Set initial values for range inputs
  const growInputs = document.querySelectorAll(
    'input[onchange*="changeFlexGrow"]',
  );
  if (growInputs.length > 0) {
    document.getElementById("grow1-value").textContent = "0";
    document.getElementById("grow2-value").textContent = "1";
    document.getElementById("grow3-value").textContent = "0";
  }

  // Add smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.table-of-contents a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Export functions for module use (if needed)
window.FlexboxTutorial = {
  toggleBasicFlex,
  changeDirection,
  changeJustifyContent,
  changeAlignItems,
  changeFlexWrap,
  changeGap,
  changeFlexGrow,
  changeShrinkContainer,
  changeFlexBasis,
  changeAlignSelf,
  changeResponsiveBreakpoint,
  toggleGridFlexComparison,
  runPerformanceTest,
  startFlexAnimation,
  toggleA11yFeatures,
  copyCodeSnippet,
};
