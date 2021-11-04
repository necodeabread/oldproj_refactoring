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

    function checkScreenWidth() {
        if(window.screen.width < 768) {
            const pointerParent = document.querySelector('.promo-notifications');
            const pointerBg = document.querySelector('.promo-notifications-pointer');
            pointerBg.parentElement.removeChild(pointerBg);
            const pointerText = document.querySelector('.promo-notifications-text');
            pointerText.parentElement.removeChild(pointerText);

            const pointer = document.createElement('button');
            pointer.innerText = "Get notified when enrollment opens again.";
            pointer.classList.add('promo-block-main-button');
            pointerParent.append(pointer);
            pointer.addEventListener('touchend', function() {
                pointer.style.background = 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)';
                pointer.innerText = "Done!"
            });
        }
    }

    checkScreenWidth();
}); 