// GLOBAL  JS

// Highlight Active Navigation Link
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-item.active').classList.remove('active');
        link.classList.add('active');
    });
});

// Add fade-in animation to sections
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    fadeInElements.forEach(element => observer.observe(element));
});
