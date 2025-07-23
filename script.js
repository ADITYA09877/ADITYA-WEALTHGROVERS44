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
        title: "Money and Psychology",
        description: "Explore the fascinating relationship between psychology and financial decisions. Understand how emotions, biases, and mental patterns influence your money choices.",
        content: [
            "The psychology behind spending and saving behaviors",
            "Understanding cognitive biases in financial decisions",
            "Emotional triggers that affect money management",
            "Building healthy financial mindsets and habits",
            "Overcoming money-related stress and anxiety"
        ],
        keyTakeaways: "Understand the psychological factors that drive financial decisions and learn to make more rational money choices.",
        price: "₹299",
        image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
    },
    2: {
        title: "7 Best Ways to Earn Money",
        description: "Discover multiple income streams and practical strategies to increase your earning potential in today's economy.",
        content: [
            "Traditional employment and career advancement",
            "Freelancing and gig economy opportunities",
            "Starting your own business or side hustle",
            "Investment income and passive earning strategies",
            "Digital marketing and online business models"
        ],
        keyTakeaways: "Learn proven methods to diversify your income and build multiple revenue streams for financial security.",
        price: "₹399",
        image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg"
    },
    3: {
        title: "75 Hard Challenge",
        description: "A transformative 75-day mental toughness program that builds discipline, confidence, and financial self-control.",
        content: [
            "The complete 75 Hard Challenge rules and guidelines",
            "Building mental toughness and discipline",
            "Developing consistent daily habits",
            "Applying discipline to financial goals",
            "Tracking progress and maintaining accountability"
        ],
        keyTakeaways: "Develop unbreakable mental discipline that translates into better financial habits and life success.",
        price: "₹249",
        image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
    },
    4: {
        title: "Saving Money for the Future",
        description: "Learn advanced saving strategies and long-term wealth building techniques for a secure financial future.",
        content: [
            "Long-term saving strategies and goal setting",
            "Understanding compound interest and time value of money",
            "Retirement planning and pension schemes",
            "Tax-saving investment options",
            "Creating emergency funds and financial safety nets"
        ],
        keyTakeaways: "Build a comprehensive saving plan that ensures financial security and wealth accumulation over time.",
        price: "₹349",
        image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg"
    },
    5: {
        title: "Poor Father vs Good Father",
        description: "Understand the mindset differences between financially struggling and financially successful parents and their impact on children.",
        content: [
            "Contrasting financial philosophies and mindsets",
            "How parental attitudes shape children's money beliefs",
            "Breaking generational cycles of financial struggle",
            "Teaching children healthy money habits",
            "Building wealth-conscious family traditions"
        ],
        keyTakeaways: "Learn how to break negative financial patterns and create a positive money legacy for future generations.",
        price: "₹279",
        image: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg"
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
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <img src="${book.image}" alt="${book.title}" style="width: 150px; height: 200px; object-fit: cover; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        </div>
        <p style="color: #6b7280; margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">${book.description}</p>
        
        <h3 style="color: #1f2937; margin-bottom: 1rem; font-size: 1.3rem;">What You'll Learn:</h3>
        <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
            ${book.content.map(item => `<li style="margin-bottom: 0.5rem; color: #4b5563;">${item}</li>`).join('')}
        </ul>
        
        <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #2563eb;">
            <h4 style="color: #2563eb; margin-bottom: 0.5rem;">Key Takeaway:</h4>
            <p style="color: #1e40af; font-weight: 500;">${book.keyTakeaways}</p>
            <p style="color: #2563eb; font-weight: 700; font-size: 1.2rem; margin-top: 1rem;">Price: ${book.price}</p>
        </div>
        
        <div style="margin-top: 2rem; text-align: center;">
            <button style="background: #2563eb; color: white; border: none; padding: 12px 30px; border-radius: 25px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;" 
                    onmouseover="this.style.background='#1d4ed8'" 
                    onmouseout="this.style.background='#2563eb'"
                    onclick="window.open('https://store.pothi.com/cart/', '_blank')">
                Buy Now
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
    window.open('courses.html', '_blank');
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});