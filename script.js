const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
  code.addEventListener("keyup", (e) => {
    // Remove focused class from all
    codes.forEach(c => c.classList.remove("focused"));

    if (e.key === "Backspace") {
      if (index > 0) {
        codes[index - 1].focus();
        codes[index - 1].classList.add("focused");
      }
      return;
    }

    if (code.value && index < codes.length - 1) {
      codes[index + 1].focus();
      codes[index + 1].classList.add("focused");
    }
  });

  code.addEventListener("focus", () => {
    codes.forEach(c => c.classList.remove("focused"));
    code.classList.add("focused");
  });
});
