//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((code) => {
  code.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      const prevSibling = code.previousElementSibling;
      if (prevSibling) {
        prevSibling.focus();
      }
      return;
    }
    const nextSibling = code.nextElementSibling;
    if (nextSibling) {
      nextSibling.focus();
    }
  });
});
