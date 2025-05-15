const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", () => {
  const trimmedValue = inputEl.value.trim();
  if (trimmedValue !== "") {
    outputEl.textContent = trimmedValue;
  } else {
    outputEl.textContent = "Anonymous";
  }
});
