const slider = document.querySelector(".slider")
const logo = document.querySelector(".logo");
const hamburger = document.querySelector(".hamburger");
const buttons = document.querySelector(".button")
const container = document.querySelector(".container")

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")

    //Toggle Nav
    let menuOpen = false;
    hamburger.addEventListener('click', () => {
        if(!menuOpen) {
            hamburger.classList.add('open');
            menuOpen = true;
        }
        else {
            hamburger.classList.remove('open');
            menuOpen = false;
        }

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
    });
}

navSlide();


const t2 = new TimelineMax();

t2.fromTo(
    container,
    2.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=0.5"
)

.fromTo(
    slider,
    1.5,
    {x: "-100%"},
    {x: "0%", ease: Power2.easeInOut},
    "-=1.2"
)

.fromTo(
    logo,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=0.5"
)
.fromTo(
    hamburger,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=0.5"
)





