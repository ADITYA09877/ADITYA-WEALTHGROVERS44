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

// Tic Tac Toe Game Logic
class TicTacToeGame {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.playerWinChance = 0.1; // 10% chance for player to win
        
        this.financialTips = [
            {
                title: "Emergency Fund Wisdom",
                message: "Always keep 3-6 months of expenses saved for emergencies. This financial cushion protects you from unexpected life events.",
                hindi: "हमेशा आपातकाल के लिए 3-6 महीने का खर्च बचाकर रखें। यह वित्तीय सुरक्षा आपको अप्रत्याशित घटनाओं से बचाती है।"
            },
            {
                title: "Investment Strategy",
                message: "Start investing early, even with small amounts. The power of compound interest works best over time.",
                hindi: "जल्दी निवेश शुरू करें, चाहे छोटी राशि से ही। चक्रवृद्धि ब्याज की शक्ति समय के साथ सबसे अच्छा काम करती है।"
            },
            {
                title: "Budgeting Basics",
                message: "Follow the 50-30-20 rule: 50% needs, 30% wants, 20% savings. This creates a balanced financial life.",
                hindi: "50-30-20 नियम का पालन करें: 50% जरूरतें, 30% इच्छाएं, 20% बचत। यह संतुलित वित्तीय जीवन बनाता है।"
            },
            {
                title: "Debt Management",
                message: "Pay off high-interest debt first. Credit card debt can quickly spiral out of control if not managed properly.",
                hindi: "पहले उच्च ब्याज वाले कर्ज का भुगतान करें। क्रेडिट कार्ड का कर्ज सही तरीके से प्रबंधित न करने पर तेजी से बढ़ सकता है।"
            },
            {
                title: "Financial Goals",
                message: "Set SMART financial goals: Specific, Measurable, Achievable, Relevant, and Time-bound.",
                hindi: "SMART वित्तीय लक्ष्य निर्धारित करें: विशिष्ट, मापने योग्य, प्राप्त करने योग्य, प्रासंगिक और समयबद्ध।"
            },
            {
                title: "Risk Management",
                message: "Diversify your investments. Don't put all your eggs in one basket to minimize financial risk.",
                hindi: "अपने निवेश में विविधता लाएं। वित्तीय जोखिम कम करने के लिए सभी अंडे एक ही टोकरी में न रखें।"
            }
        ];
        
        this.initializeGame();
    }
    
    initializeGame() {
        const cells = document.querySelectorAll('.cell');
        const resetBtn = document.getElementById('resetGame');
        
        cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e));
        });
        
        resetBtn.addEventListener('click', () => this.resetGame());
        
        this.updateStatus();
    }
    
    handleCellClick(e) {
        const index = parseInt(e.target.dataset.index);
        
        if (this.board[index] !== '' || !this.gameActive || this.currentPlayer !== 'X') {
            return;
        }
        
        this.makeMove(index, 'X');
        
        if (this.gameActive) {
            setTimeout(() => {
                this.aiMove();
            }, 500);
        }
    }
    
    makeMove(index, player) {
        this.board[index] = player;
        const cell = document.querySelector(`[data-index="${index}"]`);
        cell.textContent = player;
        cell.classList.add(player.toLowerCase());
        
        if (this.checkWinner()) {
            this.gameActive = false;
            this.highlightWinningCells();
            this.showGameResult(player);
        } else if (this.board.every(cell => cell !== '')) {
            this.gameActive = false;
            this.showGameResult('draw');
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateStatus();
        }
    }
    
    aiMove() {
        if (!this.gameActive) return;
        
        const availableMoves = this.board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
        
        if (availableMoves.length === 0) return;
        
        let move;
        
        // Determine if player should win (10% chance)
        const shouldPlayerWin = Math.random() < this.playerWinChance;
        
        if (shouldPlayerWin) {
            // Make a random move to let player win
            move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        } else {
            // AI tries to win or block player
            move = this.getBestMove() || availableMoves[Math.floor(Math.random() * availableMoves.length)];
        }
        
        this.makeMove(move, 'O');
    }
    
    getBestMove() {
        // Check if AI can win
        for (let i = 0; i < 9; i++) {
            if (this.board[i] === '') {
                this.board[i] = 'O';
                if (this.checkWinner() === 'O') {
                    this.board[i] = '';
                    return i;
                }
                this.board[i] = '';
            }
        }
        
        // Check if AI needs to block player
        for (let i = 0; i < 9; i++) {
            if (this.board[i] === '') {
                this.board[i] = 'X';
                if (this.checkWinner() === 'X') {
                    this.board[i] = '';
                    return i;
                }
                this.board[i] = '';
            }
        }
        
        return null;
    }
    
    checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.winningPattern = pattern;
                return this.board[a];
            }
        }
        
        return null;
    }
    
    highlightWinningCells() {
        if (this.winningPattern) {
            this.winningPattern.forEach(index => {
                document.querySelector(`[data-index="${index}"]`).classList.add('winning');
            });
        }
    }
    
    updateStatus() {
        const playerStatus = document.getElementById('playerStatus');
        const aiStatus = document.getElementById('aiStatus');
        
        if (this.currentPlayer === 'X') {
            playerStatus.textContent = 'Your Turn';
            aiStatus.textContent = 'Waiting';
        } else {
            playerStatus.textContent = 'Waiting';
            aiStatus.textContent = 'AI Thinking...';
        }
    }
    
    showGameResult(winner) {
        const modal = document.getElementById('gameResultModal');
        const content = document.getElementById('gameResultContent');
        const randomTip = this.financialTips[Math.floor(Math.random() * this.financialTips.length)];
        const randomDiscount = Math.floor(Math.random() * 11) + 10; // 10-20%
        
        let resultHTML = '';
        
        if (winner === 'X') {
            resultHTML = `
                <h2 class="game-result-title win">🎉 Player A Wins! 🎉</h2>
                <div class="discount-info">
                    <h4>🎁 Congratulations! You've earned a 25% discount!</h4>
                    <div class="discount-code">WINNER25</div>
                </div>
            `;
        } else if (winner === 'O') {
            resultHTML = `
                <h2 class="game-result-title lose">😔 AI Wins!</h2>
                <div class="discount-info">
                    <h4>💰 You need to pay ₹20 extra, but here's a consolation discount!</h4>
                    <div class="discount-code">CONSOLE${randomDiscount}</div>
                    <p style="margin-top: 0.5rem; color: #92400e;">Use this ${randomDiscount}% discount code!</p>
                </div>
            `;
        } else {
            resultHTML = `
                <h2 class="game-result-title draw">🤝 It's a Draw!</h2>
                <div class="discount-info">
                    <h4>🎁 Fair play deserves a reward!</h4>
                    <div class="discount-code">DRAW${randomDiscount}</div>
                    <p style="margin-top: 0.5rem; color: #92400e;">Enjoy ${randomDiscount}% discount!</p>
                </div>
            `;
        }
        
        resultHTML += `
            <div class="financial-tip">
                <h4>💡 ${randomTip.title}</h4>
                <p id="tipMessage">${randomTip.message}</p>
                <div class="translate-section">
                    <p style="margin-bottom: 0.5rem; font-size: 0.9rem; color: #6b7280;">Don't understand English? Translate to:</p>
                    <button class="translate-btn" onclick="translateTip('${randomTip.hindi}')">हिंदी</button>
                    <button class="translate-btn" onclick="translateTip('${randomTip.message}')">English</button>
                </div>
            </div>
            <button class="reset-btn" onclick="closeGameModal()" style="margin-top: 1rem;">Play Again</button>
        `;
        
        content.innerHTML = resultHTML;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.winningPattern = null;
        
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winning');
        });
        
        this.updateStatus();
    }
}

// Initialize game when page loads
let ticTacToeGame;
document.addEventListener('DOMContentLoaded', function() {
    ticTacToeGame = new TicTacToeGame();
});

// Game modal functions
function translateTip(message) {
    document.getElementById('tipMessage').textContent = message;
}

function closeGameModal() {
    const modal = document.getElementById('gameResultModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    ticTacToeGame.resetGame();
}

// Close game modal when clicking outside
document.getElementById('closeGameModal').addEventListener('click', closeGameModal);
window.addEventListener('click', function(event) {
    const modal = document.getElementById('gameResultModal');
    if (event.target === modal) {
        closeGameModal();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Spin the Wheel Game Logic
class SpinWheelGame {
    constructor() {
        this.canvas = document.getElementById('wheelCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.spinBtn = document.getElementById('spinBtn');
        this.resultDiv = document.getElementById('wheelResult');
        
        this.segments = [
            { text: '0%', color: '#ef4444', discount: 0 },
            { text: '5%', color: '#f97316', discount: 5 },
            { text: '10%', color: '#eab308', discount: 10 },
            { text: '15%', color: '#22c55e', discount: 15 },
            { text: '20%', color: '#3b82f6', discount: 20 }
        ];
        
        this.currentRotation = 0;
        this.isSpinning = false;
        
        this.initializeWheel();
        this.bindEvents();
    }
    
    initializeWheel() {
        this.drawWheel();
    }
    
    drawWheel() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = 140;
        const segmentAngle = (2 * Math.PI) / this.segments.length;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw segments
        this.segments.forEach((segment, index) => {
            const startAngle = index * segmentAngle + this.currentRotation;
            const endAngle = startAngle + segmentAngle;
            
            // Draw segment
            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY);
            this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            this.ctx.closePath();
            this.ctx.fillStyle = segment.color;
            this.ctx.fill();
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();
            
            // Draw text
            this.ctx.save();
            this.ctx.translate(centerX, centerY);
            this.ctx.rotate(startAngle + segmentAngle / 2);
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = 'bold 24px Inter';
            this.ctx.fillText(segment.text, radius * 0.7, 8);
            this.ctx.restore();
        });
        
        // Draw center circle
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#1f2937';
        this.ctx.fill();
    }
    
    bindEvents() {
        this.spinBtn.addEventListener('click', () => this.spin());
    }
    
    spin() {
        if (this.isSpinning) return;
        
        this.isSpinning = true;
        this.spinBtn.disabled = true;
        this.resultDiv.innerHTML = '';
        
        // Determine result based on weighted probability
        const result = this.getWeightedResult();
        
        // Calculate rotation needed to land on result
        const segmentAngle = (2 * Math.PI) / this.segments.length;
        const targetIndex = this.segments.findIndex(s => s.discount === result.discount);
        const targetAngle = targetIndex * segmentAngle + segmentAngle / 2;
        
        // Add multiple full rotations for effect
        const fullRotations = 5 + Math.random() * 3;
        const totalRotation = fullRotations * 2 * Math.PI + (2 * Math.PI - targetAngle);
        
        this.animateWheel(totalRotation, result);
    }
    
    getWeightedResult() {
        const random = Math.random() * 100;
        
        // 0% and 5% have 100% combined chance (49.5% each)
        // 10%, 15%, 20% have 1% combined chance (0.33% each)
        if (random < 49.5) {
            return this.segments[0]; // 0%
        } else if (random < 99) {
            return this.segments[1]; // 5%
        } else if (random < 99.33) {
            return this.segments[2]; // 10%
        } else if (random < 99.66) {
            return this.segments[3]; // 15%
        } else {
            return this.segments[4]; // 20%
        }
    }
    
    animateWheel(totalRotation, result) {
        const startRotation = this.currentRotation;
        const startTime = Date.now();
        const duration = 3000; // 3 seconds
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            this.currentRotation = startRotation + totalRotation * easeOut;
            this.drawWheel();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.showResult(result);
                this.isSpinning = false;
                this.spinBtn.disabled = false;
            }
        };
        
        animate();
    }
    
    showResult(result) {
        const resultHTML = result.discount === 0 
            ? `<div class="result-popup no-discount">Better luck next time! 0% discount</div>`
            : `<div class="result-popup">🎉 Congratulations! You won ${result.discount}% discount!</div>`;
        
        this.resultDiv.innerHTML = resultHTML;
        
        // Add some celebration effect for non-zero results
        if (result.discount > 0) {
            this.createConfetti();
        }
    }
    
    createConfetti() {
        // Simple confetti effect
        const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                confetti.style.borderRadius = '50%';
                
                document.body.appendChild(confetti);
                
                // Animate confetti falling
                confetti.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 }
                ], {
                    duration: 3000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => confetti.remove();
            }, i * 50);
        }
    }
}

// Initialize Spin the Wheel when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('wheelCanvas')) {
        new SpinWheelGame();
    }
    
    // Initialize Commerce GPT
    initializeCommerceGPT();
});

// Commerce GPT Implementation
function initializeCommerceGPT() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendMessage');
    const chatWindow = document.getElementById('chatWindow');
    const clearBtn = document.getElementById('clearChat');
    const typingIndicator = document.getElementById('typingIndicator');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');
    
    let conversationHistory = [];
    
    // Auto-resize textarea
    chatInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        
        // Enable/disable send button
        sendBtn.disabled = this.value.trim() === '';
    });
    
    // Send message on Enter (Shift+Enter for new line)
    chatInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Send button click
    sendBtn.addEventListener('click', sendMessage);
    
    // Clear chat
    clearBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear the chat history?')) {
            clearChat();
        }
    });
    
    // Suggestion buttons
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const suggestion = this.getAttribute('data-suggestion');
            chatInput.value = suggestion;
            chatInput.style.height = 'auto';
            chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
            sendBtn.disabled = false;
            chatInput.focus();
        });
    });
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        conversationHistory.push({ role: 'user', content: message });
        
        // Clear input
        chatInput.value = '';
        chatInput.style.height = 'auto';
        sendBtn.disabled = true;
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate AI response
        setTimeout(() => {
            const response = generateAIResponse(message, conversationHistory);
            hideTypingIndicator();
            addMessage(response, 'bot');
            conversationHistory.push({ role: 'assistant', content: response });
        }, 1500 + Math.random() * 2000); // Random delay 1.5-3.5s
    }
    
    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = sender === 'user' ? 'user-avatar' : 'bot-avatar';
        avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = formatMessage(content);
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        
        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
    
    function formatMessage(content) {
        // Convert markdown-like formatting to HTML
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')
            .replace(/(\d+\.\s)/g, '<br>$1');
    }
    
    function showTypingIndicator() {
        typingIndicator.style.display = 'flex';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
    
    function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
    }
    
    function clearChat() {
        // Remove all messages except welcome message
        const messages = chatWindow.querySelectorAll('.chat-message');
        messages.forEach(msg => msg.remove());
        conversationHistory = [];
    }
    
    function generateAIResponse(userMessage, history) {
        const message = userMessage.toLowerCase();
        
        // Commerce and Finance responses
        if (message.includes('ca') && (message.includes('cs') || message.includes('difference'))) {
            return `**CA vs CS: Key Differences**

**Chartered Accountant (CA):**
• Focus: Accounting, Auditing, Taxation, Financial Management
• Duration: 4-5 years typically
• Eligibility: 12th pass or Graduate
• Career: Auditor, Tax Consultant, CFO, Financial Analyst
• Salary Range: ₹6-25 LPA (experienced professionals earn much more)

**Company Secretary (CS):**
• Focus: Corporate Law, Governance, Compliance, Secretarial Practice
• Duration: 3-4 years typically
• Eligibility: 12th pass or Graduate
• Career: Company Secretary, Compliance Officer, Legal Advisor
• Salary Range: ₹4-15 LPA

**Key Difference:** CA is more numbers and finance-focused, while CS is more law and compliance-focused. Both are excellent career choices with strong job prospects!`;
        }
        
        if (message.includes('ca foundation') || message.includes('ca prep')) {
            return `**CA Foundation Preparation Strategy**

**Subjects & Weightage:**
1. **Principles of Accounting (100 marks)** - Most important, practice daily
2. **Business Laws (100 marks)** - Memorization + understanding
3. **Business Mathematics & Statistics (100 marks)** - Formula-based
4. **Business Economics (100 marks)** - Conceptual understanding

**Study Plan:**
• **6 months minimum** preparation time
• **4-5 hours daily** study
• **Practice papers** - solve at least 5 mock tests
• **Revision** - 1 month before exam

**Pro Tips:**
✓ Start with Accounting - it's the foundation
✓ Make formula sheets for Maths & Stats
✓ Use mnemonics for Business Laws
✓ Join study groups or online forums

**Pass Rate:** Around 30-40%, so consistent effort is key!`;
        }
        
        if (message.includes('commerce career') || message.includes('career opportunities')) {
            return `**Top Career Opportunities in Commerce**

**Professional Courses:**
• **CA** - Chartered Accountant (₹6-50+ LPA)
• **CS** - Company Secretary (₹4-20 LPA)
• **CMA** - Cost & Management Accountant (₹5-25 LPA)
• **CFA** - Chartered Financial Analyst (₹8-40 LPA)

**Corporate Roles:**
• Financial Analyst (₹4-15 LPA)
• Investment Banker (₹8-30 LPA)
• Tax Consultant (₹3-12 LPA)
• Audit Manager (₹6-20 LPA)
• Business Analyst (₹5-18 LPA)

**Entrepreneurship:**
• Start your own CA/CS practice
• Financial consulting firm
• Tax advisory services
• Business process outsourcing

**Government Jobs:**
• Banking (SBI PO, IBPS)
• Civil Services (IAS, IRS)
• Public Sector Units

The commerce field offers excellent growth potential and job security!`;
        }
        
        if (message.includes('accounting') && message.includes('basic')) {
            return `**Basic Accounting Principles**

**Golden Rules of Accounting:**
1. **Personal Account:** Debit the receiver, Credit the giver
2. **Real Account:** Debit what comes in, Credit what goes out
3. **Nominal Account:** Debit all expenses/losses, Credit all incomes/gains

**Fundamental Concepts:**
• **Assets = Liabilities + Capital** (Accounting Equation)
• **Double Entry System** - Every transaction affects two accounts
• **Accrual Basis** - Record when earned/incurred, not when cash received/paid

**Key Terms:**
• **Debit (Dr.)** - Left side of account, increases assets/expenses
• **Credit (Cr.)** - Right side of account, increases liabilities/income
• **Trial Balance** - List of all account balances
• **P&L Account** - Shows profit or loss for a period
• **Balance Sheet** - Shows financial position at a point in time

**Practice Tip:** Start with simple transactions like cash sales, purchases, and gradually move to complex entries!`;
        }
        
        if (message.includes('cma') || message.includes('cost accounting')) {
            return `**CMA (Cost & Management Accountant) Overview**

**What is CMA?**
Cost & Management Accountant focuses on cost control, budgeting, and management decision-making.

**Course Structure:**
• **Foundation** (after 12th)
• **Intermediate** (8 subjects)
• **Final** (8 subjects)
• **Practical Training** (15 months)

**Key Subjects:**
• Cost Accounting & Control
• Financial Management & International Finance
• Strategic Management & Business Ethics
• Corporate Laws & Compliance

**Career Opportunities:**
• Cost Accountant in manufacturing companies
• Management Accountant
• Financial Controller
• Budget Analyst
• Internal Auditor

**Salary Range:** ₹5-25 LPA depending on experience

**Why Choose CMA?**
✓ High demand in manufacturing sector
✓ Excellent for those interested in cost control
✓ Good work-life balance
✓ Opportunities in both industry and practice`;
        }
        
        if (message.includes('b.com') || message.includes('bcom') || message.includes('bachelor')) {
            return `**B.Com Course Guide**

**Core Subjects (Usually):**
• Financial Accounting
• Business Mathematics & Statistics
• Microeconomics & Macroeconomics
• Business Law
• Corporate Accounting
• Cost Accounting
• Auditing
• Taxation (Income Tax, GST)
• Financial Management
• Computer Applications in Business

**Specializations Available:**
• B.Com (Hons) - General
• B.Com (Accounting & Finance)
• B.Com (Banking & Insurance)
• B.Com (Computer Applications)

**Career After B.Com:**
• Pursue CA/CS/CMA
• MBA in Finance/Marketing
• Banking sector jobs
• Government jobs (SSC, Banking exams)
• Start your own business

**Skills to Develop:**
✓ Excel proficiency
✓ Tally software
✓ Communication skills
✓ Analytical thinking

**Pro Tip:** B.Com is a great foundation - use it as a stepping stone to professional courses!`;
        }
        
        if (message.includes('economics') || message.includes('micro') || message.includes('macro')) {
            return `**Economics Fundamentals**

**Microeconomics:**
• Studies individual economic units (consumers, firms)
• **Key Topics:** Demand & Supply, Elasticity, Consumer Behavior, Production Theory, Market Structures
• **Applications:** Pricing decisions, resource allocation

**Macroeconomics:**
• Studies economy as a whole
• **Key Topics:** GDP, Inflation, Unemployment, Monetary Policy, Fiscal Policy
• **Applications:** Government policy, economic forecasting

**Important Concepts:**
• **Opportunity Cost** - Cost of next best alternative
• **Marginal Utility** - Additional satisfaction from one more unit
• **Elasticity** - Responsiveness of demand/supply to price changes
• **GDP** - Total value of goods & services produced
• **Inflation** - General rise in price level

**Study Tips:**
✓ Use graphs and diagrams extensively
✓ Relate concepts to real-world examples
✓ Practice numerical problems
✓ Read economic newspapers/magazines

**Career Applications:** Essential for CA, CS, MBA, Civil Services, Banking careers!`;
        }
        
        // General AI responses
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return `Hello! 👋 I'm Commerce GPT, your AI assistant specializing in Commerce, Finance, and Professional courses. 

I can help you with:
• **Commerce subjects** (Accounting, Economics, Business Studies)
• **Professional courses** (CA, CS, CMA, CFA, CFP)
• **Academic guidance** (B.Com, M.Com subjects)
• **Career advice** in finance and commerce
• **General questions** on any topic

What would you like to learn about today?`;
        }
        
        if (message.includes('help') || message.includes('what can you do')) {
            return `**I can help you with:**

📊 **Commerce & Finance:**
• Accounting principles and practices
• Financial management concepts
• Business mathematics and statistics
• Economics (micro and macro)
• Business law and corporate governance

🎓 **Professional Courses:**
• CA (Chartered Accountant) guidance
• CS (Company Secretary) information
• CMA (Cost & Management Accountant)
• CFA, CFP, and other finance certifications

🏫 **Academic Support:**
• B.Com and M.Com subject explanations
• Assignment help and concept clarification
• Exam preparation strategies
• Career guidance in commerce field

🤖 **General AI Assistance:**
• Answer questions on any topic
• Explain complex concepts simply
• Provide study tips and strategies
• Help with research and analysis

Just ask me anything - I'm here to help! 😊`;
        }
        
        // Default responses for unmatched queries
        const defaultResponses = [
            `That's an interesting question! While I specialize in Commerce and Finance topics, I'd be happy to help. Could you provide more specific details about what you'd like to know?

For the best assistance, try asking about:
• Accounting concepts or problems
• Professional course guidance (CA/CS/CMA)
• Business studies or economics topics
• Career advice in commerce field

What specific area would you like to explore?`,
            
            `I understand you're looking for information on this topic. As Commerce GPT, I'm most knowledgeable about:

📚 **Academic subjects:** Accounting, Economics, Business Studies
🎯 **Professional courses:** CA, CS, CMA, CFA
💼 **Career guidance:** Finance and commerce careers
🧠 **General knowledge:** Happy to help with other topics too!

Could you rephrase your question or let me know which area you'd like to focus on?`,
            
            `Thank you for your question! I'm here to provide detailed, helpful responses on commerce, finance, and general topics.

To give you the most accurate and useful information, could you:
• Be more specific about what you need
• Let me know your current level (student, professional, etc.)
• Mention if this is for exam prep, career guidance, or general knowledge

I'm ready to provide comprehensive explanations once I understand your needs better! 😊`
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}