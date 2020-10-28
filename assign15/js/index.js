var count = 0;
const output = document.querySelector("#output");
const decBtn = document.querySelector("#dec");
const incBtn = document.querySelector("#inc");

output.textContent = count;

incBtn.addEventListener("click", () => {
    output.textContent = ++count;
    decBtn.removeAttribute("disabled");
    decBtn.classList.remove("disabled");
});

decBtn.addEventListener("click", () => {
    output.textContent = --count;
    if (count == 0) {
        decBtn.setAttribute("disabled", "true");
        decBtn.classList = "disabled";
    }
});