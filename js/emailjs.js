
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
    popup.style.display = "flex"; // show popup
  }

  function closePopup() {
    document.getElementById("validationPopup").style.display = "none";
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



// function sendJobMail() {
//     let parms1 = {
//         selectedPost: document.querySelector('input[name="status"]:checked').value,
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         coverLetter: document.getElementById("message").value,
//         link: document.getElementById("link").value
//     };  
   
// }
function sendJobMail() {
  // Simulating job post success with timeout
  // Replace this with your actual job submission logic (like fetch/AJAX)
  setTimeout(() => {
    showPopupMessage('🎉 Job application submitted successfully!');
  }, 500); // Simulate network delay
}

function showPopupMessage(message) {
  const popup = document.getElementById("validationPopup");
  const messageEl = document.getElementById("popupMessage");
  messageEl.textContent = message;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("validationPopup").style.display = "none";
  window.location.href = "/"; // Redirect to homepage or anywhere
}

// Event listener for close button
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".close-popup").addEventListener("click", closePopup);

  // Optional: close popup if clicked outside
  window.addEventListener("click", function (e) {
    const popup = document.getElementById("validationPopup");
    if (e.target === popup) {
      closePopup();
    }
  });

  // Submit handler
  document.getElementById("careerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm(e);
  });
});
