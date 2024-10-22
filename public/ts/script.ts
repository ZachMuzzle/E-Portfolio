const burger = document.getElementById('burger') as HTMLElement;
const navLinks = document.getElementById('nav-links') as HTMLElement;

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('show');
});
