// ⚠️ FICHIER DE CONFIGURATION - NE JAMAIS COMMIT SUR GITHUB !
// Ce fichier contient tes clés API privées

const CONFIG = {
    // === CLAUDE API ===
    // Pour obtenir ta clé :
    // 1. Va sur https://console.anthropic.com
    // 2. Crée un compte
    // 3. Clique sur "API Keys" puis "Create Key"
    // 4. Copie la clé qui commence par "sk-ant-"
    claudeApiKey: '', // Exemple : 'sk-ant-api03-xxxxx'
    
    // === YOUTUBE DATA API ===
    // Pour obtenir ta clé :
    // 1. Va sur https://console.cloud.google.com
    // 2. Crée un nouveau projet
    // 3. Active "YouTube Data API v3"
    // 4. Crée des identifiants (Clé API)
    // 5. Copie la clé
    youtubeApiKey: '', // Exemple : 'AIzaSyxxxxx'
    
    // === NEWS API ===
    // Pour obtenir ta clé :
    // 1. Va sur https://newsapi.org
    // 2. Inscris-toi gratuitement
    // 3. Copie ta clé API
    newsApiKey: '' // Exemple : 'a1b2c3d4e5f6xxxxx'
};

// Pour utiliser ce fichier :
// 1. Remplis les clés ci-dessus
// 2. Dans studytrack.html, remplace la section CONFIG par :
//    <script src="config.js"></script>
// 3. Le reste du code utilisera automatiquement ces clés

// IMPORTANT :
// - Garde ce fichier secret
// - Ne le partage jamais publiquement
// - Ne le commit pas sur GitHub
// - Ajoute "config.js" à ton .gitignore

// Export pour Node.js (si besoin)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
