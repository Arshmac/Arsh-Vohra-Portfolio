// Smooth Role Fade Animation

document.addEventListener("DOMContentLoaded", function () {

    const roles = ["ML Engineer", "AI Developer"];
    let roleIndex = 0;
    const typing = document.querySelector(".typing");

    // Set initial text
    typing.textContent = roles[0];

    setInterval(() => {
        typing.style.opacity = 0;

        setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            typing.textContent = roles[roleIndex];
            typing.style.opacity = 1;
        }, 300);

    }, 2500);

});

// Scroll Animation for Projects
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("show");
        }
    });
});

// Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// EmailJS
(function(){
    emailjs.init("fOZTZ7HPaFAj-NLSu");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_zkeamcv", "template_mw4v6kp", this)
        .then(function() {
            alert("Message Sent Successfully!");
        }, function(error) {
            alert("Failed to send message.");
            console.log(error);
        });

    this.reset();
});

