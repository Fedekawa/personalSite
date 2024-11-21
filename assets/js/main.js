// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Handle subscribe button clicks
document.querySelectorAll('.subscribe-btn').forEach(button => {
    button.addEventListener('click', () => {
        // You can replace this with your actual subscription logic
        alert('Subscribe functionality coming soon!');
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});