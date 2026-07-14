document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 72; // navbar height
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Contact form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('.form-submit');
            const original = btn.textContent;
            btn.textContent = 'Sending…';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = '✓ Message Sent!';
                btn.style.background = '#17dec3';
                btn.style.color = '#000';
                setTimeout(() => {
                    btn.textContent = original;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }, 1200);
        });
    }

    // Fade-in on scroll (Intersection Observer)
    const animItems = document.querySelectorAll(
        '.service-card, .why-card, .team-member-card, .stat-block, .about-feature'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animItems.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
        observer.observe(el);
    });
});
