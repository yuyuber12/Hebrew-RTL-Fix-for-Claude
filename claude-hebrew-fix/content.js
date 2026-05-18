// זיהוי אם טקסט מכיל עברית
function containsHebrew(text) {
  return /[\u0590-\u05FF]/.test(text);
}

// תיקון כיוון לפסקה שלמה
function fixParagraph(el) {
  if (containsHebrew(el.innerText)){

    el.style.direction = "rtl";
    el.style.textAlign = "right";
    el.style.unicodeBidi = "plaintext";
  }
}

// תיקון כל הפסקאות בתגובה
function fixResponse(responseEl) {
  fixParagraph(responseEl);
}

// מאזין לשינויים בדף (תגובות חדשות)
const observer = new MutationObserver(() => {
  const responses = document.querySelectorAll(".font-claude-response-body");
  responses.forEach(fixResponse);
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
