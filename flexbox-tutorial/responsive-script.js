// Responsive Design Interactive Scripts

// Container Size Demo
function changeContainerSize(value) {
  const demo = document.getElementById("container-demo");
  const sizeSpan = document.getElementById("container-size");
  const description = document.getElementById("behavior-description");

  demo.style.width = `${value}px`;
  sizeSpan.textContent = `${value}px`;

  // Update behavior based on size
  if (value <= 350) {
    demo.style.flexDirection = "column";
    demo.style.background = "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)";
    description.textContent = "Items stacked vertically (mobile-like)";
  } else if (value <= 600) {
    demo.style.flexDirection = "row";
    demo.style.flexWrap = "wrap";
    demo.style.background = "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)";
    description.textContent = "Items may wrap to new line (tablet-like)";
  } else {
    demo.style.flexDirection = "row";
    demo.style.flexWrap = "nowrap";
    demo.style.background = "white";
    description.textContent = "Items arranged horizontally (desktop-like)";
  }
}

// Mobile Order Toggle
let isMobileOrder = false;

function toggleMobileOrder() {
  const demo = document.querySelector(".ordering-demo");
  isMobileOrder = !isMobileOrder;

  if (isMobileOrder) {
    demo.classList.add("mobile-order");
    demo.style.background = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
  } else {
    demo.classList.remove("mobile-order");
    demo.style.background = "white";
  }
}

// Quiz Functionality
const quizAnswers = {
  q1: "gap",
  q2: "mobile-first",
  q3: "flex-wrap",
};

function checkAnswers() {
  const results = document.getElementById("quiz-results");
  const questions = ["q1", "q2", "q3"];
  let score = 0;
  let feedback = [];

  questions.forEach((questionId, index) => {
    const selectedAnswer = document.querySelector(
      `input[name="${questionId}"]:checked`,
    );
    const correctAnswer = quizAnswers[questionId];

    if (selectedAnswer && selectedAnswer.value === correctAnswer) {
      score++;
      feedback.push(`✅ Question ${index + 1}: Correct!`);
    } else {
      const correct = correctAnswer;
      feedback.push(
        `❌ Question ${index + 1}: Incorrect. Correct answer is "${correct}"`,
      );
    }
  });

  // Show results
  results.classList.remove("success", "partial", "fail");
  results.classList.add("show");

  let resultClass = "fail";
  let resultMessage = "";

  if (score === 3) {
    resultClass = "success";
    resultMessage = "🎉 Perfect! You've mastered Flexbox basics!";
  } else if (score === 2) {
    resultClass = "partial";
    resultMessage = "👍 Good job! Almost there!";
  } else if (score === 1) {
    resultClass = "partial";
    resultMessage = "📚 Keep studying! You're on the right track!";
  } else {
    resultClass = "fail";
    resultMessage = "📖 Review the tutorial and try again!";
  }

  results.classList.add(resultClass);
  results.innerHTML = `
        <h4>${resultMessage}</h4>
        <p><strong>Score: ${score}/3</strong></p>
        <div class="feedback">
            ${feedback.map((item) => `<p>${item}</p>`).join("")}
        </div>
    `;
}

// Advanced Responsive Demo
function createAdvancedDemo() {
  const demoContainer = document.createElement("div");
  demoContainer.innerHTML = `
        <div class="advanced-demo-section">
            <h3>🚀 Advanced Responsive Patterns</h3>
            
            <div class="demo-grid">
                <div class="demo-item-advanced" data-pattern="holy-grail">
                    <h4>Holy Grail Layout</h4>
                    <div class="holy-grail-demo">
                        <div class="hg-header">Header</div>
                        <div class="hg-main">
                            <div class="hg-sidebar">Sidebar</div>
                            <div class="hg-content">Main Content</div>
                            <div class="hg-aside">Aside</div>
                        </div>
                        <div class="hg-footer">Footer</div>
                    </div>
                </div>
                
                <div class="demo-item-advanced" data-pattern="sticky-footer">
                    <h4>Sticky Footer</h4>
                    <div class="sticky-footer-demo">
                        <div class="sf-header">Header</div>
                        <div class="sf-content">Content Area</div>
                        <div class="sf-footer">Sticky Footer</div>
                    </div>
                </div>
                
                <div class="demo-item-advanced" data-pattern="media-object">
                    <h4>Media Object</h4>
                    <div class="media-object-demo">
                        <div class="mo-image">IMG</div>
                        <div class="mo-content">
                            <h5>Media Object Title</h5>
                            <p>This is the flexible content area that can contain any amount of text.</p>
                        </div>
                    </div>
                </div>
                
                <div class="demo-item-advanced" data-pattern="pancake">
                    <h4>Pancake Stack</h4>
                    <div class="pancake-demo">
                        <div class="p-header">Header</div>
                        <div class="p-main">Flexible Content</div>
                        <div class="p-footer">Footer</div>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Add styles for advanced demos
  const advancedStyles = `
        <style>
        .advanced-demo-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 30px;
            border-radius: 15px;
            margin: 30px 0;
            color: white;
        }
        
        .demo-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .demo-item-advanced {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
        
        .demo-item-advanced h4 {
            margin-bottom: 15px;
            color: #fff;
        }
        
        /* Holy Grail Layout */
        .holy-grail-demo {
            display: flex;
            flex-direction: column;
            height: 200px;
            background: white;
            border-radius: 6px;
            overflow: hidden;
            font-size: 0.8rem;
        }
        
        .hg-header, .hg-footer {
            background: #007bff;
            color: white;
            padding: 10px;
            text-align: center;
            font-weight: bold;
        }
        
        .hg-main {
            display: flex;
            flex: 1;
        }
        
        .hg-sidebar, .hg-aside {
            background: #ffc107;
            color: #212529;
            padding: 10px;
            flex: 0 0 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        .hg-content {
            background: #28a745;
            color: white;
            padding: 10px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        /* Sticky Footer */
        .sticky-footer-demo {
            display: flex;
            flex-direction: column;
            height: 200px;
            background: white;
            border-radius: 6px;
            overflow: hidden;
            font-size: 0.8rem;
        }
        
        .sf-header {
            background: #6f42c1;
            color: white;
            padding: 15px;
            text-align: center;
            font-weight: bold;
        }
        
        .sf-content {
            background: #f8f9fa;
            color: #495057;
            padding: 15px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        .sf-footer {
            background: #dc3545;
            color: white;
            padding: 10px;
            text-align: center;
            font-weight: bold;
        }
        
        /* Media Object */
        .media-object-demo {
            display: flex;
            gap: 15px;
            background: white;
            padding: 15px;
            border-radius: 6px;
            min-height: 120px;
        }
        
        .mo-image {
            width: 60px;
            height: 60px;
            background: #17a2b8;
            color: white;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .mo-content {
            flex: 1;
            color: #495057;
        }
        
        .mo-content h5 {
            margin: 0 0 10px 0;
            color: #212529;
        }
        
        .mo-content p {
            margin: 0;
            font-size: 0.9rem;
            line-height: 1.4;
        }
        
        /* Pancake Stack */
        .pancake-demo {
            display: flex;
            flex-direction: column;
            height: 200px;
            background: white;
            border-radius: 6px;
            overflow: hidden;
            font-size: 0.8rem;
        }
        
        .p-header, .p-footer {
            background: #fd7e14;
            color: white;
            padding: 15px;
            text-align: center;
            font-weight: bold;
            flex: 0 0 auto;
        }
        
        .p-main {
            background: #20c997;
            color: white;
            padding: 15px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        @media (max-width: 768px) {
            .demo-grid {
                grid-template-columns: 1fr;
            }
            
            .hg-main {
                flex-direction: column;
            }
            
            .hg-sidebar, .hg-aside {
                flex: 0 0 30px;
            }
        }
        </style>
    `;

  document.head.insertAdjacentHTML("beforeend", advancedStyles);

  return demoContainer;
}

// Responsive Testing Tool
function createResponsiveTester() {
  const testerContainer = document.createElement("div");
  testerContainer.innerHTML = `
        <div class="responsive-tester">
            <h3>🔧 Responsive Testing Tool</h3>
            <div class="device-buttons">
                <button onclick="setDevice('mobile')" class="device-btn">📱 Mobile</button>
                <button onclick="setDevice('tablet')" class="device-btn">📱 Tablet</button>
                <button onclick="setDevice('desktop')" class="device-btn">🖥️ Desktop</button>
                <button onclick="setDevice('custom')" class="device-btn">⚙️ Custom</button>
            </div>
            <div class="custom-size" id="custom-controls" style="display: none;">
                <label>Width: <input type="number" id="custom-width" value="1200" min="200" max="1920"></label>
                <label>Height: <input type="number" id="custom-height" value="800" min="200" max="1080"></label>
                <button onclick="applyCustomSize()">Apply</button>
            </div>
            <div class="viewport-info">
                <span>Current: <span id="current-device">Desktop</span> - </span>
                <span>Size: <span id="current-size">1200×800</span></span>
            </div>
        </div>
    `;

  // Add tester styles
  const testerStyles = `
        <style>
        .responsive-tester {
            background: #2c3e50;
            color: white;
            padding: 25px;
            border-radius: 10px;
            margin: 30px 0;
        }
        
        .device-buttons {
            display: flex;
            gap: 10px;
            margin: 20px 0;
            flex-wrap: wrap;
        }
        
        .device-btn {
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        .device-btn:hover {
            background: #2980b9;
            transform: translateY(-2px);
        }
        
        .device-btn.active {
            background: #e74c3c;
        }
        
        .custom-size {
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        
        .custom-size label {
            display: inline-block;
            margin-right: 15px;
            margin-bottom: 10px;
        }
        
        .custom-size input {
            width: 80px;
            margin-left: 5px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        
        .custom-size button {
            background: #27ae60;
            color: white;
            border: none;
            padding: 7px 15px;
            border-radius: 3px;
            cursor: pointer;
            font-weight: bold;
        }
        
        .viewport-info {
            background: rgba(255,255,255,0.1);
            padding: 10px;
            border-radius: 5px;
            font-family: monospace;
        }
        
        @media (max-width: 768px) {
            .device-buttons {
                justify-content: center;
            }
            
            .device-btn {
                flex: 1 1 calc(50% - 5px);
                min-width: 120px;
            }
        }
        </style>
    `;

  document.head.insertAdjacentHTML("beforeend", testerStyles);

  return testerContainer;
}

// Device testing functions
let currentDevice = "desktop";

function setDevice(device) {
  const buttons = document.querySelectorAll(".device-btn");
  const customControls = document.getElementById("custom-controls");
  const currentDeviceSpan = document.getElementById("current-device");
  const currentSizeSpan = document.getElementById("current-size");

  // Remove active class from all buttons
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Add active class to clicked button
  event.target.classList.add("active");

  currentDevice = device;

  let width, height, deviceName;

  switch (device) {
    case "mobile":
      width = 375;
      height = 667;
      deviceName = "Mobile";
      customControls.style.display = "none";
      break;
    case "tablet":
      width = 768;
      height = 1024;
      deviceName = "Tablet";
      customControls.style.display = "none";
      break;
    case "desktop":
      width = 1200;
      height = 800;
      deviceName = "Desktop";
      customControls.style.display = "none";
      break;
    case "custom":
      deviceName = "Custom";
      customControls.style.display = "block";
      return; // Don't apply size yet
  }

  // Apply device size to demo containers
  const demoContainers = document.querySelectorAll(
    ".responsive-viewport, .flex-container-demo",
  );
  demoContainers.forEach((container) => {
    container.style.maxWidth = `${width}px`;
    container.style.width = "100%";
    if (device === "mobile") {
      container.style.transform = "scale(0.8)";
      container.style.transformOrigin = "top left";
    } else {
      container.style.transform = "scale(1)";
    }
  });

  currentDeviceSpan.textContent = deviceName;
  currentSizeSpan.textContent = `${width}×${height}`;
}

function applyCustomSize() {
  const width = document.getElementById("custom-width").value;
  const height = document.getElementById("custom-height").value;
  const currentSizeSpan = document.getElementById("current-size");

  const demoContainers = document.querySelectorAll(
    ".responsive-viewport, .flex-container-demo",
  );
  demoContainers.forEach((container) => {
    container.style.maxWidth = `${width}px`;
    container.style.width = "100%";
    container.style.transform = "scale(1)";
  });

  currentSizeSpan.textContent = `${width}×${height}`;
}

// Performance monitoring
function createPerformanceMonitor() {
  const monitor = document.createElement("div");
  monitor.innerHTML = `
        <div class="performance-monitor">
            <h3>⚡ Performance Monitor</h3>
            <div class="metrics">
                <div class="metric">
                    <span class="label">Layout Time:</span>
                    <span class="value" id="layout-time">0ms</span>
                </div>
                <div class="metric">
                    <span class="label">Paint Time:</span>
                    <span class="value" id="paint-time">0ms</span>
                </div>
                <div class="metric">
                    <span class="label">FPS:</span>
                    <span class="value" id="fps-counter">60</span>
                </div>
            </div>
            <button onclick="startPerformanceTest()">Run Performance Test</button>
        </div>
    `;

  const monitorStyles = `
        <style>
        .performance-monitor {
            background: #1a202c;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border: 1px solid #2d3748;
        }
        
        .metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 15px 0;
        }
        
        .metric {
            background: #2d3748;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
        }
        
        .label {
            display: block;
            font-size: 0.9rem;
            opacity: 0.7;
            margin-bottom: 5px;
        }
        
        .value {
            display: block;
            font-size: 1.2rem;
            font-weight: bold;
            color: #68d391;
        }
        </style>
    `;

  document.head.insertAdjacentHTML("beforeend", monitorStyles);

  return monitor;
}

function startPerformanceTest() {
  const layoutTimeEl = document.getElementById("layout-time");
  const paintTimeEl = document.getElementById("paint-time");
  const fpsEl = document.getElementById("fps-counter");

  // Simulate performance measurements
  const startTime = performance.now();

  // Create a test layout
  const testContainer = document.createElement("div");
  testContainer.style.cssText = `
        position: fixed;
        top: -1000px;
        left: 0;
        width: 1000px;
        height: 500px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    `;

  // Add test items
  for (let i = 0; i < 100; i++) {
    const item = document.createElement("div");
    item.style.cssText = `
            flex: 1 1 calc(20% - 10px);
            height: 50px;
            background: linear-gradient(45deg, #f00, #0f0);
            margin: 5px;
            border-radius: 5px;
        `;
    testContainer.appendChild(item);
  }

  document.body.appendChild(testContainer);

  // Force layout
  const rect = testContainer.getBoundingClientRect();
  const layoutTime = performance.now() - startTime;

  // Clean up
  document.body.removeChild(testContainer);

  // Update display
  layoutTimeEl.textContent = `${layoutTime.toFixed(2)}ms`;
  paintTimeEl.textContent = `${(layoutTime * 0.8).toFixed(2)}ms`;

  // Animate FPS counter
  let fps = 60;
  const fpsInterval = setInterval(() => {
    fps = Math.max(30, fps - Math.random() * 5);
    fpsEl.textContent = Math.round(fps);
    if (fps <= 35) {
      clearInterval(fpsInterval);
      fpsEl.style.color = "#f56565";
    }
  }, 100);

  setTimeout(() => {
    clearInterval(fpsInterval);
    fpsEl.style.color = "#68d391";
    fpsEl.textContent = "60";
  }, 2000);
}

// Initialize responsive features on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Responsive Design Tutorial Loaded! 📱");

  // Add advanced demos after the main content
  const mainSection = document.querySelector("#responsive-design");
  if (mainSection) {
    const advancedDemo = createAdvancedDemo();
    const responsiveTester = createResponsiveTester();
    const performanceMonitor = createPerformanceMonitor();

    mainSection.appendChild(advancedDemo);
    mainSection.appendChild(responsiveTester);
    mainSection.appendChild(performanceMonitor);
  }

  // Initialize container size demo
  changeContainerSize(500);

  // Add keyboard navigation for accessibility
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" && e.target.classList.contains("demo-item")) {
      e.target.style.outline = "3px solid #007bff";
      e.target.style.outlineOffset = "2px";
    }
  });

  document.addEventListener(
    "blur",
    function (e) {
      if (e.target.classList.contains("demo-item")) {
        e.target.style.outline = "none";
      }
    },
    true,
  );
});

// Export functions for global access
window.ResponsiveDesign = {
  changeContainerSize,
  toggleMobileOrder,
  checkAnswers,
  setDevice,
  applyCustomSize,
  startPerformanceTest,
};
