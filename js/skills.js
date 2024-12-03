// Animate Progress Bars
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        if (targetWidth) {
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-in-out';
                bar.style.width = targetWidth;
            }, 200);
        }
    });
});

// Skill Card Hover Animation
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.08)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

// Dynamic Highlight for Skills Categories
document.addEventListener('DOMContentLoaded', () => {
    const skillsSections = document.querySelectorAll('.skills-category');
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('highlight-category');
                } else {
                    entry.target.classList.remove('highlight-category');
                }
            });
        },
        { threshold: 0.5 }
    );

    skillsSections.forEach(section => observer.observe(section));
});
