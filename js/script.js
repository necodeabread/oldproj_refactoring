document.addEventListener('DOMContentLoaded', function() {
    const notificationToggler = document.querySelector('.promo-notifications-text');
    const pointer = document.querySelector('.promo-notifications-pointer');

    notificationToggler.addEventListener('click', function() {
        if(pointer.classList.contains('inactive')) {
            pointer.classList.remove('inactive');
            pointer.classList.add('active');
            return;
        } else {
            pointer.classList.add('inactive');
            pointer.classList.remove('active');
        }
    });
}); 