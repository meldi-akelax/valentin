
function getElement(selector) {
    return document.querySelector(selector);
}

function getAllElements(selector) {
    return document.querySelectorAll(selector);
}
document.addEventListener('DOMContentLoaded', function() {
    
    var elems = document.querySelectorAll('.modal');
    var modal_instances = M.Modal.init(elems);
    
        /* Image Slider - Swiper */
        var imageSliderTwo = new Swiper('.image-slider-2', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            speed: 1000,
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
            breakpoints: {
                // when window is <= 580px
                580: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window is <= 768px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window is <= 992px
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window is <= 1200px
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },

            }
        });
});
/* #26a69a 1976D2 */