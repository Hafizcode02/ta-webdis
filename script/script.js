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

/* Maintaining The Navbar State */
let navbarState = false;
const navbarToggle = document.querySelector(".responsive-toggle");

navbarToggle.addEventListener("click", () => {
    const navLinks = document.querySelector(".links");
    if (navbarState) {
        navLinks.style.top = "-40rem";
        navbarState = false;
    } else {
        navLinks.style.top = "-4rem";
        navbarState = true;
    }
})

/* Navbar Click On Responsive mode */
const navLinks = document.querySelectorAll("#nav-link");
//Adding the event listeners to all the links on the responsive navbar
navLinks.forEach((link) =>
    link.addEventListener("click", () => {
        const navlinks = document.querySelector(".links");
        navlinks.style.top = "-40rem";
        navbarState = false;
    })
);

/* Scroll Reveal Js Animation */
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2100,
    reset: true
});
scrollReveal.reveal(
    `.starter,
    .about,
    .contagion,
    .symptoms,
    .solutions,
    .blog,
    footer,
    span`
);

