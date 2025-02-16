/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav_toggle"),
  navClose = document.getElementById("nav_close");
// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
let navLink = document.querySelectorAll(".nav_link");
const linkAction = () => {
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height add the blur-header class to the header
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scroll = document.getElementById("scroll-up");
  this.scrollY >= 150
    ? scroll.classList.add("show-scroll")
    : scroll.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2000,
  delay: 300,
  // reset: true,
});
sr.reveal(`.home_data , .about_data , .about_img, .visit_data`);
sr.reveal(
  `.home_image, .footer_img-1,.footer_img-2`, { rotate: { z: -15 } });
sr.reveal(`.home_bread`, { rotate: { z: 15 } });
sr.reveal(`.home_footer`, { scale: 1, origin: "bottom" });

sr.reveal(`.new_card:nth-child(1) img`, { rotate: { z: -30 }, distance: 0 });
sr.reveal(`.new_card:nth-child(2) img`, {
  rotate: { z: 15 },
  distance: 0,
  delay: 600,
});
sr.reveal(`.new_card:nth-child(3) img`, {
  rotate: { z: -30 },
  distance: 0,
  delay: 900,
});

sr.reveal(`.fav_card img`, { interval: 100, rotate: { z: 15 }, distance: 0 });
sr.reveal(`.footer_container`, { scale: 1 });
