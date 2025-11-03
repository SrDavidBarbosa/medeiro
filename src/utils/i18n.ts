import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traduções
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';
import esES from './locales/es-ES.json';

const resources = {
    'pt-BR': {
        translation: ptBR
    },
    'en-US': {
        translation: enUS
    },
    'es-ES': {
        translation: esES
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt-BR', // idioma padrão
        fallbackLng: 'pt-BR',
        
        // Configurações de interpolação
        interpolation: {
            escapeValue: false
        },

        // Configurações de detecção
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage']
        },

        // Configurações de performance
        preload: ['pt-BR', 'en-US', 'es-ES'],

        // Debug mode em desenvolvimento
        debug: process.env.NODE_ENV === 'development',

        // Configurações de namespace
        defaultNS: 'translation',
        ns: ['translation'],

        // Configurações de fallback
        fallbackLng: {
            'pt-BR': ['pt-BR'],
            'en': ['en-US'],
            'es': ['es-ES'],
            default: ['pt-BR']
        },

        // Configurações de keys
        keySeparator: '.',
        nsSeparator: ':',

        // Configurações de pluralização
        pluralSeparator: '_',

        // Configurações de contexto
        contextSeparator: '_',

        // Configurações de joined values
        returnObjects: true,

        // Configurações de save missing
        saveMissing: process.env.NODE_ENV === 'development',
        saveMissingTo: 'current',

        // Configurações de update missing
        updateMissing: false,

        // Configurações de preload
        preload: ['pt-BR', 'en-US', 'es-ES'],

        // Configurações de cleanup
        cleanupOutputOnName: false,

        // Configurações de postProcess
        postProcess: [],

        // Configurações de return emptyString
        returnEmptyString: true,

        // Configurações de return null
        returnNull: false,

        // Configurações de return objects
        returnObjects: true,

        // Configurações de joinArrays
        joinArrays: '\n',

        // Configurações de appendNamespaceToCIMode
        appendNamespaceToCIMode: false,

        // Configurações de ignoreJSONStructure
        ignoreJSONStructure: false,

        // Configurações de supportedLngs
        supportedLngs: ['pt-BR', 'en-US', 'es-ES'],

        // Configurações de nonExplicitSupportedLngs
        nonExplicitSupportedLngs: true
    });

export default i18n;