function scrollToSection(id) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    const targetLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${id}`);
    if (targetLink) targetLink.classList.add('active');
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Optional: Add 'scrolling' class on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
});



