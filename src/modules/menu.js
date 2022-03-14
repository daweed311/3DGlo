
"use strict";

const menu = () => {

    const menu = document.querySelector('menu');

    const smoothScroll = (href) => {

        const transitionElement = document.querySelector(href);

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

    document.querySelector('body').addEventListener('click', (e) => {
        let itemMenu = null, nextBlock;

        if (e.target.closest('.menu') ||                  
            e.target.classList.contains('close-btn') ||     
            (itemMenu = e.target.closest('menu ul>li>a')) ||    
            (!e.target.closest('.active-menu') &&           
                menu.classList.contains('active-menu'))) {

            menu.classList.toggle('active-menu');

        } else if ((nextBlock = e.target.closest('main a'))) {

            smoothScroll(nextBlock.getAttribute("href"));
        }

        if (itemMenu) { smoothScroll(itemMenu.getAttribute("href")); }
    });

}; 
export default menu;
