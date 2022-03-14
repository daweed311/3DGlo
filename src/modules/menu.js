
"use strict";

const menu = () => {

    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const nextBtn = document.querySelector('main a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    const smoothScroll = (event) => {
        const transitionElement = document.querySelector(event.currentTarget.hash);

        let scrollY = Math.round(window.scrollY);
        const scrollTarget = Math.round(transitionElement.getBoundingClientRect().top) + scrollY;
        const stepScroll = Math.round((scrollTarget - scrollY) / 16.7);

        event.preventDefault();

        (function animation() {
            scrollY += stepScroll;
            if ((scrollY < scrollTarget) ||
                (scrollY - scrollTarget < stepScroll)) {
                requestAnimationFrame(animation);
                window.scrollTo(0, Math.min(scrollY, scrollTarget));
            }
        })();

    };

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);
    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));
    menuItems.forEach(menuItem => menuItem.addEventListener('click', smoothScroll));
    nextBtn.addEventListener('click', smoothScroll);

}; 
export default menu;
