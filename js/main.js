// ============================================
// NAVIGATION MOBILE
// Desktop : menu dans la navbar. Mobile : menu déplacé dans body → panneau à droite du SITE (pas dans la navbar).
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    var navMenu = document.querySelector('#nav-menu');
    var btn = document.querySelector('.mobile-menu-toggle');
    var navWrapper = document.querySelector('.nav-wrapper');

    if (!navMenu || !btn) return;

    function isMobile() {
        return window.innerWidth <= 1200;
    }

    function placeMenuForViewport() {
        if (isMobile()) {
            if (navMenu.parentNode !== document.body) {
                document.body.appendChild(navMenu);
            }
        } else {
            if (navWrapper && navMenu.parentNode !== navWrapper) {
                navWrapper.appendChild(navMenu);
            }
        }
    }

    placeMenuForViewport();
    window.addEventListener('resize', function() {
        placeMenuForViewport();
        if (window.innerWidth > 1200 && navMenu.classList.contains('active')) closeMenu();
    });

    function openMenu() {
        navMenu.classList.add('active');
        navMenu.setAttribute('aria-hidden', 'false');
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navMenu.classList.remove('active');
        navMenu.setAttribute('aria-hidden', 'true');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }

    function isOpen() {
        return navMenu.classList.contains('active');
    }

    btn.addEventListener('click', function() {
        if (isOpen()) closeMenu();
        else openMenu();
    });

    document.querySelectorAll('.nav-menu a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isOpen()) closeMenu();
    });

    document.addEventListener('click', function(e) {
        if (!isOpen()) return;
        if (navMenu.contains(e.target) || btn.contains(e.target)) return;
        closeMenu();
    });
});

// ============================================
// FILTRES FORMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const formationCards = document.querySelectorAll('.formation-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Retirer la classe active de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                // Filtrer les cartes
                formationCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

// ============================================
// ANIMATIONS AU SCROLL - SYSTÈME PREMIUM AVEC STAGGER
// ============================================

(function() {
    'use strict';
    
    // Options d'observation optimisées
    const defaultObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };
    
    // Animation avec stagger professionnel
    function animateWithStagger(elements, delay = 80) {
        elements.forEach((element, index) => {
            // Initialiser l'état invisible avec CSS
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px) scale(0.98)';
            element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(elements).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                        entry.target.classList.add('animate-in');
                    }, index * delay);
                    observer.unobserve(entry.target);
                }
            });
        }, defaultObserverOptions);
        
        elements.forEach(element => observer.observe(element));
    }
    
    // Animation simple pour les sections
    function animateSections(sections) {
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('section-visible');
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '-60px 0px' });
        
        sections.forEach(section => sectionObserver.observe(section));
    }
    
    // Initialisation au chargement
    document.addEventListener('DOMContentLoaded', function() {
        // Animer les cartes avec stagger
        const cardSelectors = [
            '.domaine-card',
            '.formation-card',
            '.feature-item',
            '.info-card',
            '.document-card',
            '.objectif-card',
            '.value-item',
            '.parcours-step-card',
            '.statut-item',
            '.action-card',
            '.opco-card',
            '.opco-step',
            '.obligation-card',
            '.concerned-block'
        ];
        
        cardSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                animateWithStagger(elements, 100);
            }
        });
        
        // Animer les sections
        const sections = document.querySelectorAll('section:not(.hero):not(.navbar)');
        animateSections(sections);
    });
})();

// ============================================
// FORMULAIRE DE CONTACT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validation basique
            const nom = document.getElementById('nom').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const rgpd = document.querySelector('input[name="rgpd"]').checked;

            if (!nom || !email || !message || !rgpd) {
                alert('Veuillez remplir tous les champs obligatoires et accepter la politique de confidentialité.');
                return;
            }

            // Validation email basique
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Veuillez entrer une adresse email valide.');
                return;
            }

            // Ici, vous pouvez ajouter l'envoi du formulaire via AJAX
            // Pour l'instant, on simule un envoi réussi
            alert('Merci pour votre message ! Nous vous recontacterons rapidement.');
            contactForm.reset();
            
            // Dans un cas réel, vous feriez une requête AJAX ici :
            /*
            fetch('votre-endpoint.php', {
                method: 'POST',
                body: new FormData(contactForm)
            })
            .then(response => response.json())
            .then(data => {
                alert('Message envoyé avec succès !');
                contactForm.reset();
            })
            .catch(error => {
                alert('Une erreur est survenue. Veuillez réessayer.');
            });
            */
        });
    }
});

// ============================================
// SMOOTH SCROLL & NAVBAR
// Gérés par Lenis (js/lenis-init.js) quand chargé.
// Fallback ci-dessous si Lenis non disponible.
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function updateNavbar() {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    // Ancres : fallback smooth (Lenis prend le relais si chargé)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target && !window.lenis) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
