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
                pointer.innerText = "Done!";
            });

            const triggerButton = document.querySelector('.menu__button_join');
            triggerButton.addEventListener('touchstart', function() {
                const overlay = document.querySelector('.overlay');
                overlay.classList.add('overlay_active');
                $('body').on('touchstart', function(e) {
                    if(!$(e.target).closest('.modal').length && !$(e.target).is('.modal') && !$(e.target).is(triggerButton)) {
                        $('.overlay').fadeOut('slow');
                    }
                });
            });
        } 
    }

    checkScreenWidth();



    function send(event, php) {
        console.log('request being sent');
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var req = new XMLHttpRequest();
        req.open('POST', php, true);
        req.onload = function() {
            if(req.status >= 200 && req.status < 400) {
                json.parse(this.response); // ie 11
                console.log(json);

                if(json.result == "success") {
                    responseModal.classList.add('active');
                    responseModal.innerText = "Success!";
                } else {
                    responseModal.classList.add('active');
                    responseModal.innerText = "Error";
                }
            } else {
                responseModal.classList.add('active');
                responseModal.innerText = `Server Error. Number: ${+req.status}`;
            }
        }
        req.onerror = function() {
            responseModal.classList.add('active');
            responseModal.innerText = "Request send error";
        }
        req.send(new FormData(event.target)); 
    }
    
}); 