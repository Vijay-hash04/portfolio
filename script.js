// Comprehensive interactive features

// Smooth scrolling
const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
};

// Form validation
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    inputs.forEach((input) => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
};

// Animations
const animateElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });
    elements.forEach(el => observer.observe(el));
};

// Scroll-to-top button
const scrollToTopButton = document.querySelector('.scroll-to-top');
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
        smoothScroll('body');
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    animateElements();
});