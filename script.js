window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(85, 85, 85, 0.9)';
    } else {
        navbar.style.backgroundColor = 'cadetblue';
    }
});
