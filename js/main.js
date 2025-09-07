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

// Language Translation
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_courses: "Courses",
        nav_contact: "Contact",
        
        hero_title: "Excellence in Coffee Consulting & Training",
        hero_subtitle: "Empowering coffee businesses with expert knowledge and innovative solutions",
        hero_btn1: "Our Services",
        hero_btn2: "Contact Us",
        
        about_title: "About Coffeemetry",
        about_text1: "Coffeemetry is a newly established startup company founded in 2025 and headquartered in Amman, Jordan. The company specializes in providing consulting services, professional barista training, and tailored solutions to help coffeehouses achieve sustainable growth and operational excellence.",
        about_text2: "We aim to bridge the gap between passion for coffee and successful business practices, empowering coffee entrepreneurs and professionals with the knowledge and skills to thrive in a competitive market.",
        
        vision_title: "Our Vision",
        vision_text: "To become the leading coffee consulting and training hub in the Middle East, shaping the future of coffee culture and business growth.",
        
        mission_title: "Our Mission",
        mission_text: "We are committed to elevating the standards of the coffee industry by offering innovative training, expert consulting, and customized strategies that empower coffeehouses and baristas to achieve excellence, sustainability, and long-term success.",
        
        values_title: "Our Core Values",
        value_excellence: "Excellence",
        value_excellence_text: "Delivering the highest quality consulting and training standards.",
        value_passion: "Passion",
        value_passion_text: "Sharing a genuine love for coffee and coffeehouse culture.",
        value_integrity: "Integrity",
        value_integrity_text: "Building trust through transparency and honest practices.",
        value_innovation: "Innovation",
        value_innovation_text: "Introducing creative solutions and strategies for growth.",
        value_sustainability: "Sustainability",
        value_sustainability_text: "Encouraging environmentally and socially responsible practices.",
        
        services_title: "Our Services",
        service_consulting: "Consulting for Coffeehouses",
        service_consulting_text: "Business growth strategies, operational efficiency, and customer experience enhancement.",
        service_training: "Barista Training Programs",
        service_training_text: "Hands-on workshops and professional training tailored to all skill levels.",
        service_menu: "Menu Development & Innovation",
        service_menu_text: "Crafting unique coffee experiences through creative beverage design.",
        service_quality: "Quality Control & Standards",
        service_quality_text: "Implementing systems to ensure consistency and excellence.",
        service_research: "Market Research & Growth Planning",
        service_research_text: "Guiding businesses with data-driven insights for expansion.",
        
        courses_title: "Our Courses",
        course_btn: "Learn More",
        view_all_courses: "View All Courses",
        view_all_services: "View All Services",
        
        contact_title: "Contact Us",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_subject: "Subject",
        contact_message: "Message",
        contact_btn: "Send Message",
        contact_location: "Amman, Jordan",
        contact_form_title: "Send Us a Message",
        
        footer_about: "Coffeemetry is a leading coffee consulting and training hub in the Middle East, shaping the future of coffee culture and business growth.",
        footer_links: "Quick Links",
        footer_contact: "Contact Us",
        footer_rights: "All Rights Reserved."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "خدماتنا",
        nav_courses: "دوراتنا",
        nav_contact: "اتصل بنا",
        
        hero_title: "التميز في استشارات وتدريب القهوة",
        hero_subtitle: "تمكين أعمال القهوة بالمعرفة الخبيرة والحلول المبتكرة",
        hero_btn1: "خدماتنا",
        hero_btn2: "اتصل بنا",
        
        about_title: "عن كوفي ميتري",
        about_text1: "كوفي ميتري هي شركة ناشئة تم تأسيسها في عام 2025 ومقرها في عمان، الأردن. تتخصص الشركة في تقديم خدمات الاستشارات والتدريب الاحترافي للباريستا وحلول مخصصة لمساعدة مقاهي القهوة على تحقيق النمو المستمر والتميز التشغيلي.",
        about_text2: "نسعى لسد الفجوة بين شغف القهوة وممارسات الأعمال الناجحة، وتمكين رواد الأعمال والمحترفين في مجال القهوة بالمعرفة والمهارات اللازمة للازدهار في سوق تنافسي.",
        
        vision_title: "رؤيتنا",
        vision_text: "أن نصبح مركز الاستشارات والتدريب الرائد في مجال القهوة في الشرق الأوسط، ونشكل مستقبل ثقافة القهوة ونمو الأعمال.",
        
        mission_title: "مهمتنا",
        mission_text: "نحن ملتزمون برفع معايير صناعة القهوة من خلال تقديم تدريب مبتكر، واستشارات خبيرة، واستراتيجيات مخصصة تمكّن مقاهي القهوة والباريستا من تحقيق التميز والاستدامة والنجاح على المدى الطويل.",
        
        values_title: "قيمنا الأساسية",
        value_excellence: "التميز",
        value_excellence_text: "تقديم أعلى معايير الاستشارات والتدريب.",
        value_passion: "الشغف",
        value_passion_text: "مشاركة الحب الحقيقي للقهوة وثقافة المقاهي.",
        value_integrity: "النزاهة",
        value_integrity_text: "بناء الثقة من خلال الشفافية والممارسات الصادقة.",
        value_innovation: "الابتكار",
        value_innovation_text: "تقديم حلول واستراتيجيات إبداعية للنمو.",
        value_sustainability: "الاستدامة",
        value_sustainability_text: "تشجيع الممارسات المسؤولة بيئيًا واجتماعيًا.",
        
        services_title: "خدماتنا",
        service_consulting: "استشارات مقاهي القهوة",
        service_consulting_text: "استراتيجيات نمو الأعمال، والكفاءة التشغيلية، وتحسين تجربة العملاء.",
        service_training: "برامج تدريب الباريستا",
        service_training_text: "ورش عمل عملية وتدريب احترافي مصمم لجميع المستويات المهارية.",
        service_menu: "تطوير القائمة والابتكار",
        service_menu_text: "صياغة تجارب قهوة فريدة من خلال تصميم المشروبات الإبداعية.",
        service_quality: "مراقبة الجودة والمعايير",
        service_quality_text: "تطبيق أنظمة لضمان الاتساق والتميز.",
        service_research: "أبحاث السوق وتخطيط النمو",
        service_research_text: "توجيه الشركات برؤى قائمة على البيانات للتوسع.",
        
        courses_title: "دوراتنا",
        course_btn: "اعرف المزيد",
        view_all_courses: "عرض جميع الدورات",
        view_all_services: "عرض جميع الخدمات",
        
        contact_title: "اتصل بنا",
        contact_name: "اسمك",
        contact_email: "بريدك الإلكتروني",
        contact_subject: "الموضوع",
        contact_message: "الرسالة",
        contact_btn: "إرسال الرسالة",
        contact_location: "عمان، الأردن",
        contact_form_title: "أرسل لنا رسالة",
        
        footer_about: "كوفي ميتري هي مركز رائد لاستشارات وتدريب القهوة في الشرق الأوسط، تشكل مستقبل ثقافة القهوة ونمو الأعمال.",
        footer_links: "روابط سريعة",
        footer_contact: "اتصل بنا",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

// Set default language
let currentLanguage = localStorage.getItem('language') || 'en';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update current language indicator
    document.getElementById('current-lang').textContent = lang.toUpperCase();
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage(currentLanguage);
});

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
});