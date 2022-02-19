// Slider
const swiper = new Swiper(`.swiper`, {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,

    navigation: {
        nextEl: `.friends__nav-btn-next`,
        prevEl: `.friends__nav-btn-prev`,
    }
});

// Scroll when click
const menuLinks = document.querySelectorAll('.menu__list-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
