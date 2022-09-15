"use strict"

console.log('test');

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
        console.log("merg");
    }
}

function myfunction() {
    const boton = document.getElementById("operations__content--1");
    if (boton.style.display === "block") {
        boton.style.display = "none"


    } else {
        boton.style.display = "block"
    }
}


// function close() {
//     const botonclose = document.getElementById("operations__content--1");
//     if (botonclose.style.display === "none") {
//         botonclose.style.display === "block"
//         console.log("click")
//     }

// }

function bottton() {
    const buttonsky2 = document.getElementById("operations__content--2");
    if (buttonsky2.style.display === "block") {
        buttonsky2.style.display = "none"

    } else {
        buttonsky2.style.display = "block"
    }
}
///slide for section 4 
let slidersow = 1;
showSlides(slidersow);

function plusSlides(e) {
    showSlides(slidersow += e);

}
function currentSlide(e) {
    showSlides(slidersow = e);

}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slidersow = 1 }
    if (n < 1) { slidersow = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slidersow - 1].style.display = "block";
}
