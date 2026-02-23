// const model = document.getElementById("mobile-submenu");

const overlay = document.getElementById("overlay");

const toggle_menu = document.getElementById("toggle-menu");

const blurEffect = () => {
    overlay.style.display = "block";
}


const hideBlurEffect = () => {
    overlay.style.display = "none";
}


overlay.addEventListener("click", () => {
    try {
        hideModal();
        toggle_menu.style.left = "-80vw";
        hideBlurEffect();
    } catch (error) {
        
    }
})


const showNavBar = () => {
    blurEffect();
    toggle_menu.style.left = "0%"
}

const modal = document.getElementById('modal')

const hideModal = () => {
    try {
        modal.style.display = "none";
        hideBlurEffect();
    } catch (error) {

    }
}

const showModal = () => {
    try {
        modal.style.display = "flex";
        blurEffect();
    } catch (error) {

    }
}

const toggleModal = () => {
    if (modal.style.display == "none") {
        showModal();
    }
    else {
        hideModal();
    }
}