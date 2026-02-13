// ============================================
// CHATBOT WIDGET - Altioris Formation
// ============================================

(function() {
    'use strict';

    const BOT_NAME = 'Altioris';
    const WELCOME_MSG = 'Bonjour ! Je suis l\'assistant d\'Altioris Formation. Posez-moi une question sur nos formations, la certification QUALIOPI ou prenez rendez-vous. Comment puis-je vous aider ?';

    const REPLIES = {
        formation: 'Nous proposons des formations en langues, IA & digital, comptabilité, bureautique, vente & marketing, santé et sécurité, et bien d\'autres. Découvrez tout notre catalogue sur la page <a href="formations.html">Formations</a>.',
        formations: 'Nous proposons des formations en langues, IA & digital, comptabilité, bureautique, vente & marketing, santé et sécurité, et bien d\'autres. Découvrez tout notre catalogue sur la page <a href="formations.html">Formations</a>.',
        qualiopi: 'Altioris Formation est certifié QUALIOPI. Cette certification atteste de la qualité des processus mis en œuvre pour le développement des compétences. Plus d\'infos sur notre page <a href="documents.html#qualiopi">Documents</a>.',
        contact: 'Vous pouvez nous joindre par téléphone au <a href="tel:0789651792">07 89 65 17 92</a>, par email à <a href="mailto:formation@altiorisformation.com">formation@altiorisformation.com</a>, ou via notre formulaire sur la page <a href="contact.html">Contact</a>.',
        rendez: 'Pour prendre rendez-vous, appelez-nous au <a href="tel:0789651792">07 89 65 17 92</a> ou remplissez le formulaire sur notre page <a href="contact.html">Contact</a>.',
        adresse: 'Nous sommes situés au 49 avenue d\'Ièna, 75116 Paris. Retrouvez le plan sur notre page <a href="contact.html">Contact</a>.',
        prix: 'Les tarifs et financements dépendent du type de formation et de votre situation. Un conseiller peut vous faire une proposition personnalisée : <a href="contact.html">Contact</a>.',
        financement: 'Plusieurs dispositifs (OPCO, CPF, etc.) peuvent financer vos formations. Consultez la page <a href="informations.html">Informations</a> ou contactez-nous pour un conseil personnalisé.',
        bonjour: 'Bonjour ! Comment puis-je vous aider ?',
        merci: 'Je vous en prie ! N\'hésitez pas si vous avez d\'autres questions.',
        default: 'Merci pour votre message. Un conseiller Altioris vous recontactera si besoin. Vous pouvez aussi nous appeler au <a href="tel:0789651792">07 89 65 17 92</a> ou nous écrire à <a href="mailto:formation@altiorisformation.com">formation@altiorisformation.com</a>.'
    };

    function getBotReply(text) {
        const t = text.toLowerCase().trim();
        if (/formation(s)?|catalogue|domaine/.test(t)) return REPLIES.formation;
        if (/qualiopi|qualité|certif/.test(t)) return REPLIES.qualiopi;
        if (/contact|joindre|écrire|email/.test(t)) return REPLIES.contact;
        if (/rendez-vous|rdv|rendez vous/.test(t)) return REPLIES.rendez;
        if (/adresse|où|ou |localisation|paris/.test(t)) return REPLIES.adresse;
        if (/prix|tarif|coût/.test(t)) return REPLIES.prix;
        if (/financement|opco|cpf|payer/.test(t)) return REPLIES.financement;
        if (/bonjour|salut|hello/.test(t)) return REPLIES.bonjour;
        if (/merci/.test(t)) return REPLIES.merci;
        return REPLIES.default;
    }

    function initChatbot() {
        let wrap = document.getElementById('chatbot-widget');
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.id = 'chatbot-widget';
            wrap.className = 'chatbot-widget';
            wrap.setAttribute('aria-label', 'Assistant de chat Altioris Formation');
            wrap.innerHTML = `
                <div class="chatbot-panel" id="chatbot-panel" role="dialog" aria-label="Fenêtre de conversation" aria-hidden="true">
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <span class="chatbot-avatar" aria-hidden="true">A</span>
                            <div>
                                <strong class="chatbot-title">${BOT_NAME}</strong>
                                <span class="chatbot-status">En ligne</span>
                            </div>
                        </div>
                        <button type="button" class="chatbot-close" id="chatbot-close" aria-label="Fermer le chat">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        </button>
                    </div>
                    <div class="chatbot-messages" id="chatbot-messages" role="log" aria-live="polite">
                        <div class="chatbot-msg chatbot-msg-bot">
                            <span class="chatbot-msg-avatar">A</span>
                            <div class="chatbot-msg-bubble">
                                <p>${WELCOME_MSG}</p>
                            </div>
                        </div>
                    </div>
                    <form class="chatbot-form" id="chatbot-form">
                        <label for="chatbot-input" class="sr-only">Votre message</label>
                        <input type="text" id="chatbot-input" class="chatbot-input" placeholder="Écrivez votre message..." autocomplete="off" maxlength="500">
                        <button type="submit" class="chatbot-send" aria-label="Envoyer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </form>
                </div>
                <button type="button" class="chatbot-toggle" id="chatbot-toggle" aria-label="Ouvrir le chat" aria-expanded="false">
                    <svg class="chatbot-icon-open" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <svg class="chatbot-icon-close" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            `;
            document.body.appendChild(wrap);
        }

        const panel = wrap.querySelector('#chatbot-panel') || document.getElementById('chatbot-panel');
        const toggle = wrap.querySelector('#chatbot-toggle') || document.getElementById('chatbot-toggle');
        const closeBtn = wrap.querySelector('#chatbot-close') || document.getElementById('chatbot-close');
        const form = wrap.querySelector('#chatbot-form') || document.getElementById('chatbot-form');
        const input = wrap.querySelector('#chatbot-input') || document.getElementById('chatbot-input');
        const messagesEl = wrap.querySelector('#chatbot-messages') || document.getElementById('chatbot-messages');

        if (!panel || !toggle || !messagesEl) return;

        /* Toujours fermé au chargement : bouton Chat à droite, fenêtre cachée */
        panel.classList.remove('chatbot-panel-open');
        toggle.classList.remove('chatbot-toggle-open');

        function scrollToBottom() {
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }

        function addMessage(text, isBot, isHtml) {
            const div = document.createElement('div');
            div.className = 'chatbot-msg ' + (isBot ? 'chatbot-msg-bot' : 'chatbot-msg-user');
            if (isBot) {
                div.innerHTML = `<span class="chatbot-msg-avatar">A</span><div class="chatbot-msg-bubble"><p>${isHtml ? text : escapeHtml(text)}</p></div>`;
            } else {
                div.innerHTML = `<div class="chatbot-msg-bubble"><p>${escapeHtml(text)}</p></div>`;
            }
            messagesEl.appendChild(div);
            scrollToBottom();
        }

        function escapeHtml(s) {
            const div = document.createElement('div');
            div.textContent = s;
            return div.innerHTML;
        }

        function openChat() {
            panel.classList.add('chatbot-panel-open');
            panel.setAttribute('aria-hidden', 'false');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.classList.add('chatbot-toggle-open');
            if (input) input.focus();
        }

        function closeChat() {
            panel.classList.remove('chatbot-panel-open');
            panel.setAttribute('aria-hidden', 'true');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('chatbot-toggle-open');
        }

        toggle.addEventListener('click', function() {
            if (panel.classList.contains('chatbot-panel-open')) closeChat();
            else openChat();
        });

        if (closeBtn) closeBtn.addEventListener('click', closeChat);

        if (form && input) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const text = input.value.trim();
                if (!text) return;
                addMessage(text, false);
                input.value = '';
                const reply = getBotReply(text);
                setTimeout(function() {
                    addMessage(reply, true, true);
                }, 400);
            });
        }

        scrollToBottom();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();
