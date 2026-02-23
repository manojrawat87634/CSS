// const model = document.getElementById("mobile-submenu");

const overlay = document.getElementById("overlay");

const toggle_menu = document.getElementById("toggle-menu");

const blurEffect = ()=>{
    overlay.style.display = "block";
}


const hideBlurEffect = ()=>{
    overlay.style.display = "none";
}


overlay.addEventListener("click" , ()=>{
    toggle_menu.style.left = "-80vw"
    hideBlurEffect();
})


const showNavBar = ()=>{
    blurEffect();
    toggle_menu.style.left = "0%"
}