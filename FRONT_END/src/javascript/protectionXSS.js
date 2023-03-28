// Fonction pour échapper les caractères spéciaux HTML
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Fonction pour filtrer les entrées utilisateur et échapper les caractères spéciaux HTML
function sanitizeInput(input) {
    if (input === null || input === undefined) {
        return '';
    }

    // Filtrage des caractères spéciaux et échappement HTML
    const sanitizedInput = escapeHtml(input);

    return sanitizedInput;
}

// Sélectionnez tous les éléments de formulaire avec un ID
const formInputs = document.querySelectorAll('input[id], textarea[id]');

// Filtrer automatiquement tout changement dans les éléments de formulaire
formInputs.forEach((input) => {
    input.addEventListener('DOMSubtreeModified', () => {
        const sanitizedInput = sanitizeInput(input.value);
        input.value = sanitizedInput;
    });
});

