/**
 * Lenis - Scroll ultra fluide sur tout le site
 * Charge depuis CDN et initialise le smooth scroll
 */
(async function initLenis() {
    try {
        const { default: Lenis } = await import('https://cdn.jsdelivr.net/npm/lenis@1.0.42/+esm');

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            autoRaf: true,
        });

        // Sync navbar avec la position de scroll Lenis
        const navbar = document.querySelector('.navbar');
        lenis.on('scroll', ({ scroll }) => {
            if (navbar) {
                if (scroll > 50) navbar.classList.add('scrolled');
                else navbar.classList.remove('scrolled');
            }
        });

        // Liens ancres : scroll fluide vers la cible
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        lenis.scrollTo(target, { offset: 0, duration: 1.2 });
                    }
                }
            });
        });

        // Exposer pour debug si besoin
        window.lenis = lenis;
    } catch (err) {
        console.warn('Lenis non chargé, scroll natif utilisé.', err);
    }
})();
