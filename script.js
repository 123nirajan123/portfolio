// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.15)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Mobile menu toggle
const createMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.createElement('div');
    burger.className = 'burger';
    burger.innerHTML = `
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    `;
    
    document.querySelector('.nav-content').appendChild(burger);

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
};

// Initialize mobile menu if screen width is less than 768px
if (window.innerWidth < 768) {
    createMobileMenu();
}

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    .burger {
        display: none;
        cursor: pointer;
        padding: 10px;
    }
    
    .burger .line {
        width: 25px;
        height: 3px;
        background-color: var(--primary-color);
        margin: 5px 0;
        transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
        .burger {
            display: block;
        }
        
        .nav-links {
            display: none;
        }
        
        .nav-links.active {
            display: flex;
        }
        
        .burger.active .line:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .burger.active .line:nth-child(2) {
            opacity: 0;
        }
        
        .burger.active .line:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

document.head.appendChild(style);

// Typing animation for hero section
const heroText = document.querySelector('.hero p');
const text = heroText.textContent;
heroText.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
};

// Start typing animation when page loads
window.addEventListener('load', typeWriter);

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
}); 
