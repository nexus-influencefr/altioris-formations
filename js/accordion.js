// ============================================
// ACCORDÉON - SYSTÈME DE PLIAGE/DÉPLIAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Accordéons principaux
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const accordion = this.closest('.accordion');
            const content = accordion.querySelector('.accordion-content');
            const icon = this.querySelector('svg');
            
            // Fermer tous les autres accordéons si nécessaire
            // (décommentez si vous voulez un comportement "accordéon" strict)
            // accordionHeaders.forEach(otherHeader => {
            //     if (otherHeader !== this) {
            //         otherHeader.setAttribute('aria-expanded', 'false');
            //         otherHeader.closest('.accordion').querySelector('.accordion-content').style.maxHeight = null;
            //         otherHeader.querySelector('svg').style.transform = 'rotate(0deg)';
            //     }
            // });
            
            // Toggle l'état actuel
            this.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
    
    // Accordéons secondaires (sous-sections)
    const accordionSubHeaders = document.querySelectorAll('.accordion-sub-header');
    
    accordionSubHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const content = this.nextElementSibling;
            const icon = this.querySelector('svg');
            
            this.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});
