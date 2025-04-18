$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

   
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if(target.length) {
            const headerHeight = $('.header').outerHeight();
            const offset = target.offset().top - headerHeight + 10; 
            const scrollPosition = Math.max(0, offset);
            $('html, body').animate({
                scrollTop: scrollPosition
            }, 800);
            $('.fa-bars').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');
        }
    });
    
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if($(window).scrollTop() > 35) {
            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        } else {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
        
        if($(this).scrollTop() > 100) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

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

    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });

    $('#contactForm').submit(function(event) {
        event.preventDefault();
        if(validateContactForm()) {
            sendMail();
            showPopup('Message sent successfully!');
            this.reset(); 
        }
        return false;
    });

    $('.close-popup').click(function() {
        $('#validationPopup').hide();
    });

    $(window).click(function(event) {
        const popup = document.getElementById('validationPopup');
        if (event.target === popup) {
            $(popup).hide();
        }
    });
});

function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
        showPopup('Please enter your name');
        return false;
    }
    if (!phone) {
        showPopup('Please enter your contact number');
        return false;
    }
    if (!/^\d{10}$/.test(phone)) {
        showPopup('Please enter a valid 10-digit phone number');
        return false;
    }
    if (!email) {
        showPopup('Please enter your email');
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        showPopup('Please enter a valid email address');
        return false;
    }
    if (!message) {
        showPopup('Please enter your message');
        return false;
    }
    return true;
}

function showPopup(message) {
    const popup = document.getElementById('validationPopup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popup.style.display = 'block';
}


document.addEventListener("DOMContentLoaded", function() {
    const contents = document.querySelectorAll('body > *:not(script):not(style)');
    const wrapper = document.createElement('div');
    wrapper.id = 'mainContentWrapper';
    const popupOverlay = document.getElementById('popupOverlay');
    document.body.appendChild(wrapper);
    contents.forEach(element => {
      if (element !== wrapper && element !== popupOverlay) {
        wrapper.appendChild(element);
      }
    });
    if (popupOverlay && popupOverlay.parentNode !== document.body) {
      document.body.appendChild(popupOverlay);
    }
    window.openpopup = function() {
      popupOverlay.classList.add("open-popup");
      document.body.classList.add("popup-active");
      document.getElementById('mainContentWrapper').classList.add('content-blur');
    };
    window.closepopup = function() {
      popupOverlay.classList.remove("open-popup");
      document.body.classList.remove("popup-active");
      document.getElementById('mainContentWrapper').classList.remove('content-blur');
    };
    popupOverlay.addEventListener("click", function(event) {
      if (event.target === popupOverlay) {
        closepopup();
      }
    });
    const popup = document.getElementById('popup');
    if (popup) {
      popup.addEventListener("click", function(event) {
        event.stopPropagation();
      });
    }
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && popupOverlay.classList.contains("open-popup")) {
        closepopup();
      }
    });
  });
