

const headerToggle = document.getElementById("headerToggle");
const headerNav = document.querySelector(".nav");

headerToggle.addEventListener("click", function (e) {
    e.preventDefault();
    headerNav.classList.toggle("show");
    headerToggle.getAttribute("aria-expanded") === "true" ?
        headerToggle.setAttribute("aria-expanded", "false") :
        headerToggle.setAttribute("aria-expanded", "true");
});
