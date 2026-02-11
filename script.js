// script.js for interactive functionality of the dynamic portfolio website

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animations on scroll
const revealElements = document.querySelectorAll('.reveal');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(handleIntersect, options);
revealElements.forEach(element => observer.observe(element));

// Form handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    console.log(data); // Replace this with actual form submission logic

    alert('Form submitted successfully!');
    this.reset();
});