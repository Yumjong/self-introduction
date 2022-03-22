'use strict'

// navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar_toggle-btn")
const navbarMenu =document.querySelector(".navbar_menu")
navbarToggleBtn.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open')
})