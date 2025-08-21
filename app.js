// Enhanced Kombino Website JavaScript with Complete Authentication and Checkout System

// Menu data with images
const menuData = [
    {
        id: 1,
        name: "Burger Bowl",
        category: "Main Course",
        type: "Protein Bowl",
        ingredients: "Grilled chicken/paneer, lettuce, onion, tomato, light yogurt sauce, roasted oats or baked potato wedges",
        calories: 350,
        protein: 30,
        carbs: 20,
        fats: 14,
        shelf_life: "1-2 days refrigerated",
        serving_instructions: "Serve room temp or microwave 20 sec",
        dietary_options: ["Non-Veg", "Vegetarian"],
        price_estimate: "₹199-249",
        price: 224,
        image: "https://pplx-res.cloudinary.com/image/upload/v1754966608/pplx_project_search_images/40406701df17111f193aae3d5a814e35f70431ec.png",
        bestseller: true
    },
    {
        id: 2,
        name: "Cinnamon Rolls (Healthy)",
        category: "Breakfast/Snacks",
        type: "Baked Good",
        ingredients: "Whole wheat flour, jaggery, cinnamon, yogurt, baking soda, low-fat milk, date-sweetened glaze",
        calories: 180,
        protein: 5,
        carbs: 26,
        fats: 4,
        shelf_life: "2 days in airtight container",
        serving_instructions: "Serve room temp or reheat",
        dietary_options: ["Vegetarian"],
        price_estimate: "₹89-119",
        price: 104,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305542/pplx_project_search_images/d0e27f9cefd86cc40fa35c73af5ec3810ac8df96.png"
    },
    {
        id: 3,
        name: "Egg White Muffins / Moong Dal Muffins",
        category: "Breakfast/Snacks",
        type: "Protein Muffins",
        ingredients: "Egg whites or moong dal batter, onion, capsicum, tomato, spices, baked in muffin tins",
        calories: 80,
        protein: 7,
        carbs: 6.5,
        fats: 2,
        shelf_life: "2 days refrigerated",
        serving_instructions: "Serve at room temp or reheat",
        dietary_options: ["Non-Veg", "Vegan"],
        price_estimate: "₹69-89",
        price: 79,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305542/pplx_project_search_images/d0e27f9cefd86cc40fa35c73af5ec3810ac8df96.png",
        healthy_choice: true
    },
    {
        id: 4,
        name: "Cold Chicken Wrap",
        category: "Main Course",
        type: "Wrap",
        ingredients: "Grilled chicken, multigrain roti, hung curd dip, lettuce, onions, cucumber",
        calories: 300,
        protein: 25,
        carbs: 22,
        fats: 10,
        shelf_life: "1-2 days refrigerated",
        serving_instructions: "Serve cold or at room temp",
        dietary_options: ["Non-Veg"],
        price_estimate: "₹179-209",
        price: 194,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305542/pplx_project_search_images/9a1dabfda96091c637f860bb6837bf24acc058e6.png"
    },
    {
        id: 5,
        name: "Baked Chicken Tenders",
        category: "Main Course",
        type: "Protein",
        ingredients: "Chicken breast, oats crust, garlic, paprika, yogurt marinade, baked",
        calories: 220,
        protein: 28,
        carbs: 9,
        fats: 7,
        shelf_life: "1 day best",
        serving_instructions: "Serve warm if possible",
        dietary_options: ["Non-Veg"],
        price_estimate: "₹199-229",
        price: 214,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305543/pplx_project_search_images/be507f4b1d6a187bb92b6020718ba140316b5db9.png"
    },
    {
        id: 6,
        name: "Paneer Nuggets",
        category: "Main Course",
        type: "Protein",
        ingredients: "Paneer cubes, multigrain crumb, yogurt marinade, baked or air-fried",
        calories: 150,
        protein: 10,
        carbs: 6,
        fats: 9,
        shelf_life: "1-2 days",
        serving_instructions: "Room temp or air fry 1 min before serving",
        dietary_options: ["Vegetarian"],
        price_estimate: "₹149-179",
        price: 164,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305543/pplx_project_search_images/d0a664ac6e844d309d989012c9178a01db7d3071.png"
    },
    {
        id: 7,
        name: "Paneer Veggie Power Sandwich",
        category: "Main Course",
        type: "Sandwich",
        ingredients: "Paneer, capsicum, onion, tomato, multigrain bread, Greek yogurt-mint spread",
        calories: 280,
        protein: 16,
        carbs: 26,
        fats: 10,
        shelf_life: "1 day",
        serving_instructions: "Serve room temp",
        dietary_options: ["Vegetarian"],
        price_estimate: "₹159-189",
        price: 174,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305542/pplx_project_search_images/9a1dabfda96091c637f860bb6837bf24acc058e6.png"
    },
    {
        id: 8,
        name: "Chickpea & Spinach Burger",
        category: "Main Course",
        type: "Burger",
        ingredients: "Boiled chickpeas, spinach, oats flour, spices, hung curd/hummus, whole wheat buns",
        calories: 310,
        protein: 14,
        carbs: 32,
        fats: 10,
        shelf_life: "Patty: 2 days",
        serving_instructions: "Toast and assemble fresh",
        dietary_options: ["Vegan", "Vegetarian"],
        price_estimate: "₹169-199",
        price: 184,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305543/pplx_project_search_images/be507f4b1d6a187bb92b6020718ba140316b5db9.png",
        vegan_choice: true
    },
    {
        id: 9,
        name: "Multigrain Base Veggie Pizza",
        category: "Main Course",
        type: "Pizza",
        ingredients: "Ragi/oats base, low-fat cheese, bell peppers, olives, corn, tomato sauce",
        calories: 250,
        protein: 12,
        carbs: 28,
        fats: 8,
        shelf_life: "1 day",
        serving_instructions: "Serve cold or reheat",
        dietary_options: ["Vegetarian"],
        price_estimate: "₹219-249",
        price: 234,
        image: "https://pplx-res.cloudinary.com/image/upload/v1754734195/pplx_project_search_images/8bc7e30c94fbf4bba29e3d953f7e1be3ea7473ed.png"
    },
    {
        id: 10,
        name: "Cucumber-Mint Cooler",
        category: "Beverages",
        type: "Fresh Juice",
        ingredients: "Cucumber juice, lemon, mint, honey, black salt",
        calories: 40,
        protein: 0,
        carbs: 10,
        fats: 0,
        shelf_life: "Must be freshly made",
        serving_instructions: "Serve cold",
        dietary_options: ["Vegan", "Vegetarian"],
        price_estimate: "₹59-79",
        price: 69,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305542/pplx_project_search_images/84822d47e680eb598c1cb7cc92228889015a3da8.png",
        refreshing: true
    },
    {
        id: 11,
        name: "Chia Lemonade",
        category: "Beverages",
        type: "Functional Drink",
        ingredients: "Lemon juice, soaked chia, mint, jaggery/honey",
        calories: 60,
        protein: 1,
        carbs: 12,
        fats: 2,
        shelf_life: "1 day",
        serving_instructions: "Shake well before serving",
        dietary_options: ["Vegan", "Vegetarian"],
        price_estimate: "₹69-89",
        price: 79,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305542/pplx_project_search_images/84822d47e680eb598c1cb7cc92228889015a3da8.png"
    },
    {
        id: 12,
        name: "Oats Banana Bites",
        category: "Snacks/Desserts",
        type: "Energy Bites",
        ingredients: "Mashed banana, oats, dark chocolate chips",
        calories: 90,
        protein: 2,
        carbs: 15,
        fats: 3,
        shelf_life: "2-3 days in airtight container",
        serving_instructions: "Serve room temp",
        dietary_options: ["Vegan", "Vegetarian"],
        price_estimate: "₹49-69",
        price: 59,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305542/pplx_project_search_images/72411af5f128a8a768b9692449986e3fb77b6421.png"
    },
    {
        id: 13,
        name: "Date-Walnut Truffles",
        category: "Snacks/Desserts",
        type: "Energy Balls",
        ingredients: "Dates, cocoa powder, walnuts (no sugar)",
        calories: 100,
        protein: 2,
        carbs: 14,
        fats: 5,
        shelf_life: "1 week",
        serving_instructions: "Serve room temp",
        dietary_options: ["Vegan", "Vegetarian"],
        price_estimate: "₹79-99",
        price: 89,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305542/pplx_project_search_images/72411af5f128a8a768b9692449986e3fb77b6421.png"
    },
    {
        id: 14,
        name: "Protein Wrap with Hummus",
        category: "Main Course",
        type: "Wrap",
        ingredients: "Multigrain roti, hummus, paneer/tofu, lettuce, carrot, cucumber",
        calories: 320,
        protein: 20,
        carbs: 25,
        fats: 12,
        shelf_life: "1-2 days",
        serving_instructions: "Best served room temp",
        dietary_options: ["Vegetarian", "Vegan"],
        price_estimate: "₹189-219",
        price: 204,
        image: "https://pplx-res.cloudinary.com/image/upload/v1755305542/pplx_project_search_images/9a1dabfda96091c637f860bb6837bf24acc058e6.png"
    }
];

// Application state
let cart = [];
let currentUser = null;
let currentCategoryFilter = 'all';
let currentDietaryFilter = 'all';
let isMenuOpen = false;

// Theme management functions - Default to dark theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kombinoTheme', theme);
    
    // Update theme toggle icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.textContent = '🌙';
        } else {
            themeIcon.textContent = '☀️';
        }
    }
    
    // Trigger custom event for theme change
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: theme } }));
    
    console.log(`Theme applied: ${theme}`);
}

function initTheme() {
    const saved = localStorage.getItem('kombinoTheme');
    // Default to dark theme as specified in requirements
    applyTheme(saved || 'dark');
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing theme and app...');
    
    // Initialize theme first
    initTheme();
    
    // Load user data
    loadUserData();
    
    // Show loading screen then initialize
    setTimeout(() => {
        hideLoadingScreen();
        initializeComponents();
    }, 1500);
});

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

function initializeComponents() {
    setupEventListeners();
    setupAnimations();
    renderMenu();
    updateCartDisplay();
    updateAuthUI();
    updateAllButtonText();
    setupParticles();
    initializeAOS();
    setupScrollEffects();
    setupCounterAnimations();
    
    console.log('All components initialized successfully');
}

// Update all button text to "Order Soon"
function updateAllButtonText() {
    // Update header button
    const headerBtn = document.querySelector('.header-actions .btn--primary');
    if (headerBtn && headerBtn.textContent.includes('Order')) {
        headerBtn.textContent = 'Order Soon';
    }
    
    // Update checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        const span = checkoutBtn.querySelector('span');
        if (span && span.textContent.includes('Order')) {
            span.textContent = 'Order Soon';
        }
    }
    
    console.log('Button text updated to "Order Soon"');
}

// Load user data from localStorage
function loadUserData() {
    const savedUser = localStorage.getItem('kombinoUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        console.log('User loaded:', currentUser.username);
    }
}

// Save user data to localStorage
function saveUserData() {
    if (currentUser) {
        localStorage.setItem('kombinoUser', JSON.stringify(currentUser));
    }
}

// Update authentication UI
function updateAuthUI() {
    const authBtn = document.querySelector('.auth-btn');
    if (authBtn) {
        if (currentUser) {
            authBtn.textContent = `Hi, ${currentUser.username}`;
            authBtn.onclick = () => signOut();
        } else {
            authBtn.textContent = 'Sign In';
            authBtn.onclick = () => showAuthModal('signin');
        }
    }
}

// Initialize AOS (Animate On Scroll)
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            offset: 100,
            once: true,
            mirror: false
        });
    }
}

// Setup scroll effects
function setupScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Header scroll effect
        if (header) {
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Setup counter animations
function setupCounterAnimations() {
    const observerOptions = {
        threshold: 0.7,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => observer.observe(item));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const numberElement = element.querySelector('.stat-number');
    if (!numberElement) return;
    
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            numberElement.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            numberElement.textContent = target;
        }
    };

    updateCounter();
}

// Setup particle system for hero background
function setupParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #2E8B57, #7CB342);
            border-radius: 50%;
            opacity: 0.3;
            pointer-events: none;
        `;
        
        particlesContainer.appendChild(particle);
        particles.push({
            element: particle,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1
        });
    }

    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > window.innerWidth) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > window.innerHeight) {
                particle.vy *= -1;
            }

            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

// Setup animations
function setupAnimations() {
    // Image lazy loading with error handling
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Theme toggle button
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            
            // Add visual feedback
            themeToggleBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                themeToggleBtn.style.transform = '';
            }, 150);
            
            showNotification(`Switched to ${newTheme} mode`, 'info');
        });
        console.log('Theme toggle event listener added');
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            nav.classList.toggle('open', isMenuOpen);
            menuToggle.classList.toggle('active', isMenuOpen);
        });
    }

    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.filter-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            categoryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategoryFilter = this.getAttribute('data-category');
            renderMenu();
        });
    });

    // Dietary filter buttons
    const dietaryButtons = document.querySelectorAll('.dietary-btn');
    dietaryButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            dietaryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentDietaryFilter = this.getAttribute('data-dietary');
            renderMenu();
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    // Authentication forms
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');
    const addressForm = document.getElementById('addressForm');
    
    if (signinForm) {
        signinForm.addEventListener('submit', handleSignIn);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignUp);
    }
    
    if (addressForm) {
        addressForm.addEventListener('submit', handleAddressSubmit);
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                scrollToSection(targetId);
            }
        });
    });

    // Header buttons - Update all to "Order Soon" and make functional
    document.querySelectorAll('.btn--primary').forEach(btn => {
        if (btn.textContent.includes('Order') || btn.textContent.includes('Explore')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if (btn.textContent.includes('Explore')) {
                    scrollToSection('menu');
                } else {
                    scrollToSection('menu');
                }
            });
        }
    });

    // Gallery lightbox effect
    setupGalleryLightbox();

    // Close modal on backdrop click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-backdrop')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                hideModal(modal.id);
            }
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal:not(.hidden)');
            openModals.forEach(modal => {
                hideModal(modal.id);
            });
        }
    });

    // Listen for theme changes to update particles
    document.addEventListener('themeChanged', function(e) {
        updateParticlesForTheme(e.detail.theme);
    });
    
    console.log('Event listeners setup completed');
}

// Update particles based on theme
function updateParticlesForTheme(theme) {
    const particles = document.querySelectorAll('#particles div');
    particles.forEach(particle => {
        if (theme === 'dark') {
            particle.style.background = 'linear-gradient(45deg, #2E8B57, #7CB342)';
            particle.style.opacity = '0.3';
        } else {
            particle.style.background = 'linear-gradient(45deg, #1B5E20, #2E8B57)';
            particle.style.opacity = '0.2';
        }
    });
}

// Authentication functions
function showAuthModal(type) {
    const authModal = document.getElementById('authModal');
    const authModalTitle = document.getElementById('authModalTitle');
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');
    
    if (type === 'signin') {
        authModalTitle.textContent = 'Sign In';
        signinForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else {
        authModalTitle.textContent = 'Sign Up';
        signinForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    }
    
    authModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideAuthModal() {
    const authModal = document.getElementById('authModal');
    authModal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleSignIn(e) {
    e.preventDefault();
    const username = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;
    
    // Simple validation - in real app, this would authenticate with server
    if (username && password) {
        currentUser = {
            username: username,
            email: username.includes('@') ? username : `${username}@example.com`
        };
        saveUserData();
        updateAuthUI();
        hideAuthModal();
        showNotification(`Welcome back, ${currentUser.username}!`, 'success');
    } else {
        showNotification('Please enter valid credentials', 'error');
    }
}

function handleSignUp(e) {
    e.preventDefault();
    const mobile = document.getElementById('signupMobile').value;
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Validation
    if (!mobile || !username || !email || !password) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (mobile.length < 10) {
        showNotification('Please enter a valid mobile number', 'error');
        return;
    }
    
    if (!email.includes('@gmail.com')) {
        showNotification('Please enter a valid Gmail address', 'error');
        return;
    }
    
    // Create user
    currentUser = {
        mobile: mobile,
        username: username,
        email: email,
        addresses: []
    };
    
    saveUserData();
    updateAuthUI();
    hideAuthModal();
    showNotification(`Account created successfully! Welcome, ${currentUser.username}!`, 'success');
    
    // Simulate account creation email
    simulateEmail('signup', {
        username: username,
        email: email,
        mobile: mobile
    });
}

function signOut() {
    currentUser = null;
    localStorage.removeItem('kombinoUser');
    updateAuthUI();
    showNotification('Signed out successfully', 'info');
}

// Gallery lightbox setup
function setupGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.gallery-overlay');
            
            if (img && overlay) {
                const title = overlay.querySelector('h4').textContent;
                const desc = overlay.querySelector('p').textContent;
                showImageLightbox(img.src, title, desc);
            }
        });
    });
}

// Image lightbox
function showImageLightbox(src, title, description) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="${src}" alt="${title}">
            <div class="lightbox-info">
                <h4>${title}</h4>
                <p>${description}</p>
            </div>
        </div>
    `;

    document.body.appendChild(lightbox);
    
    // Add styles dynamically based on theme
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;

    const backdrop = lightbox.querySelector('.lightbox-backdrop');
    backdrop.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(5px);
    `;

    const content = lightbox.querySelector('.lightbox-content');
    const bgColor = currentTheme === 'dark' ? '#1A2421' : '#D5E0DD';
    const textColor = currentTheme === 'dark' ? '#E6F1EE' : '#152018';
    
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: ${bgColor};
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    `;

    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: 16px;
        right: 16px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const img = lightbox.querySelector('img');
    img.style.cssText = `
        width: 100%;
        height: auto;
        max-height: 70vh;
        object-fit: cover;
    `;

    const info = lightbox.querySelector('.lightbox-info');
    info.style.cssText = `
        padding: 24px;
        text-align: center;
        color: ${textColor};
    `;

    // Close handlers
    const closeLightbox = () => {
        lightbox.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(lightbox)) {
                document.body.removeChild(lightbox);
            }
        }, 300);
    };

    closeBtn.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    
    document.addEventListener('keydown', escapeHandler);
}

// Form handlers
function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    
    // Simulate form submission
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    form.reset();
}

function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Check if user is signed in
    if (!currentUser) {
        showNotification('Please sign in to continue with your order', 'info');
        showAuthModal('signin');
        return;
    }
    
    // Show address modal
    showAddressModal();
}

function showAddressModal() {
    const addressModal = document.getElementById('addressModal');
    
    // Pre-fill with user's saved address if available
    if (currentUser && currentUser.addresses && currentUser.addresses.length > 0) {
        const savedAddress = currentUser.addresses[0];
        document.getElementById('customerName').value = savedAddress.name || currentUser.username;
        document.getElementById('customerPhone').value = savedAddress.phone || currentUser.mobile || '';
        document.getElementById('addressLine1').value = savedAddress.addressLine1 || '';
        document.getElementById('addressLine2').value = savedAddress.addressLine2 || '';
        document.getElementById('customerCity').value = savedAddress.city || 'Tricity';
        document.getElementById('customerPincode').value = savedAddress.pincode || '';
        document.getElementById('customerLandmark').value = savedAddress.landmark || '';
    } else if (currentUser) {
        document.getElementById('customerName').value = currentUser.username;
        document.getElementById('customerPhone').value = currentUser.mobile || '';
    }
    
    // Update order summary
    updateOrderSummary();
    
    addressModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideAddressModal() {
    const addressModal = document.getElementById('addressModal');
    addressModal.classList.add('hidden');
    document.body.style.overflow = '';
}

function updateOrderSummary() {
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryTotal = document.getElementById('summaryTotal');
    
    if (!orderSummaryItems || !summarySubtotal || !summaryTotal) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + 50; // Delivery fee
    
    // Update items
    orderSummaryItems.innerHTML = cart.map(item => `
        <div class="summary-item">
            <div>
                <div class="summary-item-name">${item.name}</div>
                <div class="summary-item-details">Qty: ${item.quantity} × ₹${item.price}</div>
            </div>
            <div class="summary-item-price">₹${item.price * item.quantity}</div>
        </div>
    `).join('');
    
    // Update totals
    summarySubtotal.textContent = subtotal;
    summaryTotal.textContent = total;
}

function handleAddressSubmit(e) {
    e.preventDefault();
    
    const addressData = {
        name: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        addressLine1: document.getElementById('addressLine1').value,
        addressLine2: document.getElementById('addressLine2').value,
        city: document.getElementById('customerCity').value,
        pincode: document.getElementById('customerPincode').value,
        landmark: document.getElementById('customerLandmark').value
    };
    
    // Validate required fields
    if (!addressData.name || !addressData.phone || !addressData.addressLine1 || !addressData.city || !addressData.pincode) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Save address to user profile
    if (currentUser) {
        if (!currentUser.addresses) {
            currentUser.addresses = [];
        }
        
        // Replace first address or add new one
        currentUser.addresses[0] = addressData;
        saveUserData();
    }
    
    // Process order
    processOrder(addressData);
}

function processOrder(addressData) {
    const orderData = {
        orderId: 'KMB' + Date.now(),
        items: [...cart],
        address: addressData,
        subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        deliveryFee: 50,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 50,
        timestamp: new Date().toISOString(),
        user: currentUser
    };
    
    // Simulate order processing
    hideAddressModal();
    hideModal('cartModal');
    
    // Show success message as specified in requirements
    showNotification('Thank you For Choosing Kombino to take care of your health', 'success');
    
    // Simulate email to business and customer
    simulateEmail('order', orderData);
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    
    console.log('Order processed:', orderData);
}

function simulateEmail(type, data) {
    // Simulate email notifications
    if (type === 'signup') {
        console.log(`Email sent to kombinofoods@gmail.com and preetinder18033@gmail.com:`);
        console.log(`New user signup: ${data.username} (${data.email}, ${data.mobile})`);
    } else if (type === 'order') {
        console.log(`Order confirmation email sent to kombinofoods@gmail.com and preetinder18033@gmail.com:`);
        console.log(`Order ${data.orderId} - Total: ₹${data.total}`);
        console.log(`Customer: ${data.user.username} (${data.user.email})`);
        console.log(`Address: ${data.address.addressLine1}, ${data.address.city} - ${data.address.pincode}`);
        console.log(`Items:`, data.items.map(item => `${item.name} x${item.quantity}`).join(', '));
    }
}

// Hide modal helper
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Notification system with theme support
function showNotification(message, type = 'info') {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    let bgColor = '#333';
    if (type === 'success') bgColor = '#2E8B57';
    if (type === 'error') bgColor = '#ff4444';
    if (type === 'info') bgColor = currentTheme === 'dark' ? '#1A2421' : '#D5E0DD';
    
    const textColor = currentTheme === 'dark' ? '#E6F1EE' : (type === 'info' ? '#152018' : 'white');
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: ${bgColor};
        color: ${textColor};
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        z-index: 5000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        max-width: 300px;
        font-weight: 500;
        border: 2px solid ${type === 'success' ? '#7CB342' : 'transparent'};
    `;

    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Menu rendering with proper image handling
function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    let filteredItems = menuData;

    // Apply filters
    if (currentCategoryFilter !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentCategoryFilter);
    }

    if (currentDietaryFilter !== 'all') {
        filteredItems = filteredItems.filter(item => 
            item.dietary_options.includes(currentDietaryFilter)
        );
    }

    // Clear grid with animation
    menuGrid.style.opacity = '0';
    setTimeout(() => {
        menuGrid.innerHTML = '';

        if (filteredItems.length === 0) {
            menuGrid.innerHTML = `
                <div class="no-items-message">
                    <div class="no-items-icon">🔍</div>
                    <h3>No items found</h3>
                    <p>Try adjusting your filters to see more options.</p>
                </div>
            `;
        } else {
            filteredItems.forEach((item, index) => {
                const menuItemElement = createMenuItemElement(item);
                menuItemElement.style.animationDelay = `${index * 0.1}s`;
                menuGrid.appendChild(menuItemElement);
            });
        }

        menuGrid.style.opacity = '1';
    }, 200);
}

// Create menu item element with proper image loading and "Order Soon" text
function createMenuItemElement(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.style.animation = 'fadeInUp 0.6s ease forwards';

    const badges = [];
    if (item.bestseller) badges.push('Bestseller');
    if (item.healthy_choice) badges.push('Healthy Choice');
    if (item.vegan_choice) badges.push('Vegan');
    if (item.refreshing) badges.push('Refreshing');

    menuItem.innerHTML = `
        <div class="menu-item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="image-placeholder" style="display: none;">
                <div class="placeholder-icon">🍽️</div>
                <span>${item.type}</span>
            </div>
            ${badges.length > 0 ? `<div class="menu-item-badge">${badges[0]}</div>` : ''}
        </div>
        <div class="menu-item-content">
            <div class="menu-item-header">
                <h3 class="menu-item-title">${item.name}</h3>
                <span class="menu-item-category">${item.category}</span>
            </div>
            <p class="menu-item-ingredients">${item.ingredients}</p>
            <div class="nutrition-info">
                <div class="nutrition-grid">
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.calories}</span>
                        <span class="nutrition-label">Calories</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.protein}g</span>
                        <span class="nutrition-label">Protein</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.carbs}g</span>
                        <span class="nutrition-label">Carbs</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.fats}g</span>
                        <span class="nutrition-label">Fats</span>
                    </div>
                </div>
            </div>
            <div class="dietary-tags">
                ${item.dietary_options.map(option => `<span class="dietary-tag">${option}</span>`).join('')}
            </div>
            <div class="menu-item-footer">
                <span class="menu-item-price">₹${item.price}</span>
                <button class="add-to-cart-btn" data-item-id="${item.id}">
                    <span class="btn-text">Order Soon</span>
                    <span class="btn-arrow">→</span>
                </button>
            </div>
        </div>
    `;

    // Add event listener to the add to cart button
    const addToCartBtn = menuItem.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => addToCart(item.id));

    return menuItem;
}

// Cart functionality
function addToCart(itemId) {
    const item = menuData.find(item => item.id === itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartDisplay();
    showAddToCartAnimation(itemId);
    showNotification(`${item.name} added to cart!`, 'success');
}

function showAddToCartAnimation(itemId) {
    const buttons = document.querySelectorAll(`[data-item-id="${itemId}"]`);
    buttons.forEach(button => {
        const textSpan = button.querySelector('.btn-text');
        const originalText = textSpan.textContent;
        
        button.classList.add('added');
        textSpan.textContent = 'Added!';
        
        setTimeout(() => {
            button.classList.remove('added');
            textSpan.textContent = originalText;
        }, 1500);
    });
}

function removeFromCart(itemId) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    showNotification(`Item removed from cart`, 'info');
}

function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    const fabCount = document.getElementById('fabCount');
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartCount || !cartItems || !cartSubtotal || !cartTotal) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 50;
    const total = subtotal + deliveryFee;

    // Update counters
    cartCount.textContent = totalItems;
    if (fabCount) {
        fabCount.textContent = totalItems;
        fabCount.classList.toggle('show', totalItems > 0);
    }

    // Update totals
    cartSubtotal.textContent = subtotal;
    cartTotal.textContent = total;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <h4>Your cart is empty</h4>
                <p>Add some delicious healthy meals to get started!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₹${item.price} each</div>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `).join('');
    }
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (!cartModal) return;
    
    cartModal.classList.toggle('hidden');
    
    if (!cartModal.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed header
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;
window.scrollToSection = scrollToSection;
window.showAuthModal = showAuthModal;
window.hideAuthModal = hideAuthModal;
window.hideAddressModal = hideAddressModal;

// Performance optimization
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Load non-critical features
        console.log('Kombino: Enhanced features with authentication and checkout loaded');
    });
}

console.log('Kombino: Complete endorsements website with authentication and checkout loaded successfully! 🌿');