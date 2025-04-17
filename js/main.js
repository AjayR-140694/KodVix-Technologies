document.addEventListener("DOMContentLoaded", function () {
    // Navbar toggle
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Smooth scroll
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            const headerHeight = $('.header').outerHeight();
            const offset = target.offset().top - headerHeight + 10;
            const scrollPosition = Math.max(0, offset);
            $('html, body').animate({ scrollTop: scrollPosition }, 800);
            $('.fa-bars').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
        }
    });

    // Scroll events
    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if ($(window).scrollTop() > 35) {
            $('.header').css({ 'background': '#002e5f', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
        } else {
            $('.header').css({ 'background': 'none', 'box-shadow': 'none' });
        }
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    // Back to top
    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Counters
    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // Owl Carousels
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }
    });

    // Contact form submit
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            if (validateContactForm()) {
                sendMail();
                contactForm.reset();
            }
        });
    }

    // Career form submit
    const careerForm = document.getElementById("careerForm");
    if (careerForm) {
        careerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            if (validateForm(e)) {
                sendJobMail();
            }
        });
    }

    
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && popup && popup.style.display === "flex") {
            closePopup();
        }
    });
});



function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) return showPopupMessage('Please enter your name'), false;
    if (!phone) return showPopupMessage('Please enter your contact number'), false;
    if (!/^\d{10}$/.test(phone)) return showPopupMessage('Please enter a valid 10-digit phone number'), false;
    if (!email) return showPopupMessage('Please enter your email'), false;
    if (!/\S+@\S+\.\S+/.test(email)) return showPopupMessage('Please enter a valid email address'), false;
    if (!message) return showPopupMessage('Please enter your message'), false;

    return true;
}

function validateForm(e) {
    // TODO: Replace with your job form validation logic
    return true;
}


function sendJobMail() {
    setTimeout(() => {
        showPopupMessage('🎉 Job application submitted successfully!');
    }, 500); // Simulated delay
}
