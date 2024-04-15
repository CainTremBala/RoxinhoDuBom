const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click' , () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})

$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });    

    const sections = $('section');
    const navItems = $('.nav_item');
    })