
function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_5f5bu71", "template_rwuoe0g", parms)
    .then(function (response) {
      showPopupMessage("Your message has been sent successfully ✅. The Kodvix team will be in touch with you shortly! 📩👨‍💻");
    }, function (error) {
      showPopupMessage("Oops! Something went wrong. Please try again.");
    });
}

function showPopupMessage(message) {
  const popup = document.getElementById("validationPopup");
  const messageEl = document.getElementById("popupMessage");

  messageEl.textContent = message;
  popup.style.display = "flex"; 
  document.body.classList.add("no-scroll"); 
}

function closePopup() {
  document.getElementById("validationPopup").style.display = "none";
  document.body.classList.remove("no-scroll"); 
  window.location.href = "/"; 
}


document.querySelector(".close-popup").addEventListener("click", closePopup);


window.addEventListener("click", function (e) {
  const popup = document.getElementById("validationPopup");
  const popupContent = document.querySelector(".popup-content");

  if (popup.style.display === "flex" && !popupContent.contains(e.target)) {
      closePopup();
  }
});


document.getElementById("contactForm").addEventListener("submit", validateContactForm);



function sendJobMail() {
setTimeout(() => {
  showPopupMessage('🎉 Job application submitted successfully!');
}, 500); 

function showPopupMessage(message) {
const popup = document.getElementById("validationPopup");
const messageEl = document.getElementById("popupMessage");
messageEl.textContent = message;
popup.style.display = "flex";
}

function closePopup() {
document.getElementById("validationPopup").style.display = "none";
window.location.href = "/"; 
}


document.addEventListener("DOMContentLoaded", function () {
document.querySelector(".close-popup").addEventListener("click", closePopup);


window.addEventListener("click", function (e) {
  const popup = document.getElementById("validationPopup");
  if (e.target === popup) {
    closePopup();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("careerForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      validateForm(e); 
    });
  }
});


  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          if (validateContactForm()) {
              sendMail();
              showPopup('Message sent successfully!');
              contactForm.reset();
          }
      });
  }
});


