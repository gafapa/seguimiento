const I18n = {
    currentLang: 'es',
    manifestUrl: null,

    init: () => {
        const saved = localStorage.getItem('planificador_lang');
        if (saved && TRANSLATIONS[saved]) {
            I18n.currentLang = saved;
        } else {
            I18n.currentLang = 'es';
        }
        I18n.apply();
        I18n.renderLanguageSelector();
    },

    setLanguage: lang => {
        if (!TRANSLATIONS[lang]) return;
        I18n.currentLang = lang;
        localStorage.setItem('planificador_lang', lang);
        I18n.apply();

        if (app) {
            if (!document.getElementById('view-dashboard').classList.contains('hidden')) {
                app.renderDashboard();
            }
            if (!document.getElementById('view-detail').classList.contains('hidden')) {
                const subjectId = AppState.currentSubjectId;
                if (subjectId) {
                    const subject = AppState.data.subjects.find(item => item.id === subjectId);
                    if (subject) {
                        app.renderUnitsList(subject);
                        app.renderCalendar(subject);
                    }
                }
            }
        }
    },

    t: key => {
        const keys = key.split('.');
        let value = TRANSLATIONS[I18n.currentLang];

        for (const currentKey of keys) {
            if (value && value[currentKey] !== undefined) {
                value = value[currentKey];
            } else {
                return key;
            }
        }

        return value;
    },

    apply: () => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.innerText = I18n.t(key);
        });

        document.querySelectorAll('[data-i18n-vals]').forEach(element => {
            const rules = element.getAttribute('data-i18n-vals').split(';');
            rules.forEach(rule => {
                const [attribute, key] = rule.split(':');
                if (attribute && key) {
                    element.setAttribute(attribute, I18n.t(key));
                }
            });
        });

        document.title = I18n.t('title');
        document.documentElement.lang = I18n.currentLang;
        I18n.applyManifest();
    },

    applyManifest: () => {
        const manifestLink = document.querySelector('link[rel="manifest"]');
        if (!manifestLink) return;

        const baseUrl = new URL('./', window.location.href);

        const manifest = {
            name: I18n.t('app_name'),
            short_name: I18n.t('app_short_name'),
            description: I18n.t('app_description'),
            lang: I18n.currentLang,
            start_url: baseUrl.href,
            scope: baseUrl.href,
            display: "standalone",
            orientation: "portrait-primary",
            background_color: "#f8f9fa",
            theme_color: "#4F46E5",
            icons: [
                {
                    src: new URL('icons/icon.svg', baseUrl).href,
                    sizes: "any",
                    type: "image/svg+xml",
                    purpose: "any maskable"
                }
            ]
        };

        const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
        const manifestUrl = URL.createObjectURL(manifestBlob);

        if (I18n.manifestUrl) {
            URL.revokeObjectURL(I18n.manifestUrl);
        }

        I18n.manifestUrl = manifestUrl;
        manifestLink.href = manifestUrl;
    },

    renderLanguageSelector: () => {
        const container = document.getElementById('lang-selector-container');
        if (!container) return;

        const languages = [
            ['es', 'Español'],
            ['gl', 'Galego'],
            ['ca', 'Català'],
            ['eu', 'Euskara'],
            ['en', 'English'],
            ['fr', 'Français'],
            ['de', 'Deutsch'],
            ['pt', 'Português']
        ];

        container.innerHTML = `
            <select onchange="I18n.setLanguage(this.value)" class="p-2 border rounded">
                ${languages.map(([code, label]) => `
                    <option value="${code}" ${I18n.currentLang === code ? 'selected' : ''}>${label}</option>
                `).join('')}
            </select>
        `;
    }
};
