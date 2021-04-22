const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector(".logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const viewbutton = document.querySelector(".viewbutton");
const finalbutton = document.querySelector(".finalbutton");

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

viewbutton.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e. clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    setTimeout(()=>{
        ripples.remove()
    }, 1000);

})

/*
finalbutton.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e. clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    setTimeout(()=>{
        ripples.remove()
    }, 1000);

})
*/

function changeImage(button) {
    document.getElementById('landscape').className = "landscape";
    document.getElementById('landscape').src='./images/liyuemountains.jpg';
    button.style.visibility = "hidden";
}

const t1 = new TimelineMax();

t1.fromTo(
    hero,
    1.2, 
    {height: "0%"}, 
    {height: "100%", ease: Power2.easeInOut}
)
.fromTo(
    hero, 
    1.2,
    {width: "90%"}, 
    {width: "100%", ease: Power2.easeInOut}
)
.fromTo(
    slider,
    1.2,
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
.fromTo(
    headline,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=1"
)





