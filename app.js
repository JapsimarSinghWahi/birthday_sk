document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
    });

    // 2. Load Intro Section Data
    // (Data comes from content.js which is loaded before app.js)
    if (typeof specialIntro !== 'undefined') {
        document.getElementById('intro-greeting').textContent = specialIntro.greeting;
        document.getElementById('intro-message').textContent = specialIntro.message;
        
        const introPhoto = document.getElementById('intro-photo');
        introPhoto.src = specialIntro.photo;
        
        // Optional: Hide photo container if no photo provided
        if (!specialIntro.photo) {
            introPhoto.parentElement.style.display = 'none';
        }
    }

    // 3. Load Birthday Messages
    if (typeof birthdayMessages !== 'undefined') {
        const grid = document.getElementById('messages-grid');
        
        birthdayMessages.forEach((msg, index) => {
            // Create card element
            const card = document.createElement('div');
            card.className = 'message-card';
            
            // Stagger animation delay based on index
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (index % 3) * 100);

            // Construct card inner HTML
            let photoHTML = '';
            if (msg.photo) {
                photoHTML = `
                    <div class="card-photo-wrapper">
                        <img src="${msg.photo}" alt="${msg.name}" class="card-photo" loading="lazy">
                    </div>
                `;
            }

            card.innerHTML = `
                ${photoHTML}
                <div class="card-content">
                    <p class="card-message">"${msg.message}"</p>
                    <p class="card-name">- ${msg.name}</p>
                </div>
            `;
            
            grid.appendChild(card);
        });
    }

    // 4. Confetti Button Logic
    const confettiBtn = document.getElementById('confetti-btn');
    if (confettiBtn) {
        confettiBtn.addEventListener('click', () => {
            // Fire multiple confetti bursts
            var count = 200;
            var defaults = {
                origin: { y: 0.7 }
            };

            function fire(particleRatio, opts) {
                confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio)
                }));
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        });
        
        // Also fire once on load after a small delay
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 1000);
    }
});
