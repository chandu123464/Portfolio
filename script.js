// Get all project videos
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

// Hover sign on the first project (can be removed/applied to all)
const hoverSign = document.querySelector('.hover-sign'); 

const videoList = [video1, video2, video3];

// Project Video Hover Effect
videoList.forEach(function(video) {
    video.addEventListener("mouseover", function() {
        video.play();
        // Only show hover sign on first video, hide when active/playing
        if (video.id === 'projectVideo1') {
            hoverSign.classList.add("active");
        }
    })
    video.addEventListener("mouseout", function() {
        video.pause();
        if (video.id === 'projectVideo1') {
            hoverSign.classList.remove("active");
        }
    })
});

// Sidebar Open/Close Logic
menu.addEventListener("click", function() {
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function() {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

// =======================================================
// EMAILJS CONFIGURATION AND LOGIC
// =======================================================

// 1. Initialize EmailJS with your Public ID (7oT2TWbBduPyjd81o)
(function() {
    // This must match your EmailJS Public Key
    emailjs.init('7oT2TWbBduPyjd81o'); 
})();

// Get form elements by their new IDs
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

// 2. Configure: Your EmailJS credentials
// Service ID: service_itni0rq
const serviceID = 'service_itni0rq'; 
// Template ID: template_n9xyh8f
const templateID = 'template_n9xyh8f'; 

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop default form submission

        formFeedback.textContent = 'Sending...';
        formFeedback.style.color = '#72a1de'; // Blue color for sending state

        // The 'this' keyword refers to the form element itself (contactForm)
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                formFeedback.textContent = 'Message sent successfully! 😊';
                formFeedback.style.color = 'lightgreen';
                contactForm.reset(); // Clear form fields
            }, (error) => {
                console.error('FAILED TO SEND MESSAGE:', error);
                // Displays the error shown in your screenshot
                formFeedback.textContent = 'Failed to send message. Please try again. 😢';
                formFeedback.style.color = 'red';
            })
            .finally(() => {
                // Clear the feedback after 5 seconds
                setTimeout(() => {
                    formFeedback.textContent = '';
                }, 5000);
            });
    });
}