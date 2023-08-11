window.addEventListener("DOMContentLoaded", () => {
    const infiniteSlider = new Swiper(".infinite-slider", {
        loop: true,
        loopedSlides: 2,
        slidesPerView: "auto",
        speed: 2000,
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});