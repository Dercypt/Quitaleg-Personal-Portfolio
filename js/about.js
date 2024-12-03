// Add fade-in effect for about page elements
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    // Fade-in animation when scrolling
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    document.querySelectorAll('.fade-in').forEach((element) => {
        observer.observe(element);
    });
});