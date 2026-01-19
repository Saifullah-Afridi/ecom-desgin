// Cheat Sheet Interactive Functions

// PDF Generation
function generatePDF() {
  // Show loading message
  showNotification("Preparing PDF...", "info");

  // Simulate PDF generation (in a real app, you'd use a library like jsPDF or html2pdf)
  setTimeout(() => {
    showNotification(
      "PDF generation would typically use libraries like jsPDF or Puppeteer",
      "success",
    );

    // Alternative: Open print dialog
    setTimeout(() => {
      if (
        confirm(
          "Would you like to open the print dialog instead? You can save as PDF from there.",
        )
      ) {
        printCheatSheet();
      }
    }, 2000);
  }, 1500);
}

// Print Functionality
function printCheatSheet() {
  // Add print-specific styles
  const printStyles = `
        <style media="print">
            @page {
                size: A4;
                margin: 0.5in;
            }
            .no-print {
                display: none !important;
            }
            .cheat-section {
                page-break-inside: avoid;
            }
            .property-card, .example-card, .pattern-example {
                break-inside: avoid;
                margin-bottom: 20px;
            }
        </style>
    `;

  document.head.insertAdjacentHTML("beforeend", printStyles);

  // Hide interactive elements
  const interactiveElements = document.querySelectorAll(
    ".download-btn, .page-nav, .tutorial-footer",
  );
  interactiveElements.forEach((el) => el.classList.add("no-print"));

  // Trigger print
  window.print();

  // Clean up after print dialog closes
  setTimeout(() => {
    interactiveElements.forEach((el) => el.classList.remove("no-print"));
  }, 1000);
}

// Bookmark Page
function bookmarkPage() {
  try {
    // Modern browsers
    if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel("Flexbox Cheat Sheet", window.location.href, "");
    } else if (window.external && "AddFavorite" in window.external) {
      window.external.AddFavorite(window.location.href, "Flexbox Cheat Sheet");
    } else {
      // Fallback: show instructions
      showBookmarkInstructions();
    }
  } catch (e) {
    showBookmarkInstructions();
  }
}

function showBookmarkInstructions() {
  const instructions = document.createElement("div");
  instructions.className = "bookmark-instructions";
  instructions.innerHTML = `
        <div class="instruction-content">
            <h3>📖 Bookmark This Page</h3>
            <div class="instruction-steps">
                <div class="step">
                    <span class="step-number">1</span>
                    <span class="step-text">Press <kbd>Ctrl</kbd> + <kbd>D</kbd> (Windows) or <kbd>Cmd</kbd> + <kbd>D</kbd> (Mac)</span>
                </div>
                <div class="step">
                    <span class="step-number">2</span>
                    <span class="step-text">Or use your browser's bookmark button ⭐</span>
                </div>
                <div class="step">
                    <span class="step-number">3</span>
                    <span class="step-text">Save in your "Development Resources" folder</span>
                </div>
            </div>
            <button onclick="closeBookmarkInstructions()" class="close-instructions">Got it!</button>
        </div>
        <div class="instruction-overlay" onclick="closeBookmarkInstructions()"></div>
    `;

  // Add styles
  const instructionStyles = `
        <style>
        .bookmark-instructions {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .instruction-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(5px);
        }
        
        .instruction-content {
            background: white;
            border-radius: 15px;
            padding: 30px;
            max-width: 500px;
            position: relative;
            z-index: 1;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            text-align: center;
        }
        
        .instruction-content h3 {
            color: #2c3e50;
            margin-bottom: 25px;
        }
        
        .instruction-steps {
            text-align: left;
            margin-bottom: 25px;
        }
        
        .step {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            gap: 15px;
        }
        
        .step-number {
            background: #3498db;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .step-text {
            flex: 1;
            color: #495057;
        }
        
        kbd {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 3px;
            padding: 2px 6px;
            font-family: monospace;
            font-size: 0.9em;
            color: #495057;
        }
        
        .close-instructions {
            background: #28a745;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 25px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        
        .close-instructions:hover {
            background: #1e7e34;
        }
        </style>
    `;

  document.head.insertAdjacentHTML("beforeend", instructionStyles);
  document.body.appendChild(instructions);
}

function closeBookmarkInstructions() {
  const instructions = document.querySelector(".bookmark-instructions");
  if (instructions) {
    instructions.remove();
  }
}

// Share Functionality
function shareCheatSheet() {
  const shareData = {
    title: "Flexbox Complete Tutorial & Cheat Sheet",
    text: "Check out this comprehensive Flexbox tutorial and cheat sheet!",
    url: window.location.href,
  };

  if (navigator.share) {
    navigator
      .share(shareData)
      .then(() => showNotification("Shared successfully!", "success"))
      .catch(() => showShareFallback());
  } else {
    showShareFallback();
  }
}

function showShareFallback() {
  const url = window.location.href;
  const text = "Check out this comprehensive Flexbox tutorial and cheat sheet!";
  const title = "Flexbox Complete Tutorial";

  const shareModal = document.createElement("div");
  shareModal.className = "share-modal";
  shareModal.innerHTML = `
        <div class="share-content">
            <h3>📤 Share This Tutorial</h3>
            <div class="share-options">
                <button onclick="shareToTwitter('${encodeURIComponent(text)}', '${encodeURIComponent(url)}')">
                    🐦 Twitter
                </button>
                <button onclick="shareToLinkedIn('${encodeURIComponent(url)}', '${encodeURIComponent(title)}')">
                    💼 LinkedIn
                </button>
                <button onclick="shareToFacebook('${encodeURIComponent(url)}')">
                    📘 Facebook
                </button>
                <button onclick="copyToClipboard('${url}')">
                    📋 Copy Link
                </button>
            </div>
            <div class="share-url">
                <input type="text" value="${url}" readonly onclick="this.select()">
            </div>
            <button onclick="closeShareModal()" class="close-share">Close</button>
        </div>
        <div class="share-overlay" onclick="closeShareModal()"></div>
    `;

  // Add share modal styles
  const shareStyles = `
        <style>
        .share-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .share-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(5px);
        }
        
        .share-content {
            background: white;
            border-radius: 15px;
            padding: 30px;
            max-width: 400px;
            position: relative;
            z-index: 1;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            text-align: center;
        }
        
        .share-content h3 {
            color: #2c3e50;
            margin-bottom: 25px;
        }
        
        .share-options {
            display: grid;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .share-options button {
            padding: 12px 20px;
            border: none;
            border-radius: 25px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .share-options button:nth-child(1) { background: #1da1f2; color: white; }
        .share-options button:nth-child(2) { background: #0077b5; color: white; }
        .share-options button:nth-child(3) { background: #1877f2; color: white; }
        .share-options button:nth-child(4) { background: #6c757d; color: white; }
        
        .share-options button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .share-url {
            margin-bottom: 20px;
        }
        
        .share-url input {
            width: 100%;
            padding: 10px;
            border: 1px solid #dee2e6;
            border-radius: 6px;
            background: #f8f9fa;
            font-size: 0.9rem;
        }
        
        .close-share {
            background: #6c757d;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
        }
        </style>
    `;

  document.head.insertAdjacentHTML("beforeend", shareStyles);
  document.body.appendChild(shareModal);
}

function shareToTwitter(text, url) {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  window.open(twitterUrl, "_blank", "width=600,height=400");
}

function shareToLinkedIn(url, title) {
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  window.open(linkedinUrl, "_blank", "width=600,height=400");
}

function shareToFacebook(url) {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(facebookUrl, "_blank", "width=600,height=400");
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showNotification("Link copied to clipboard!", "success");
      closeShareModal();
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showNotification("Link copied to clipboard!", "success");
      closeShareModal();
    });
}

function closeShareModal() {
  const modal = document.querySelector(".share-modal");
  if (modal) {
    modal.remove();
  }
}

// Social sharing for progress
function shareProgress(platform) {
  const message =
    "I just completed the Complete Flexbox Tutorial! 🎉 Now I can create responsive layouts like a pro! 💪";
  const url = window.location.href;

  switch (platform) {
    case "twitter":
      shareToTwitter(encodeURIComponent(message), encodeURIComponent(url));
      break;
    case "linkedin":
      shareToLinkedIn(encodeURIComponent(url), "Flexbox Tutorial Complete");
      break;
    case "facebook":
      shareToFacebook(encodeURIComponent(url));
      break;
  }
}

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button onclick="closeNotification(this.parentElement.parentElement)" class="notification-close">×</button>
        </div>
    `;

  // Add notification styles if not already added
  if (!document.querySelector("#notification-styles")) {
    const notificationStyles = `
            <style id="notification-styles">
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                min-width: 300px;
                max-width: 500px;
                border-radius: 8px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                animation: slideInRight 0.3s ease-out;
                backdrop-filter: blur(10px);
            }
            
            .notification-info {
                background: rgba(23, 162, 184, 0.95);
                color: white;
                border-left: 4px solid #17a2b8;
            }
            
            .notification-success {
                background: rgba(40, 167, 69, 0.95);
                color: white;
                border-left: 4px solid #28a745;
            }
            
            .notification-warning {
                background: rgba(255, 193, 7, 0.95);
                color: #212529;
                border-left: 4px solid #ffc107;
            }
            
            .notification-error {
                background: rgba(220, 53, 69, 0.95);
                color: white;
                border-left: 4px solid #dc3545;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 15px 20px;
            }
            
            .notification-icon {
                font-size: 1.2rem;
                flex-shrink: 0;
            }
            
            .notification-message {
                flex: 1;
                font-weight: 500;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.3s ease;
                flex-shrink: 0;
            }
            
            .notification-close:hover {
                background: rgba(255,255,255,0.2);
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            .notification.closing {
                animation: slideOutRight 0.3s ease-in forwards;
            }
            </style>
        `;
    document.head.insertAdjacentHTML("beforeend", notificationStyles);
  }

  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    closeNotification(notification);
  }, 5000);
}

function getNotificationIcon(type) {
  const icons = {
    info: "ℹ️",
    success: "✅",
    warning: "⚠️",
    error: "❌",
  };
  return icons[type] || icons.info;
}

function closeNotification(notification) {
  notification.classList.add("closing");
  setTimeout(() => {
    if (notification.parentElement) {
      notification.parentElement.removeChild(notification);
    }
  }, 300);
}

// Search functionality
function initializeSearch() {
  const searchContainer = document.createElement("div");
  searchContainer.innerHTML = `
        <div class="search-container">
            <input type="text" id="cheat-search" placeholder="🔍 Search properties, examples, patterns..." onkeyup="searchCheatSheet(this.value)">
            <div id="search-results" class="search-results"></div>
        </div>
    `;

  const searchStyles = `
        <style>
        .search-container {
            position: sticky;
            top: 20px;
            background: white;
            border-radius: 25px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            margin: 20px 0;
            z-index: 100;
            border: 2px solid #e9ecef;
        }
        
        #cheat-search {
            width: 100%;
            padding: 15px 25px;
            border: none;
            border-radius: 25px;
            font-size: 1rem;
            outline: none;
            background: transparent;
        }
        
        .search-results {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-radius: 0 0 15px 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            max-height: 300px;
            overflow-y: auto;
            display: none;
            z-index: 1000;
        }
        
        .search-result-item {
            padding: 12px 20px;
            border-bottom: 1px solid #f8f9fa;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        
        .search-result-item:hover {
            background: #f8f9fa;
        }
        
        .search-result-item:last-child {
            border-bottom: none;
        }
        
        .search-highlight {
            background: yellow;
            font-weight: bold;
        }
        
        .result-title {
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 4px;
        }
        
        .result-description {
            font-size: 0.9rem;
            color: #6c757d;
        }
        </style>
    `;

  document.head.insertAdjacentHTML("beforeend", searchStyles);

  // Insert search after header
  const header = document.querySelector(".tutorial-header");
  header.insertAdjacentElement("afterend", searchContainer);
}

function searchCheatSheet(query) {
  const resultsContainer = document.getElementById("search-results");

  if (!query.trim()) {
    resultsContainer.style.display = "none";
    return;
  }

  // Search through all content
  const searchableElements = document.querySelectorAll(
    ".property-item, .example-card, .pattern-example, .tip-card",
  );
  const results = [];

  searchableElements.forEach((element) => {
    const text = element.textContent.toLowerCase();
    if (text.includes(query.toLowerCase())) {
      const title =
        element.querySelector("h4, h5, code")?.textContent || "Result";
      const description = text.substring(0, 100) + "...";

      results.push({
        title,
        description,
        element,
      });
    }
  });

  if (results.length > 0) {
    resultsContainer.innerHTML = results
      .slice(0, 5)
      .map(
        (result) => `
            <div class="search-result-item" onclick="scrollToElement('${result.element.id || result.element.className}')">
                <div class="result-title">${highlightQuery(result.title, query)}</div>
                <div class="result-description">${highlightQuery(result.description, query)}</div>
            </div>
        `,
      )
      .join("");
    resultsContainer.style.display = "block";
  } else {
    resultsContainer.innerHTML =
      '<div class="search-result-item">No results found</div>';
    resultsContainer.style.display = "block";
  }
}

function highlightQuery(text, query) {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, '<span class="search-highlight">$1</span>');
}

function scrollToElement(identifier) {
  const element =
    document.getElementById(identifier) ||
    document.querySelector(`.${identifier}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    element.style.outline = "3px solid #007bff";
    setTimeout(() => {
      element.style.outline = "none";
    }, 2000);
  }
  document.getElementById("search-results").style.display = "none";
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Flexbox Cheat Sheet Loaded! 📋");

  // Initialize search
  initializeSearch();

  // Add keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    // Ctrl/Cmd + F for search
    if ((e.ctrlKey || e.metaKey) && e.key === "f") {
      e.preventDefault();
      document.getElementById("cheat-search").focus();
    }

    // Escape to clear search
    if (e.key === "Escape") {
      document.getElementById("cheat-search").value = "";
      document.getElementById("search-results").style.display = "none";
    }
  });

  // Hide search results when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-container")) {
      document.getElementById("search-results").style.display = "none";
    }
  });

  // Add smooth scrolling to all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
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

  // Welcome notification
  setTimeout(() => {
    showNotification(
      "Welcome to the Flexbox Cheat Sheet! Use Ctrl+F to search or scroll down to explore.",
      "info",
    );
  }, 1000);
});

// Export functions for global access
window.CheatSheet = {
  generatePDF,
  printCheatSheet,
  bookmarkPage,
  shareCheatSheet,
  shareProgress,
  showNotification,
  searchCheatSheet,
};
