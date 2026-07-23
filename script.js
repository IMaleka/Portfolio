/*=========================================
    TYPING EFFECT
=========================================*/

const typingElement = document.querySelector(".typing");
const loader = document.getElementById("loader");

const words = [

    "Software Developer",
    "C# Developer",
    "Web Developer",
    "Problem Solver",
    "IT Student"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    }

    else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 90);

}

typeEffect();

/*=========================================
    SMOOTH REVEAL ON SCROLL
=========================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/*=========================================
    NAVBAR SCROLL EFFECT
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.classList.add("nav-scrolled");

    }

    else {

        navbar.classList.remove("nav-scrolled");

    }

});

/*=========================================
    ACTIVE NAVIGATION LINK
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".hamburger");

const menu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("mobile-menu");

});

/*=========================================
    CLOSE MENU WHEN LINK CLICKED
=========================================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("mobile-menu");

    });

});

/*=========================================
LOADING SCREEN
=========================================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },800);

    },2200);

});

/*=========================================
PROGRESS BAR
=========================================*/

const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    let scroll=window.scrollY;

    let height=document.body.scrollHeight-window.innerHeight;

    progress.style.width=(scroll/height)*100+"%";

});

/*=========================================
SCROLL BUTTON
=========================================*/

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*=========================================
CURSOR GLOW
=========================================*/

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});