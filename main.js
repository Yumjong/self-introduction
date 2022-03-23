'use strict'


// Make navbar opacity when navbar is scrolling
const navbar = document.querySelector('#navbar');
const navbarHeight =navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    console.log("navbarHeiht",navbarHeight)
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark')
    }else{
        navbar.classList.remove('navbar--dark')
    }
})

// navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar_toggle-btn")
const navbarMenu =document.querySelector(".navbar_menu")
navbarToggleBtn.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open')
})