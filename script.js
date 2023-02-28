const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2) {
          input.setAttribute("disabled", true);
          input.value = "";
          if (prevInput) {
            prevInput.focus();
          }
        }
        if (index1 === 0) {
          inputs[0].removeAttribute("disabled");
          inputs[0].focus();
        }
      });
    }

    if (
      !inputs[inputs.length - 1].hasAttribute("disabled") &&
      inputs[inputs.length - 1].value !== ""
    ) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});

window.addEventListener("load", () => inputs[0].focus());
