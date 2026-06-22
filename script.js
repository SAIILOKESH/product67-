document.addEventListener('DOMContentLoaded', function () {

    // ==================== Theme Toggle ====================
    var themeToggle = document.getElementById('themeToggle');
    var savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // ==================== Mobile Nav Toggle ====================
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });

    // ==================== Active Nav Link on Scroll ====================
    var sections = document.querySelectorAll('section[id]');
    var navbar = document.getElementById('navbar');

    function updateActiveLink() {
        var scrollY = window.scrollY + 100;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            var link = document.querySelector('.nav-link[href="#' + id + '"]');

            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });

        // Navbar scroll shadow
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // ==================== Scroll Animations ====================
    var animElements = document.querySelectorAll('.animate-on-scroll');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animElements.forEach(function (el) {
        observer.observe(el);
    });

    // ==================== Counter Animation ====================
    var statNumbers = document.querySelectorAll('.stat-number');

    var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var target = parseInt(entry.target.getAttribute('data-target'), 10);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (num) {
        counterObserver.observe(num);
    });

    function animateCounter(element, target) {
        var current = 0;
        var duration = 1500;
        var step = Math.ceil(target / (duration / 30));

        var timer = setInterval(function () {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = current;
        }, 30);
    }

    // ==================== Contact Form ====================
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var btn = contactForm.querySelector('button[type="submit"]');
        var originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(function () {
            btn.textContent = 'Message Sent!';
            btn.style.backgroundColor = '#22c55e';
            contactForm.reset();

            setTimeout(function () {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 2000);
        }, 1000);
    });
});
