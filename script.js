
// This is for add effect to the navbar once the user scrolls

const navbar = document.querySelector('.l_header');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


// This is to make the Hembuerge and close functional 


// const navMenu = document.querySelectorAll("nav-menu, nav-menu-other"),
const navMenu = document.getElementById("nav-menu"),
     navToggle = document.getElementById("nav_toggle"),
     navClose = document.getElementById("nav_close");


/*=============== SHOW MENU ===============*/
/* validate if constant exists  */
// if(navToggle) {
//     navToggle.addEventListener("click", () => {
//         navMenu.classList.add("show-menu");
//         console.log("there");
//     })
// }
// if(navClose) {
//     navClose.addEventListener("click", () => {
//         navMenu.classList.remove("show-menu")
//     })
// }

// const navLink = document.querySelectorAll(".nav_links");

// function linkAction() {
//     navMenu.classList.remove("show-menu")
// }

// navLink.forEach(n => n.addEventListener("click", linkAction))


// dropdown 

// document.addEventListener("click", e => {
//     console.log("there");
//     const isDropdownButton = e.target.matches("dropdown")
//     if (!isDropdownButton && e.target.closest('container_items') != null) return

//     let currentDropdown
//     if (isDropdownButton) {
//         currentDropdown = e.target.closest('container_items')
//         currentDropdown.classList.toggle('active')
//     }

//     document.querySelectorAll("container_items.active").forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove('active')
//     })
// })


document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (container_items === currentDropdown) return
        container_items.classList.remove('active')
    })
})