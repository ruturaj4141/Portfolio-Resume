// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect and fixed position
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scrolled')) {
        // Scrolling down
        navbar.classList.remove('scrolled');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scrolled')) {
        // Scrolling up
        navbar.classList.add('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Add fade-in animation to sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Add animation to grid items
            const gridItems = entry.target.querySelectorAll('.skill-category, .stat-item, .education-item, .experience-item, .certification-item');
            gridItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});

// Add hover effects
const hoverEffects = document.querySelectorAll('.skill-category, .stat-item, .education-item, .experience-item, .certification-item');

hoverEffects.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Add animation to profile image
document.querySelector('.profile-image img').addEventListener('mouseenter', () => {
    gsap.to('.profile-image img', {
        scale: 1.05,
        duration: 0.3
    });
});

// Add animation to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Add animation to social links
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scale: 1.2,
            duration: 0.3
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Add animation to footer links
const footerLinks = document.querySelectorAll('.footer-section a');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            x: 10,
            duration: 0.3
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            x: 0,
            duration: 0.3
        });
    });
});

// Add typing animation to hero text
const typedText = document.querySelector('.hero h2');
const text = typedText.textContent;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typedText.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Add scroll progress indicator
const progress = document.createElement('div');
progress.className = 'scroll-progress';
document.body.appendChild(progress);

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progress.style.width = `${scrollPercent}%`;
});

// Add copy email functionality
document.querySelector('.email').addEventListener('click', () => {
    navigator.clipboard.writeText('ruturajkhansole@gmail.com').then(() => {
        const email = document.querySelector('.email');
        const originalText = email.textContent;
        email.textContent = 'Copied!';
        setTimeout(() => {
            email.textContent = originalText;
        }, 2000);
    });
});

// Add AOS animations
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Add animation to navbar links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const after = link.querySelector('::after');
        if (after) {
            after.style.width = '100%';
        }
    });
    
    link.addEventListener('mouseleave', () => {
        const after = link.querySelector('::after');
        if (after) {
            after.style.width = '0';
        }
    });
});

// Add animation to stats
const stats = document.querySelectorAll('.stat-item h3');
stats.forEach(stat => {
    stat.addEventListener('mouseenter', () => {
        gsap.to(stat, {
            scale: 1.2,
            duration: 0.3
        });
    });
    
    stat.addEventListener('mouseleave', () => {
        gsap.to(stat, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Add animation to skill list items
const skillItems = document.querySelectorAll('.skill-category li');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            x: 10,
            duration: 0.3
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            duration: 0.3
        });
    });
});

// Add animation to footer sections
const footerSections = document.querySelectorAll('.footer-section');
footerSections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        gsap.to(section, {
            y: -5,
            duration: 0.3
        });
    });
    
    section.addEventListener('mouseleave', () => {
        gsap.to(section, {
            y: 0,
            duration: 0.3
        });
    });
});

// Add animation to contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        gsap.to(contactForm, {
            y: -20,
            duration: 0.3,
            onComplete: () => {
                // Add your form submission logic here
                contactForm.reset();
                gsap.to(contactForm, {
                    y: 0,
                    duration: 0.3
                });
            }
        });
    });
}
