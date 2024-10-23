"use strict";
// const burger = document.getElementById('burger') as HTMLElement;
// const navLinks = document.getElementById('nav-links') as HTMLElement;
// const navBar = document.querySelector('.navbar') as HTMLElement;
// const navBarHome = document.getElementById('nav-bar-home') as HTMLElement;
// let buttonClick: boolean;
// burger.addEventListener('click', () => {
//     toggleClasses();
//     if(buttonClick) {
//         navBar.style.display = "none";
//         buttonClick = false;
//         navBarHome.style.display = "flex";
//     } else if (!buttonClick) {
//         navBar.style.display = "block";
//         buttonClick = true;
//         navBarHome.style.display = "none";
//     }
// });
// window.addEventListener('resize', () => {
//     if(burger.classList.contains('active')) {
//         toggleClasses();
//         navBar.style.display = "none";
//         buttonClick = false;
//         navBarHome.style.display = "flex";
//     }
// });
// function toggleClasses() {
//     burger.classList.toggle('active');
//     navLinks.classList.toggle('show');
// }
class navBarToggle {
    constructor(burgerId, navLinksId, navBarHomeId, navBarClass) {
        this.buttonClick = false;
        this.burger = document.getElementById(burgerId);
        this.navBar = document.querySelector(navBarClass);
        this.navBarHome = document.getElementById(navBarHomeId);
        this.navLinks = document.getElementById(navLinksId);
        this.addEventListeners();
    }
    toggleClasses() {
        this.burger.classList.toggle('active');
        this.navLinks.classList.toggle('show');
    }
    handleBurgerClick() {
        this.toggleClasses();
        if (this.buttonClick) {
            this.navBar.style.display = "none";
            this.navBarHome.style.display = "flex";
        }
        else {
            this.navBar.style.display = "block";
            this.navBarHome.style.display = "none";
        }
        this.buttonClick = !this.buttonClick;
    }
    handleWindowResize() {
        if (this.burger.classList.contains('active')) {
            this.toggleClasses();
            this.navBar.style.display = "none";
            this.buttonClick = false;
            this.navBarHome.style.display = "flex";
        }
    }
    addEventListeners() {
        this.burger.addEventListener('click', () => this.handleBurgerClick());
        window.addEventListener('resize', () => this.handleWindowResize());
    }
}
const navToggle = new navBarToggle("burger", "nav-links", "nav-bar-home", ".navbar");
