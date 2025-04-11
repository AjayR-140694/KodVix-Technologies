
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_5f5bu71", "template_xpn5tzq", parms)
        .then(function(response) {
            alert("Your email has been sent successfully ✅. Our Kodvix Team will contact you soon! 📩👨‍💻");
        }, function(error) {
            alert("Oops! Something went wrong. Please try again.");
        });
}

function sendJobMail() {
    let parms1 = {
        selectedPost: document.querySelector('input[name="status"]:checked').value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        coverLetter: document.getElementById("message").value,
        link: document.getElementById("link").value
    };

    emailjs.send("service_5f5bu71", "template_rwuoe0g", parms1)
        .then(function(response) {
            alert("Your message has been sent successfully ✅. The Kodvix team will be in touch with you shortly! 📩👨‍💻");
        }, function(error) {
            alert("Oops! Something went wrong. Please try again.");
        });
}
