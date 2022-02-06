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