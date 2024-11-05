// assets/js/main.js

// Navigation handling
const Navigation = {
    init() {
        this.navbar = document.querySelector('nav');
        this.setupScrollBehavior();
        this.setupMobileMenu();
    },

    setupScrollBehavior() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Show/hide navbar on scroll
            if (currentScroll > lastScroll) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }
            
            // Add background when not at top
            if (currentScroll > 50) {
                this.navbar.classList.add('nav-scrolled');
            } else {
                this.navbar.classList.remove('nav-scrolled');
            }
            
            lastScroll = currentScroll;
        });
    },

    setupMobileMenu() {
        const menuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
        }
    }
};

// Project cards animation
const ProjectCards = {
    init() {
        this.cards = document.querySelectorAll('.project-card');
        this.setupHoverEffects();
    },

    setupHoverEffects() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
};

// Dark mode handling
const DarkMode = {
    init() {
        this.button = document.querySelector('.dark-mode-toggle');
        this.setupToggle();
        this.checkPreference();
    },

    setupToggle() {
        if (this.button) {
            this.button.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                this.savePreference();
            });
        }
    },

    checkPreference() {
        const darkModeOn = localStorage.getItem('darkMode') === 'true';
        if (darkModeOn) {
            document.documentElement.classList.add('dark');
        }
    },

    savePreference() {
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
    }
};

// Smooth scroll handling
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
};

// Page animations
const PageAnimations = {
    init() {
        this.setupScrollTriggers();
        this.animateHero();
    },

    setupScrollTriggers() {
        gsap.from('.project-card', {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#projects',
                start: 'top center'
            }
        });

        gsap.from('.knowledge-item', {
            duration: 1,
            x: -50,
            opacity: 0,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#knowledge',
                start: 'top center'
            }
        });
    },

    animateHero() {
        const tl = gsap.timeline();
        tl.from('.hero-title', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-buttons', {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5');
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
    ProjectCards.init();
    DarkMode.init();
    SmoothScroll.init();
    PageAnimations.init();
});