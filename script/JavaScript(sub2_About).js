const headerToggle = document.getElementById("headerToggle");
const headerNav = document.querySelector(".nav");

headerToggle.addEventListener("click", function (e) {
    e.preventDefault();
    headerNav.classList.toggle("show");
    headerToggle.getAttribute("aria-expanded") === "true" ?
        headerToggle.setAttribute("aria-expanded", "false") :
        headerToggle.setAttribute("aria-expanded", "true");
});


const items = document.querySelectorAll(".accordion button");

function toogleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false")
    } if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true")

    }
};

items.forEach(function (items) {
    items.addEventListener("click", toogleAccordion);
});
