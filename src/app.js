// VibeWords - Thematic Vocabulary Generator
// Built for writers who need more than a thesaurus

document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const generateBtn = document.getElementById('generate-btn');
    const results = document.getElementById('results');
    const emptyState = document.getElementById('empty-state');

    // Category containers
    const actionsContainer = document.getElementById('actions');
    const emotionsContainer = document.getElementById('emotions');
    const objectsContainer = document.getElementById('objects');
    const atmosphereContainer = document.getElementById('atmosphere');
    const metaphorsContainer = document.getElementById('metaphors');

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }

    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function createWordPill(word, category) {
        const pill = document.createElement('span');
        pill.className = `word-pill ${category}`;
        pill.textContent = word;
        pill.title = 'Click to copy';

        pill.addEventListener('click', () => {
            navigator.clipboard.writeText(word).then(() => {
                pill.classList.add('copied');
                showToast(`Copied: ${word}`);
                setTimeout(() => pill.classList.remove('copied'), 300);
            }).catch(() => {
                showToast('Failed to copy');
            });
        });

        return pill;
    }

    function renderWords(container, words, category) {
        container.innerHTML = '';
        const shuffled = shuffleArray(words);
        // Show 10-12 random words from the list
        const selection = shuffled.slice(0, Math.min(12, shuffled.length));
        selection.forEach(word => {
            container.appendChild(createWordPill(word, category));
        });
    }

    function generateWords() {
        const selectedTheme = themeSelect.value;

        if (!selectedTheme) {
            showToast('Please select a vibe first');
            return;
        }

        const theme = THEMES[selectedTheme];
        if (!theme) return;

        // Render each category
        renderWords(actionsContainer, theme.actions, 'action');
        renderWords(emotionsContainer, theme.emotions, 'emotion');
        renderWords(objectsContainer, theme.objects, 'object');
        renderWords(atmosphereContainer, theme.atmosphere, 'atmosphere');
        renderWords(metaphorsContainer, theme.metaphors, 'metaphor');

        // Show results, hide empty state
        results.classList.remove('hidden');
        emptyState.classList.add('hidden');
    }

    // Event listeners
    generateBtn.addEventListener('click', generateWords);

    themeSelect.addEventListener('change', () => {
        if (themeSelect.value) {
            generateWords();
        }
    });

    // Keyboard shortcut: Enter to regenerate
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && themeSelect.value) {
            generateWords();
        }
    });
});
