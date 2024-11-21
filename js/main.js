// Initialize AOS
AOS.init({
    duration: 800,
    once: false,
    mirror: true
});

// Handle subscribe button clicks
document.querySelectorAll('.subscribe-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Replace this with your subscription logic
        alert('Subscribe feature coming soon!');
    });
});

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 2)) {
            section.classList.add('active');
        }
    });
}); 