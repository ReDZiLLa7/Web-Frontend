document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuItems = document.querySelector('.menu-items');
    const closeMenu = document.querySelector('.close-menu');

    mobileMenu.addEventListener('click', function () {
        menuItems.classList.toggle('active');
        mobileMenu.classList.toggle('hide-menu');
    });

    closeMenu.addEventListener('click', function () {
        menuItems.classList.toggle('active');
        mobileMenu.classList.toggle('hide-menu');
    });
});
