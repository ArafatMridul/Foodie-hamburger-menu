const headerSection = document.querySelector(".header-section");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon")
const gototop = document.querySelector(".footer a");

console.log(gototop);

hamburgerIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    headerSection.classList.toggle("menu-open");
})

closeIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    headerSection.classList.toggle("menu-open");
})

gototop.scrollTo(0, 0);