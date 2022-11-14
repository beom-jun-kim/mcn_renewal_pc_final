var swiperPrdList = new Swiper("#swiperPrdList .swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        snapOnRelease: false,
    },
    breakpoints: {
    640: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1024: {
        slidesPerView: 4,
    },
    },
});