const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
const main = body.querySelector("main");

let getMode = localStorage.getItem("mode")
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    main.classList.toggle("expand")
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    if (!body.classList.contains("dark")) {
        return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode", "dark");
});
