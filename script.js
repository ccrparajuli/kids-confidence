document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    
    // 1. Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Optional: Animate hamburger to X
        menuToggle.classList.toggle('is-active');
    });

    // 2. Scroll Reveal Animation
    const revealOnScroll = () => {
        const cards = document.querySelectorAll('.info-card, .highlight-card, .program-card');
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (cardTop < triggerPoint) {
                card.classList.add('show');
            }
        });
    };

    // Run on scroll
    window.addEventListener('scroll', revealOnScroll);
    // Run once on load
    revealOnScroll();

    // 3. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navList.classList.remove('active'); // Close menu on mobile after click
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});