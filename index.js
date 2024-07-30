document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    let isScrolling;

    function closeMenu() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }

    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

    window.addEventListener('scroll', function() {
        clearTimeout(isScrolling);
        
        if (menuToggle.classList.contains('active')) {
            closeMenu();
        }

        isScrolling = setTimeout(function() {
        }, 66);

        let scrollPosition = window.pageYOffset;
        document.querySelectorAll('.parallax').forEach(function(section) {
            let speed = 0.5;
            section.style.backgroundPositionY = -(scrollPosition * speed) + 'px';
        });
    });
});