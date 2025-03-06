AOS.init();

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
