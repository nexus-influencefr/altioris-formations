// ============================================
// OUTILS D'ACCESSIBILITÉ
// ============================================

let currentFontSize = 100;
const baseFontSize = 100;

// Augmenter le texte
function accessibilityIncreaseText() {
    currentFontSize += 10;
    if (currentFontSize > 200) currentFontSize = 200;
    document.documentElement.style.fontSize = currentFontSize + '%';
    localStorage.setItem('accessibilityFontSize', currentFontSize);
}

// Diminuer le texte
function accessibilityDecreaseText() {
    currentFontSize -= 10;
    if (currentFontSize < 80) currentFontSize = 80;
    document.documentElement.style.fontSize = currentFontSize + '%';
    localStorage.setItem('accessibilityFontSize', currentFontSize);
}

// Niveaux de gris
function accessibilityGrayscale() {
    document.body.classList.toggle('accessibility-grayscale');
    if (document.body.classList.contains('accessibility-grayscale')) {
        localStorage.setItem('accessibilityGrayscale', 'true');
    } else {
        localStorage.removeItem('accessibilityGrayscale');
    }
}

// Contraste élevé
function accessibilityHighContrast() {
    document.body.classList.toggle('accessibility-high-contrast');
    if (document.body.classList.contains('accessibility-high-contrast')) {
        localStorage.setItem('accessibilityHighContrast', 'true');
        // Désactiver les autres modes de contraste
        document.body.classList.remove('accessibility-negative-contrast');
        localStorage.removeItem('accessibilityNegativeContrast');
    } else {
        localStorage.removeItem('accessibilityHighContrast');
    }
}

// Contraste négatif
function accessibilityNegativeContrast() {
    document.body.classList.toggle('accessibility-negative-contrast');
    if (document.body.classList.contains('accessibility-negative-contrast')) {
        localStorage.setItem('accessibilityNegativeContrast', 'true');
        // Désactiver les autres modes de contraste
        document.body.classList.remove('accessibility-high-contrast');
        localStorage.removeItem('accessibilityHighContrast');
    } else {
        localStorage.removeItem('accessibilityNegativeContrast');
    }
}

// Fond clair
function accessibilityLightBackground() {
    document.body.classList.toggle('accessibility-light-bg');
    if (document.body.classList.contains('accessibility-light-bg')) {
        localStorage.setItem('accessibilityLightBg', 'true');
    } else {
        localStorage.removeItem('accessibilityLightBg');
    }
}

// Liens soulignés
function accessibilityUnderlineLinks() {
    document.body.classList.toggle('accessibility-underline-links');
    if (document.body.classList.contains('accessibility-underline-links')) {
        localStorage.setItem('accessibilityUnderlineLinks', 'true');
    } else {
        localStorage.removeItem('accessibilityUnderlineLinks');
    }
}

// Police lisible
function accessibilityReadableFont() {
    document.body.classList.toggle('accessibility-readable-font');
    if (document.body.classList.contains('accessibility-readable-font')) {
        localStorage.setItem('accessibilityReadableFont', 'true');
    } else {
        localStorage.removeItem('accessibilityReadableFont');
    }
}

// Réinitialiser
function accessibilityReset() {
    currentFontSize = baseFontSize;
    document.documentElement.style.fontSize = '';
    document.body.classList.remove(
        'accessibility-grayscale',
        'accessibility-high-contrast',
        'accessibility-negative-contrast',
        'accessibility-light-bg',
        'accessibility-underline-links',
        'accessibility-readable-font'
    );
    localStorage.removeItem('accessibilityFontSize');
    localStorage.removeItem('accessibilityGrayscale');
    localStorage.removeItem('accessibilityHighContrast');
    localStorage.removeItem('accessibilityNegativeContrast');
    localStorage.removeItem('accessibilityLightBg');
    localStorage.removeItem('accessibilityUnderlineLinks');
    localStorage.removeItem('accessibilityReadableFont');
}

// Restaurer les préférences au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Taille de police
    const savedFontSize = localStorage.getItem('accessibilityFontSize');
    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        document.documentElement.style.fontSize = currentFontSize + '%';
    }

    // Niveaux de gris
    if (localStorage.getItem('accessibilityGrayscale') === 'true') {
        document.body.classList.add('accessibility-grayscale');
    }

    // Contraste élevé
    if (localStorage.getItem('accessibilityHighContrast') === 'true') {
        document.body.classList.add('accessibility-high-contrast');
    }

    // Contraste négatif
    if (localStorage.getItem('accessibilityNegativeContrast') === 'true') {
        document.body.classList.add('accessibility-negative-contrast');
    }

    // Fond clair
    if (localStorage.getItem('accessibilityLightBg') === 'true') {
        document.body.classList.add('accessibility-light-bg');
    }

    // Liens soulignés
    if (localStorage.getItem('accessibilityUnderlineLinks') === 'true') {
        document.body.classList.add('accessibility-underline-links');
    }

    // Police lisible
    if (localStorage.getItem('accessibilityReadableFont') === 'true') {
        document.body.classList.add('accessibility-readable-font');
    }
});
