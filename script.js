const codes = document.querySelectorAll(".code");

function setFocused(el) {
  codes.forEach(c => c.classList.remove("focused"));
  el.classList.add("focused");
  el.focus();
}

// Initial focus (important for Cypress)
setFocused(codes[0]);

codes.forEach((code, index) => {
  code.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      if (index > 0) {
        setFocused(codes[index - 1]);
      }
      return;
    }

    if (code.value && index < codes.length - 1) {
      setFocused(codes[index + 1]);
    }
  });
});
