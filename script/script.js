/* Preloader */
const preloader = document.querySelector(".preloader");
const bodyLoaded = () => {
    setTimeout(() => {
        preloader.style.display = "none";
    }, 2000);
};

/* Scroll To The Top */
const scrollToTop = document.querySelector(".scrollToTop");
/* When Scroll Height is greater than 400 then display scroll to top */
window.addEventListener("scroll", () => {
    window.scrollY > 400 ? scrollToTop.style.display = "block" : scrollToTop.style.display = "none";
});
/* Scroll To Top On Click Event */
scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
});
/* Scroll Reveal Js Animation */
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2500,
    reset: true
});
scrollReveal.reveal(
    `.starter,
    .about,
    .contagion,
    .symptoms,
    .solutions,
    footer,
    span
    `
);

