document.addEventListener('DOMContentLoaded', function() {

    const notificationToggler = document.querySelector('.promo-notifications-text');
    const pointer = document.querySelector('.promo-notifications-pointer');

    function toggleClass(toggler, item) {
        toggler.addEventListener('click', function() {
            if(item.classList.contains('inactive')) {
                item.classList.remove('inactive');
                item.classList.add('active');
                return;
            } else {
                item.classList.add('inactive');
                item.classList.remove('active');
            }
        });
    }

    toggleClass(notificationToggler, pointer);

    const slides = document.querySelectorAll('.learning__slider-card');
    slides.forEach(function(slide) {
        slide.addEventListener('mouseenter', function(e) {   
            e.target.style.zIndex = 10;
        });
        slide.addEventListener('mouseleave', function(e) {
            e.target.style.zIndex--;
        });
    });
}); 