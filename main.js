// Function to display the login form and hide the register form
function login() {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
}

// Function to display the register form and hide the login form
function register() {
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
}

// Initially show the login form and hide the register form
window.onload = function() {
    login();  // Ensure login form is displayed by default
};



// Book session Now

function scrollToLogin() {
    // Get the login form by its ID
    const loginForm = document.getElementById("login");

    // Scroll the page to the login form
    loginForm.scrollIntoView({
        behavior: "smooth",  // Smooth scroll
        block: "start"       // Scroll the form to the top of the viewport
    });
}


// Services 

function scrollToServices() {
    const services = document.getElementById("services");

    services.scrollIntoView({
        behavior: "smooth",  // Smooth scroll
        block: "start"       // Scroll the form to the top of the viewport
    });
}


// Testimonials

function scrollToTestimonials() {
    const testimonials = document.getElementById("testimonials");

    testimonials.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// FAQ

function scrollToFaq() {
    const faq = document.getElementById("faq");

    faq.scrollIntoView({
        behavior: "smooth",  // Smooth scroll
        block: "start"       // Scroll the form to the top of the viewport
    });
}

// Contact us

function scrollToContact() {
    const contact = document.getElementById("contact");

    contact.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the answer
        item.classList.toggle('active');
    });
});


