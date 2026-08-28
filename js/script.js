(function () {
    var nav = document.getElementById('mainNav');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.navbar .nav-link'));
    var sections = navLinks
        .map(function (link) {
            var id = link.getAttribute('href');
            return id && id.charAt(0) === '#' ? document.querySelector(id) : null;
        })
        .filter(Boolean);

    function onScroll() {
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 40);
        }

        var pos = window.scrollY + 120;
        var currentId = 'home';
        sections.forEach(function (section) {
            if (section.offsetTop <= pos) {
                currentId = '#' + section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === currentId);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        revealEls.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        revealEls.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    var volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (volunteerForm.checkValidity()) {
                var success = document.getElementById('formSuccess');
                if (success) {
                    success.classList.remove('d-none');
                    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                volunteerForm.reset();
            }
            volunteerForm.classList.add('was-validated');
        });
    }

    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var note = document.getElementById('newsletterNote');
            if (newsletterForm.checkValidity()) {
                if (note) {
                    note.textContent = 'Subscribed! Thank you for joining us.';
                }
                newsletterForm.reset();
                newsletterForm.classList.remove('was-validated');
            } else {
                newsletterForm.classList.add('was-validated');
            }
        });
    }

    document.getElementById('year').textContent = new Date().getFullYear();
})();