# Altioris Formation - Site Web Refondu

## 📋 Présentation

Ce site web a été entièrement refondu pour Altioris Formation avec un design moderne, professionnel et institutionnel, tout en respectant strictement le contenu existant.

## 🎨 Caractéristiques du Design

### Charte Graphique
- **Couleur principale** : Violet #6B1E5B (boutons, liens, accents)
- **Fond clair** : #F3F1EA
- **Texte principal** : #2B2B2B
- **Logo** : À conserver tel quel (format actuel)

### Typographie
- **Titres** : Playfair Display (serif élégante et institutionnelle)
- **Texte courant** : Inter (sans-serif moderne et lisible)

### Inspirations
- Design inspiré de `elmformations.fr` et `formation-français.fr`
- Cartes modernes avec effets hover sobres
- Animations légères (fade-in au scroll)
- Grilles lisibles et uniformes
- Espaces blancs généreux

## 📁 Structure du Projet

```
/
├── index.html              # Page d'accueil
├── formations.html         # Page listant toutes les formations
├── documents.html          # Page des documents réglementaires
├── informations.html       # Page d'informations pratiques
├── a-propos.html          # Page À propos
├── contact.html           # Page de contact avec formulaire
├── css/
│   └── style.css          # Styles principaux
├── js/
│   └── main.js            # Scripts JavaScript (navigation, filtres, animations)
├── images/                # Dossier pour les images
│   ├── logo-altioris.png  # Logo Altioris (à ajouter)
│   ├── logo-qualiopi.png  # Logo QUALIOPI (à ajouter)
│   ├── hero-bg.jpg        # Image hero section (à ajouter)
│   └── ...
└── documents/             # Dossier pour les documents PDF
    ├── qualiopi-certification.pdf
    ├── accessibilite.pdf
    ├── cgv.pdf
    ├── mentions-legales.pdf
    └── ...
```

## ✅ À Compléter

### 1. Images (dossier `images/`)
Vous devez ajouter les images suivantes :

- **`logo-altioris.png`** : Logo Altioris Formation (hauteur recommandée : 50px pour le header)
- **`logo-qualiopi.png`** : Logo QUALIOPI officiel (si disponible)
- **`hero-bg.jpg`** : Image de fond pour la hero section de la page d'accueil
- **`formation-placeholder.jpg`** : Image par défaut pour les formations (ou images spécifiques par formation)
- **`team-placeholder.jpg`** : Photo par défaut pour les membres de l'équipe (ou photos spécifiques)

### 2. Documents PDF (dossier `documents/`)
Ajouter les documents réglementaires :

- **`qualiopi-certification.pdf`** : Certificat QUALIOPI
- **`accessibilite.pdf`** : Déclaration d'accessibilité
- **`cgv.pdf`** : Conditions Générales de Vente
- **`mentions-legales.pdf`** : Mentions légales
- **`statuts.pdf`** : Statuts de l'organisme
- Autres documents si nécessaire

### 3. Contenu Textuel

#### Page d'Accueil (`index.html`)
- ✅ Structure HTML créée
- ⚠️ Remplacer les textes placeholder par le contenu exact du site existant
- ⚠️ Vérifier les domaines de formation (4 cartes actuellement)
- ⚠️ Mettre à jour la section "Formations basées sur vos objectifs"

#### Page Formations (`formations.html`)
- ✅ Structure HTML créée
- ⚠️ Ajouter toutes les formations existantes dans la grille
- ⚠️ Définir les catégories correctes pour chaque formation
- ⚠️ Compléter les informations (durée, public, modalité) pour chaque formation

#### Page Documents (`documents.html`)
- ✅ Structure HTML créée
- ✅ Section QUALIOPI mise en avant
- ⚠️ Vérifier que tous les documents sont présents
- ⚠️ Ajouter les liens de téléchargement vers les PDF réels

#### Page À Propos (`a-propos.html`)
- ✅ Structure HTML créée
- ⚠️ Remplacer les textes placeholder par le contenu exact du site existant
- ⚠️ Ajouter les membres de l'équipe avec leurs photos et descriptions

#### Page Informations (`informations.html`)
- ✅ Structure HTML créée
- ⚠️ Compléter les informations pratiques (horaires, adresse, téléphone, email)
- ⚠️ Vérifier les modalités de formation
- ⚠️ Compléter les informations sur le financement

#### Page Contact (`contact.html`)
- ✅ Structure HTML créée avec formulaire
- ⚠️ Compléter les informations de contact (adresse, téléphone, email)
- ⚠️ Configurer le backend pour recevoir les emails du formulaire (ou utiliser un service comme Formspree, EmailJS, etc.)

### 4. Configuration du Formulaire de Contact

Le formulaire de contact nécessite une configuration backend. Options possibles :

1. **Service tiers** : Formspree, EmailJS, Netlify Forms
2. **Backend PHP** : Créer un fichier `contact.php` pour traiter le formulaire
3. **Backend Node.js** : Créer une API pour gérer l'envoi d'emails

Dans `js/main.js`, modifier la fonction de soumission du formulaire pour intégrer votre solution.

## 🎯 Priorité QUALIOPI

La certification QUALIOPI est mise en avant sur :

1. **Page d'accueil** : Section dédiée avec logo et mention
2. **Footer** : Logo et mention sur toutes les pages
3. **Page Documents** : Section mise en avant en haut de page
4. **Page À propos** : Section dédiée

⚠️ **Important** : Ne pas modifier le wording officiel lié à QUALIOPI. Conserver exactement le texte existant.

## 📱 Responsive Design

Le site est entièrement responsive :
- **Desktop** : > 1024px
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px

Testez sur différents appareils pour vérifier l'affichage.

## ♿ Accessibilité

Le site respecte les standards d'accessibilité :
- Contraste suffisant entre texte et fond
- Tailles de texte lisibles (minimum 16px pour le corps)
- Attributs `alt` sur les images
- Navigation au clavier fonctionnelle
- Balises sémantiques HTML5

## 🚀 Installation et Mise en Ligne

1. **Local** : Ouvrir `index.html` dans un navigateur ou utiliser un serveur local
2. **Production** : Uploader tous les fichiers sur votre hébergeur
3. **Configuration** : Configurer le backend pour le formulaire de contact
4. **SEO** : Vérifier les meta descriptions et optimiser si nécessaire

## 📝 Notes Importantes

- ⚠️ **Ne pas modifier le contenu textuel** : Respecter strictement les textes existants du site actuel
- ⚠️ **Conserver le logo** : Utiliser le logo Altioris Formation tel quel
- ⚠️ **QUALIOPI** : Mettre en valeur la certification sans surcommunication
- ⚠️ **Tester** : Vérifier tous les liens, images et documents avant la mise en ligne

## 🔧 Technologies Utilisées

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript (Vanilla JS, pas de framework)
- Google Fonts (Playfair Display, Inter)

## 📧 Support

Pour toute question ou modification, se référer aux spécifications initiales du projet.

---

**Date de création** : 2024  
**Organisme** : Altioris Formation  
**Certification** : QUALIOPI
