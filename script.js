// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize Swiper for Team Members
const teamSwiper = new Swiper('.team-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});

// Initialize Swiper for Products
const productsSwiper = new Swiper('.products-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});

// Book Information Data
const bookData = {
    1: {
        title: "Money Basics for Teens",
        description: "A comprehensive guide to understanding money fundamentals designed specifically for teenagers. Learn about earning, spending, and the value of money.",
        content: [
            "Understanding the concept of money and its history",
            "Different ways to earn money as a teenager",
            "The importance of financial responsibility",
            "Basic banking concepts and account types",
            "Introduction to digital payments and online banking"
        ],
        keyTakeaways: "Master the fundamentals of money management and develop healthy financial habits from an early age."
    },
    2: {
        title: "Smart Saving Strategies",
        description: "Discover proven techniques to save money effectively and build a strong financial foundation for your future goals.",
        content: [
            "The 50/30/20 budgeting rule explained",
            "Setting up automatic savings plans",
            "Emergency fund creation and management",
            "High-yield savings accounts vs. regular savings",
            "Goal-based saving strategies for different life stages"
        ],
        keyTakeaways: "Learn to save systematically and watch your money grow through smart saving strategies and compound interest."
    },
    3: {
        title: "Investment Guide for Beginners",
        description: "Start your investment journey with confidence. Learn the basics of investing, risk management, and building wealth over time.",
        content: [
            "Understanding stocks, bonds, and mutual funds",
            "Risk vs. return: Finding your investment comfort zone",
            "Dollar-cost averaging and its benefits",
            "Introduction to index funds and ETFs",
            "Building a diversified investment portfolio"
        ],
        keyTakeaways: "Begin investing early to harness the power of compound growth and build long-term wealth."
    },
    4: {
        title: "Budgeting Made Simple",
        description: "Master the art of budgeting with easy-to-follow strategies that help you track expenses and achieve your financial goals.",
        content: [
            "Creating your first budget: Step-by-step guide",
            "Tracking expenses using apps and spreadsheets",
            "Identifying and cutting unnecessary expenses",
            "Budget categories and allocation strategies",
            "Adjusting your budget as life changes"
        ],
        keyTakeaways: "Take control of your finances with effective budgeting techniques that ensure you live within your means."
    },
    5: {
        title: "Entrepreneurship Essentials",
        description: "Learn the financial aspects of starting and running a business, from initial funding to managing cash flow and growth.",
        content: [
            "Business planning and financial projections",
            "Understanding startup costs and funding options",
            "Cash flow management for small businesses",
            "Basic accounting principles for entrepreneurs",
            "Tax considerations for business owners"
        ],
        keyTakeaways: "Develop the financial skills needed to start and successfully manage your own business venture."
    },
    6: {
        title: "Financial Security Handbook",
        description: "Protect your financial future with comprehensive strategies for insurance, emergency planning, and avoiding common financial pitfalls.",
        content: [
            "Types of insurance and their importance",
            "Building and maintaining an emergency fund",
            "Identity theft protection and financial security",
            "Understanding credit scores and credit reports",
            "Avoiding debt traps and predatory lending"
        ],
        keyTakeaways: "Secure your financial future by learning to protect yourself from financial risks and unexpected events."
    }
};

// Product Modal Functionality
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

// Add click event listeners to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        const bookId = this.getAttribute('data-book');
        const book = bookData[bookId];
        
        if (book) {
            showBookModal(book);
        }
    });
});

function showBookModal(book) {
    modalBody.innerHTML = `
        <h2 style="color: #2563eb; margin-bottom: 1rem; font-size: 1.8rem;">${book.title}</h2>
        <p style="color: #6b7280; margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">${book.description}</p>
        
        <h3 style="color: #1f2937; margin-bottom: 1rem; font-size: 1.3rem;">What You'll Learn:</h3>
        <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
            ${book.content.map(item => `<li style="margin-bottom: 0.5rem; color: #4b5563;">${item}</li>`).join('')}
        </ul>
        
        <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #2563eb;">
            <h4 style="color: #2563eb; margin-bottom: 0.5rem;">Key Takeaway:</h4>
            <p style="color: #1e40af; font-weight: 500;">${book.keyTakeaways}</p>
        </div>
        
        <div style="margin-top: 2rem; text-align: center;">
            <button style="background: #2563eb; color: white; border: none; padding: 12px 30px; border-radius: 25px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;" 
                    onmouseover="this.style.background='#1d4ed8'" 
                    onmouseout="this.style.background='#2563eb'"
                    onclick="alert('This is a demo. In a real implementation, this would download or open the book.')">
                Access This Resource
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal functionality
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.about-card, .team-card, .product-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// CTA Button functionality
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});