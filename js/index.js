// Parallax Effect on Mouse Move
document.addEventListener('mousemove', event => {
    const image = document.querySelector('.main-image');
    if (image) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const moveX = (mouseX - window.innerWidth / 2) / 100;
        const moveY = (mouseY - window.innerHeight / 2) / 100;

        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Prevent Scrolling on Home Page
if (document.body.classList.contains('home')) {
    document.body.style.overflow = 'hidden';
}

document.querySelector(".main-image").src = "assets/zyn.png";