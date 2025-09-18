// js/main.js

// Custom Cursor
document.addEventListener('DOMContentLoaded', function() {
    // Only show custom cursor on larger screens
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        document.body.appendChild(cursor);
        
        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'cursor-follower';
        document.body.appendChild(cursorFollower);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        document.addEventListener('mousedown', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });
        
        document.addEventListener('mouseup', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
        
        // Hide cursor when leaving the window
        document.addEventListener('mouseleave', function() {
            cursor.style.opacity = '0';
            cursorFollower.style.opacity = '0';
        });
        
        // Show cursor when entering the window
        document.addEventListener('mouseenter', function() {
            cursor.style.opacity = '1';
            cursorFollower.style.opacity = '1';
        });
    }
});



// Set default language
let currentLanguage = localStorage.getItem('language') || 'ar';

// Change language function
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(el => {
        if (lang === 'ar') {
            el.textContent = el.getAttribute('data-ar');
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            el.textContent = el.getAttribute('data-en');
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
        }
    });
    // Update the language toggle button text
    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = lang === 'ar' ? 'AR' : 'EN';
    }

    // Store the selected language in localStorage
    localStorage.setItem('language', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage(currentLanguage);
});

// Update language switch buttons
document.getElementById('languageDropdown').innerHTML = `
    <a class="dropdown-item" href="#" onclick="changeLanguage('en')">English</a>
    <a class="dropdown-item" href="#" onclick="changeLanguage('ar')">العربية</a>
`;

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (!nameInput.value.trim()) {
                nameInput.classList.add('is-invalid');
                isValid = false;
            } else {
                nameInput.classList.remove('is-invalid');
            }
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
            }
            
            if (!messageInput.value.trim()) {
                messageInput.classList.add('is-invalid');
                isValid = false;
            } else {
                messageInput.classList.remove('is-invalid');
            }
            
            if (isValid) {
                // Here you would normally submit the form
                // For demo purposes, we'll just show a success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-3';
                successMessage.textContent = currentLanguage === 'en' ? 
                    'Thank you for your message! We will get back to you soon.' : 
                    'شكراً لرسالتك! سنتواصل معك قريباً.';
                
                contactForm.appendChild(successMessage);
                contactForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
});

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    // Show/hide custom cursor based on screen size
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth <= 768 && cursor) {
        cursor.remove();
        cursorFollower.remove();
    } else if (window.innerWidth > 768 && !cursor) {
        // Reinitialize cursor if needed
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        document.body.appendChild(newCursor);
        
        const newCursorFollower = document.createElement('div');
        newCursorFollower.className = 'cursor-follower';
        document.body.appendChild(newCursorFollower);
    }

    // Initialize AOS with responsive handling
    if (window.innerWidth > 768) {
        AOS.init({
            duration: 1000,
            once: true
        });
    } else {
        AOS.init({
            disable: true // Disable AOS for smaller screens
        });
    }
});

// Initialize AOS with responsive handling
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) {
        AOS.init({
            duration: 1000,
            once: true
        });
    } else {
        AOS.init({
            disable: true // Disable AOS for smaller screens
        });
    }
});