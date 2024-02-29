//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Service section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click", () => {
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });        
    });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfoliomodal = function(modalClick) {
    portfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((imgCards, i) => {
    imgCards.addEventListener("click", () => {
        portfoliomodal(i);
    });
});
portfolioCloseBtns.forEach((portfolioCloseBtns) => {
    portfolioCloseBtns.addEventListener("click", () => {
        portfolioModals.forEach((portfoliomodalView) => {
            portfoliomodalView.classList.remove("active");
        });        
    });
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getcurrentTheme());
    localStorage.setItem("saved-icon", getcurrentIcon());
});

const getcurrentTheme = () => document.body.classList.contains("drak-theme") ? "dark" : "light";
const getcurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});
scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll",() => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionheight = current.offsetHeight;
        let sectiontop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectiontop && scrollY <= sectiontop + sectionheight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });

});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});
navItems.forEach((navItem) =>{
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3', '.home .info p, .about-info .btn', { delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .contact-left h2', { delay: 700, origin: 'left'});
ScrollReveal().reveal('.experince-card, .skills-info, .service-card, .education, .portfolio .img-card', { delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.footer-container .group', { delay: 500, origin: 'top', interval: 200});

//contact form
