// Enhanced Kombino Website JavaScript with Authentication System

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
let currentCategoryFilter = 'all';
let currentDietaryFilter = 'all';
let isMenuOpen = false;
let isAuthenticated = false;
let currentUser = null;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    // Show loading screen
    setTimeout(() => {
        hideLoadingScreen();
        initializeComponents();
    }, 1500);
}

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
    setupParticles();
    initializeAOS();
    setupScrollEffects();
    setupCounterAnimations();
    setupAuthEventListeners();
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
    let lastScrollY = window.scrollY;

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

        lastScrollY = currentScrollY;
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

    // Newsletter form
    const newsletterBtn = document.querySelector('.newsletter-btn');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', handleNewsletterSignup);
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Gallery lightbox effect
    setupGalleryLightbox();

    // Close modal on backdrop click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-backdrop')) {
            const cartModal = document.getElementById('cartModal');
            const authModal = document.getElementById('authModal');
            
            if (cartModal && !cartModal.classList.contains('hidden')) {
                toggleCart();
            }
            if (authModal && !authModal.classList.contains('hidden')) {
                hideAuthModal();
            }
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const cartModal = document.getElementById('cartModal');
            const authModal = document.getElementById('authModal');
            
            if (cartModal && !cartModal.classList.contains('hidden')) {
                toggleCart();
            }
            if (authModal && !authModal.classList.contains('hidden')) {
                hideAuthModal();
            }
        }
    });
}

// Authentication Event Listeners
function setupAuthEventListeners() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const addressForm = document.getElementById('addressForm');

    if (signInForm) {
        signInForm.addEventListener('submit', handleSignIn);
    }
    
    if (signUpForm) {
        signUpForm.addEventListener('submit', handleSignUp);
    }
    
    if (addressForm) {
        addressForm.addEventListener('submit', handleAddressSubmission);
    }
}

// Authentication Functions
function showAuthModal() {
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Reset to sign in form
        switchToSignIn();
    }
}

function hideAuthModal() {
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Reset forms
        resetAuthForms();
    }
}

function switchToSignIn() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const addressForm = document.getElementById('addressForm');
    const authSuccess = document.getElementById('authSuccess');
    const modalTitle = document.getElementById('authModalTitle');
    
    if (modalTitle) modalTitle.textContent = 'Sign In to Kombino';
    
    signInForm?.classList.remove('hidden');
    signUpForm?.classList.add('hidden');
    addressForm?.classList.add('hidden');
    authSuccess?.classList.add('hidden');
}

function switchToSignUp() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const addressForm = document.getElementById('addressForm');
    const authSuccess = document.getElementById('authSuccess');
    const modalTitle = document.getElementById('authModalTitle');
    
    if (modalTitle) modalTitle.textContent = 'Create Your Account';
    
    signInForm?.classList.add('hidden');
    signUpForm?.classList.remove('hidden');
    addressForm?.classList.add('hidden');
    authSuccess?.classList.add('hidden');
}

function showAddressForm() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const addressForm = document.getElementById('addressForm');
    const authSuccess = document.getElementById('authSuccess');
    const modalTitle = document.getElementById('authModalTitle');
    
    if (modalTitle) modalTitle.textContent = 'Delivery Information';
    
    signInForm?.classList.add('hidden');
    signUpForm?.classList.add('hidden');
    addressForm?.classList.remove('hidden');
    authSuccess?.classList.add('hidden');
}

function showAuthSuccess() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const addressForm = document.getElementById('addressForm');
    const authSuccess = document.getElementById('authSuccess');
    const modalTitle = document.getElementById('authModalTitle');
    
    if (modalTitle) modalTitle.textContent = 'Welcome to Kombino!';
    
    signInForm?.classList.add('hidden');
    signUpForm?.classList.add('hidden');
    addressForm?.classList.add('hidden');
    authSuccess?.classList.remove('hidden');
}

function resetAuthForms() {
    const forms = ['signInForm', 'signUpForm', 'addressForm'];
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.reset();
            // Remove validation classes
            const inputs = form.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.classList.remove('error', 'success');
            });
        }
    });
}

// Form submission handlers
async function handleSignIn(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('.auth-submit-btn');
    const username = document.getElementById('signInUsername').value.trim();
    const password = document.getElementById('signInPassword').value;
    
    if (!validateSignInForm(username, password)) {
        return;
    }
    
    setButtonLoading(submitBtn, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate successful authentication
        currentUser = {
            username: username,
            email: username.includes('@') ? username : `${username}@example.com`
        };
        isAuthenticated = true;
        
        showNotification('Successfully signed in! Welcome back to Kombino.', 'success');
        showAuthSuccess();
        
    } catch (error) {
        showNotification('Sign in failed. Please check your credentials.', 'error');
    } finally {
        setButtonLoading(submitBtn, false);
    }
}

async function handleSignUp(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('.auth-submit-btn');
    
    const mobile = document.getElementById('signUpMobile').value.trim();
    const username = document.getElementById('signUpUsername').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value;
    
    if (!validateSignUpForm(mobile, username, email, password)) {
        return;
    }
    
    setButtonLoading(submitBtn, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Store user info temporarily
        currentUser = {
            mobile: mobile,
            username: username,
            email: email
        };
        
        showNotification('Account created! Please provide your delivery address.', 'success');
        showAddressForm();
        
    } catch (error) {
        showNotification('Account creation failed. Please try again.', 'error');
    } finally {
        setButtonLoading(submitBtn, false);
    }
}

async function handleAddressSubmission(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('.auth-submit-btn');
    
    const name = document.getElementById('addressName').value.trim();
    const phone = document.getElementById('addressPhone').value.trim();
    const address1 = document.getElementById('addressLine1').value.trim();
    const address2 = document.getElementById('addressLine2').value.trim();
    const city = document.getElementById('addressCity').value;
    const pincode = document.getElementById('addressPincode').value.trim();
    
    if (!validateAddressForm(name, phone, address1, city, pincode)) {
        return;
    }
    
    setButtonLoading(submitBtn, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Complete user registration
        currentUser.address = {
            name: name,
            phone: phone,
            address1: address1,
            address2: address2,
            city: city,
            pincode: pincode
        };
        
        isAuthenticated = true;
        showNotification('Registration completed successfully! Welcome to Kombino.', 'success');
        showAuthSuccess();
        
    } catch (error) {
        showNotification('Address submission failed. Please try again.', 'error');
    } finally {
        setButtonLoading(submitBtn, false);
    }
}

function completeAuthentication() {
    hideAuthModal();
    scrollToSection('menu');
    showNotification('You can now browse our menu and place orders!', 'success');
}

// Form validation functions
function validateSignInForm(username, password) {
    let isValid = true;
    
    const usernameInput = document.getElementById('signInUsername');
    const passwordInput = document.getElementById('signInPassword');
    
    // Clear previous validation
    clearFieldValidation(usernameInput);
    clearFieldValidation(passwordInput);
    
    if (!username) {
        setFieldError(usernameInput, 'Username or email is required');
        isValid = false;
    } else {
        setFieldSuccess(usernameInput);
    }
    
    if (!password || password.length < 6) {
        setFieldError(passwordInput, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        setFieldSuccess(passwordInput);
    }
    
    return isValid;
}

function validateSignUpForm(mobile, username, email, password) {
    let isValid = true;
    
    const mobileInput = document.getElementById('signUpMobile');
    const usernameInput = document.getElementById('signUpUsername');
    const emailInput = document.getElementById('signUpEmail');
    const passwordInput = document.getElementById('signUpPassword');
    
    // Clear previous validation
    clearFieldValidation(mobileInput);
    clearFieldValidation(usernameInput);
    clearFieldValidation(emailInput);
    clearFieldValidation(passwordInput);
    
    if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
        setFieldError(mobileInput, 'Please enter a valid 10-digit mobile number');
        isValid = false;
    } else {
        setFieldSuccess(mobileInput);
    }
    
    if (!username || username.length < 3) {
        setFieldError(usernameInput, 'Username must be at least 3 characters');
        isValid = false;
    } else {
        setFieldSuccess(usernameInput);
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFieldError(emailInput, 'Please enter a valid email address');
        isValid = false;
    } else {
        setFieldSuccess(emailInput);
    }
    
    if (!password || password.length < 6) {
        setFieldError(passwordInput, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        setFieldSuccess(passwordInput);
    }
    
    return isValid;
}

function validateAddressForm(name, phone, address1, city, pincode) {
    let isValid = true;
    
    const nameInput = document.getElementById('addressName');
    const phoneInput = document.getElementById('addressPhone');
    const address1Input = document.getElementById('addressLine1');
    const cityInput = document.getElementById('addressCity');
    const pincodeInput = document.getElementById('addressPincode');
    
    // Clear previous validation
    clearFieldValidation(nameInput);
    clearFieldValidation(phoneInput);
    clearFieldValidation(address1Input);
    clearFieldValidation(cityInput);
    clearFieldValidation(pincodeInput);
    
    if (!name || name.length < 2) {
        setFieldError(nameInput, 'Please enter your full name');
        isValid = false;
    } else {
        setFieldSuccess(nameInput);
    }
    
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
        setFieldError(phoneInput, 'Please enter a valid 10-digit mobile number');
        isValid = false;
    } else {
        setFieldSuccess(phoneInput);
    }
    
    if (!address1 || address1.length < 5) {
        setFieldError(address1Input, 'Please enter a complete address');
        isValid = false;
    } else {
        setFieldSuccess(address1Input);
    }
    
    if (!city) {
        setFieldError(cityInput, 'Please select your city');
        isValid = false;
    } else {
        setFieldSuccess(cityInput);
    }
    
    if (!pincode || !/^\d{6}$/.test(pincode)) {
        setFieldError(pincodeInput, 'Please enter a valid 6-digit pincode');
        isValid = false;
    } else {
        setFieldSuccess(pincodeInput);
    }
    
    return isValid;
}

// Field validation helpers
function setFieldError(input, message) {
    input.classList.add('error');
    input.classList.remove('success');
    
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('span');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
}

function setFieldSuccess(input) {
    input.classList.add('success');
    input.classList.remove('error');
    
    // Remove error message
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

function clearFieldValidation(input) {
    input.classList.remove('error', 'success');
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

function setButtonLoading(button, loading) {
    const arrow = button.querySelector('.btn-arrow');
    const text = button.querySelector('span:first-child');
    
    if (loading) {
        button.classList.add('loading');
        button.disabled = true;
        if (text) text.textContent = 'Please wait...';
    } else {
        button.classList.remove('loading');
        button.disabled = false;
        // Restore original text based on button context
        if (button.closest('#signInForm')) {
            if (text) text.textContent = 'Sign In';
        } else if (button.closest('#signUpForm')) {
            if (text) text.textContent = 'Create Account';
        } else if (button.closest('#addressForm')) {
            if (text) text.textContent = 'Save Address & Continue';
        }
    }
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
    
    // Add styles dynamically
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
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: white;
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
    `;

    // Close handlers
    const closeLightbox = () => {
        lightbox.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(lightbox);
        }, 300);
    };

    closeBtn.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Form handlers
function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Simulate form submission
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    form.reset();
}

function handleNewsletterSignup(e) {
    e.preventDefault();
    const input = document.querySelector('.newsletter-input');
    if (input && input.value) {
        showNotification('Successfully subscribed to our newsletter!', 'success');
        input.value = '';
    } else {
        showNotification('Please enter a valid email address.', 'error');
    }
}

// UPDATED: Checkout function now requires authentication and uses updated success message
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Check if user is authenticated
    if (!isAuthenticated) {
        toggleCart(); // Close the cart modal first
        setTimeout(() => {
            showAuthModal(); // Then show auth modal
        }, 300);
        showNotification('Please sign in to place your order. Registration takes just 2 minutes!', 'info');
        return;
    }
    
    // If authenticated, proceed with checkout
    showNotification('Thank you For Choosing Kombino to take care of your health', 'success');
    cart = [];
    updateCartDisplay();
    toggleCart();
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: ${type === 'success' ? '#2E8B57' : type === 'error' ? '#ff4444' : '#333'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        z-index: 5000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        max-width: 300px;
        font-weight: 500;
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

// FIXED: Create menu item element with "Order Soon" button text instead of "Add to Cart"
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
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <span class="btn-text">Order Soon</span>
                    <span class="btn-arrow">→</span>
                </button>
            </div>
        </div>
    `;

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
    const buttons = document.querySelectorAll(`[onclick="addToCart(${itemId})"]`);
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

// Add custom CSS animations and image placeholder styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .no-items-message {
        grid-column: 1 / -1;
        text-align: center;
        padding: 64px 24px;
        color: var(--color-text-secondary);
    }

    .no-items-icon {
        font-size: 4rem;
        margin-bottom: 16px;
        opacity: 0.5;
    }

    .no-items-message h3 {
        color: var(--color-text);
        margin-bottom: 8px;
    }

    .menu-item-image {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }

    .menu-item-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--duration-normal) var(--smooth);
    }

    .menu-item:hover .menu-item-image img {
        transform: scale(1.05);
    }

    .image-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--kombino-light-green), #f0fff0);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--kombino-green);
    }

    .placeholder-icon {
        font-size: 3rem;
        margin-bottom: 8px;
        opacity: 0.7;
    }

    .image-placeholder span {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    /* Mobile menu styles */
    @media (max-width: 768px) {
        .nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--color-surface);
            border-top: 1px solid var(--color-border);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
            transition: all 0.3s ease;
        }

        .nav.open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .nav-list {
            flex-direction: column;
            padding: 24px;
            gap: 16px;
        }

        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

document.head.appendChild(style);

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;
window.scrollToSection = scrollToSection;
window.showAuthModal = showAuthModal;
window.hideAuthModal = hideAuthModal;
window.switchToSignIn = switchToSignIn;
window.switchToSignUp = switchToSignUp;
window.completeAuthentication = completeAuthentication;

// Performance optimization
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Load non-critical features
        console.log('Kombino: Enhanced authentication features loaded');
    });
}

console.log('Kombino: Interactive website with authentication loaded successfully! 🌿🔐');