// Personal Website JavaScript

// Project Data
const projectsData = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations and interactive elements.",
        tags: ["design", "coding"],
        category: ["design", "coding"],
        icon: "💻",
        links: {
            demo: "#",
            github: "#",
            image:"photos/personal patfolio.png"
        }
    },
    {
        id: 2,
        title: "Coffee Shop Finder App",
        description: "A mobile-first web app that helps users discover local coffee shops with ratings, reviews, and location-based recommendations.",
        tags: ["coding", "hobby"],
        category: ["coding", "hobby"],
        icon: "☕",
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        id: 3,
        title: "Brand Identity Design",
        description: "Complete brand identity package for a local startup including logo design, color palette, and brand guidelines.",
        tags: ["design"],
        category: ["design"],
        icon: "🎨",
        links: {
            behance: "#",
            dribbble: "#"
        }
    },
    {
        id: 4,
        title: "Street Photography Series",
        description: "A collection of candid street photography capturing the essence of urban life and human connections in the city.",
        tags: ["photography"],
        category: ["photography"],
        icon: "📸",
        links: {
            instagram: "#",
            flickr: "#"
        }
    },
    {
        id: 5,
        title: "Task Management Dashboard",
        description: "A clean and intuitive dashboard for managing daily tasks and projects with drag-and-drop functionality.",
        tags: ["coding", "design"],
        category: ["coding", "design"],
        icon: "📋",
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        id: 6,
        title: "Guitar Learning Journey",
        description: "Documenting my guitar learning progress with video tutorials, practice logs, and song covers.",
        tags: ["hobby"],
        category: ["hobby"],
        icon: "🎸",
        links: {
            youtube: "#",
            blog: "#"
        }
    },
    {
        id: 7,
        title: "Plant Care Mobile App",
        description: "A mobile app concept for plant enthusiasts to track watering schedules, growth progress, and care tips.",
        tags: ["design", "hobby"],
        category: ["design", "hobby"],
        icon: "🙂‍↕️",
        links: {
            figma: "#",
            prototype: "#"
        }
    },
    {
        id: 8,
        title: "Nature Photography",
        description: "Landscape and nature photography showcasing the beauty of national parks and outdoor adventures.",
        tags: ["photography"],
        category: ["photography"],
        icon: "🏔️",
        links: {
            instagram: "#",
            prints: "#"
        }
    }
];

// Gallery Data
const galleryData = [
    {
        id: 1,
        title: "Golden Hour",
        description: "A warm pic captured during golden hour",
        category: "photography",
        image: "photos/sunrise.jpg"
    },
    {
        id: 2,
        title: "banner design",
        description: "banner for nail palour",
        category: "design",
        image: "photos/project.png"
    },
    {
        id: 3,
        title: "beatiful scenery",
        description: "Breathtaking mountain vista at sunrise",
        category: "travel",
        image: "photos/nairobi.jpg"
    },
    {
        id: 4,
        title: "failed hobby",
        description: "learning how to crochet",
        category: "lifestyle",
        image: "photos/crochet.jpg"
    },
    {
        id: 5,
        title: "social media post",
        description: "for my designing business stripes",
        category: "design",
        image: "photos/stripes.png"
    },
   
   
   
   
   
   
    {
        id: 6,
        title: "album cover",
        description: "me being in my delulu world where i'm a superstar",
        category: "photography",
        image: "photos/album cover.jpg"
    },
    {
        id: 7,
        title: "kxx",
        description: "I was angry beacuse i thought y'all were staring at my bumm",
        category: "travel",
        image: "photos/overlooking kicc.jpg"
    },
    {
        id: 8,
        title: "ootd for school",
        description: "",
        category: "lifestyle",
        image: "photos/prof.jpg"
    },
    {
        id: 9,
        title: "banner for stripes",
        description: "roll up banner design for stripes",
        category: "design",
        image: "photos/stripes2.png"
    },
    {
        id: 10,
        title: "City Architecture",
        description: "Modern architecture photography",
        category: "photography",
        image: "photos/views of nairobi.jpg"
    },
    {
        id: 11,
        title: "Hiking adventure",
        description: "came across a waterfall while hiking",
        category: "travel",
        image: "photos/waterfall.jpg"
    },
    {
        id: 12,
        title: "on route to class",
        description: "",
        category: "lifestyle",
        image: "photos/lift.jpg"
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('themeToggle');
const projectsGrid = document.getElementById('projectsGrid');
const galleryGrid = document.getElementById('galleryGrid');
const galleryModal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// State
let currentFilter = 'all';
let currentGalleryFilter = 'all';
let displayedProjects = 6;
let currentImageIndex = 0;
let filteredGalleryData = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTheme();
    initializeScrollAnimations();
    initializeProjects();
    initializeGallery();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeInteractiveElements();
});

// Navigation Functions
function initializeNavigation() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Active link highlighting
    window.addEventListener('scroll', updateActiveNavLink);
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Theme Functions
function initializeTheme() {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add transition effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll(
        '.greeting, .bio-section, .fun-facts, .section-header, .project-card, .gallery-item, .contact-method'
    );
    
    animatedElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
    
    // Special animations for specific elements
    const leftElements = document.querySelectorAll('.about-text');
    leftElements.forEach(element => {
        element.classList.add('slide-in-left');
        observer.observe(element);
    });
    
    const rightElements = document.querySelectorAll('.about-visual, .contact-form-container');
    rightElements.forEach(element => {
        element.classList.add('slide-in-right');
        observer.observe(element);
    });
}

// Projects Functions
function initializeProjects() {
    renderProjects();
    initializeProjectFilters();
    initializeLoadMore();
}

function renderProjects() {
    const filteredProjects = currentFilter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category.includes(currentFilter));
    
    const projectsToShow = filteredProjects.slice(0, displayedProjects);
    
    projectsGrid.innerHTML = projectsToShow.map(project => `
        <div class="project-card" data-category="${project.category.join(' ')}" data-id="${project.id}">
            <div class="project-image">
                ${project.icon}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${Object.entries(project.links).map(([key, url]) => 
                        `<a href="${url}" class="project-link" target="_blank">${key}</a>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Update load more button visibility
    if (projectsToShow.length >= filteredProjects.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
    
    // Add hover animations
    addProjectHoverEffects();
}

function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter
            currentFilter = this.dataset.filter;
            displayedProjects = 6; // Reset displayed count
            
            // Re-render projects with animation
            animateProjectsChange();
        });
    });
}

function animateProjectsChange() {
    // Fade out current projects
    const currentProjects = document.querySelectorAll('.project-card');
    currentProjects.forEach((project, index) => {
        setTimeout(() => {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
        }, index * 50);
    });
    
    // Render new projects after animation
    setTimeout(() => {
        renderProjects();
        
        // Fade in new projects
        const newProjects = document.querySelectorAll('.project-card');
        newProjects.forEach((project, index) => {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
}

function initializeLoadMore() {
    loadMoreBtn.addEventListener('click', function() {
        displayedProjects += 6;
        renderProjects();
        
        // Smooth scroll to new content
        setTimeout(() => {
            const newProjects = document.querySelectorAll('.project-card');
            if (newProjects.length > displayedProjects - 6) {
                newProjects[displayedProjects - 6].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }, 100);
    });
}

function addProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = 'var(--shadow-heavy)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-light)';
        });
    });
}

// Gallery Functions
function initializeGallery() {
    renderGallery();
    initializeGalleryFilters();
    initializeGalleryModal();
}

function renderGallery() {
    filteredGalleryData = currentGalleryFilter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === currentGalleryFilter);
    
    galleryGrid.innerHTML = filteredGalleryData.map((item, index) => `
        <div class="gallery-item" data-category="${item.category}" data-index="${index}">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click listeners to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openGalleryModal(index));
    });
}

function initializeGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gallery-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter
            currentGalleryFilter = this.dataset.category;
            
            // Re-render gallery with animation
            animateGalleryChange();
        });
    });
}

function animateGalleryChange() {
    // Fade out current items
    const currentItems = document.querySelectorAll('.gallery-item');
    currentItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
        }, index * 30);
    });
    
    // Render new items after animation
    setTimeout(() => {
        renderGallery();
        
        // Fade in new items
        const newItems = document.querySelectorAll('.gallery-item');
        newItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, index * 50);
        });
    }, 200);
}

function initializeGalleryModal() {
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    modalClose.addEventListener('click', closeGalleryModal);
    modalOverlay.addEventListener('click', closeGalleryModal);
    modalPrev.addEventListener('click', showPreviousImage);
    modalNext.addEventListener('click', showNextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (galleryModal.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeGalleryModal();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
}

function openGalleryModal(index) {
    currentImageIndex = index;
    updateModalContent();
    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    galleryModal.classList.remove('active');
    document.body.style.overflow = '';
}

function showPreviousImage() {
    currentImageIndex = currentImageIndex > 0 
        ? currentImageIndex - 1 
        : filteredGalleryData.length - 1;
    updateModalContent();
}

function showNextImage() {
    currentImageIndex = currentImageIndex < filteredGalleryData.length - 1 
        ? currentImageIndex + 1 
        : 0;
    updateModalContent();
}

function updateModalContent() {
    const currentItem = filteredGalleryData[currentImageIndex];
    modalImage.src = currentItem.image;
    modalImage.alt = currentItem.title;
    modalTitle.textContent = currentItem.title;
    modalDescription.textContent = currentItem.description;
}

// Contact Form Functions
function initializeContactForm() {
    contactForm.addEventListener('submit', handleFormSubmission);
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validate form
    if (!validateForm(data)) {
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showSuccessMessage();
        
        // Save to localStorage (optional)
        localStorage.setItem('lastContactSubmission', JSON.stringify({
            ...data,
            timestamp: new Date().toISOString()
        }));
        
    }, 2000);
}

function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.subject || data.subject.trim().length < 3) {
        errors.push('Please enter a subject');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message (at least 10 characters)');
    }
    
    if (errors.length > 0) {
        showFormErrors(errors);
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormErrors(errors) {
    // Remove existing error messages
    const existingErrors = document.querySelectorAll('.form-error');
    existingErrors.forEach(error => error.remove());
    
    // Create error container
    const errorContainer = document.createElement('div');
    errorContainer.className = 'form-error';
    errorContainer.style.cssText = `
        background: #fee;
        border: 1px solid #fcc;
        color: #c33;
        padding: var(--spacing-md);
        border-radius: 12px;
        margin-bottom: var(--spacing-lg);
    `;
    
    errorContainer.innerHTML = `
        <strong>Please correct the following errors:</strong>
        <ul style="margin: var(--spacing-sm) 0 0 var(--spacing-lg);">
            ${errors.map(error => `<li>${error}</li>`).join('')}
        </ul>
    `;
    
    // Insert error container at the top of the form
    contactForm.insertBefore(errorContainer, contactForm.firstChild);
    
    // Scroll to error
    errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showSuccessMessage() {
    successMessage.classList.add('show');
    
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 4000);
}

// Interactive Elements
function initializeInteractiveElements() {
    // Profile image interaction
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        profileImg.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }
    
    // Floating shapes interaction
    const floatingShapes = document.querySelectorAll('.floating-shape');
    floatingShapes.forEach(shape => {
        shape.addEventListener('click', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.5) rotate(180deg)';
            
            setTimeout(() => {
                this.style.animation = 'float 6s ease-in-out infinite';
                this.style.transform = '';
            }, 500);
        });
    });
    
    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.1) rotate(10deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Parallax Effect
function initializeParallaxEffects() {
    window.addEventListener('scroll', debounce(function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 10));
}

// Initialize parallax effects
document.addEventListener('DOMContentLoaded', function() {
    initializeParallaxEffects();
});

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('.gallery-item img, .profile-image img');
    images.forEach(img => {
        img.style.opacity = '0.5';
        img.style.transition = 'opacity 0.5s ease';
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', function() {
    initializeLazyLoading();
});

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        triggerEasterEgg();
        konamiCode = [];
    }
});

function triggerEasterEgg() {
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 100);
    }
    
    // Show special message
    const message = document.createElement('div');
    message.innerHTML = '🎉 You found the secret! 🎉';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: var(--font-size-3xl);
        font-weight: 700;
        color: var(--primary-color);
        z-index: 9999;
        animation: pulse 2s infinite;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        background: var(--background);
        padding: var(--spacing-xl);
        border-radius: 20px;
        box-shadow: var(--shadow-heavy);
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        document.body.removeChild(message);
    }, 3000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    const colors = ['🎉', '🎊', '✨', '🌟', '💫'];
    confetti.innerHTML = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.cssText = `
        position: fixed;
        top: -50px;
        left: ${Math.random() * window.innerWidth}px;
        font-size: var(--font-size-2xl);
        z-index: 9998;
        pointer-events: none;
        animation: fall 3s linear forwards;
    `;
    
    // Add falling animation
    const fallKeyframes = `
        @keyframes fall {
            to {
                transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('#fall-animation')) {
        const style = document.createElement('style');
        style.id = 'fall-animation';
        style.textContent = fallKeyframes;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        if (document.body.contains(confetti)) {
            document.body.removeChild(confetti);
        }
    }, 3000);
}

// Console Easter Egg
console.log(`
👋 Hey there, fellow developer!

Thanks for checking out my personal website. 
If you're curious about how something works or want to collaborate, 
feel free to reach out!

Try the Konami Code for a surprise! ↑↑↓↓←→←→BA

- Alex
`);