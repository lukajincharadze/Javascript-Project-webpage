
// BURGER MENU
let navigation2 = document.querySelector(".navigation2");
let navigation = document.querySelector(".navigation");
let navblog = document.querySelector(".nav_blog");
let nav_logo = document.querySelector(".nav_logo");
let navigationbg = document.querySelector(".navigation2bg");
let burger = document.querySelector(".container");
let nav_wraper = document.querySelector(".nav_wraper");
let circle_img = document.querySelector(".circle_div2");

burger.addEventListener("click", function() {
    circle_img.classList.toggle("active");
    navigation2.classList.toggle("active");
    navblog.classList.toggle("active");
    nav_logo.classList.toggle("active");
    navigation.classList.toggle("active");
    navigationbg.classList.toggle("active");
    nav_wraper.classList.toggle("active");
    burger.classList.toggle("change");
});