window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('nav__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('nav__active');
        });
    });
});