// i18n desativado para reduzir dependências
// Para ativar, instale: npm install i18next react-i18next

// Importar traduções (estrutura para futura implementação)
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';
import esES from './locales/es-ES.json';

// Dados de traduções disponíveis para futura implementação
export const translations = {
    'pt-BR': ptBR,
    'en-US': enUS,
    'es-ES': esES
};

// Função placeholder para futura implementação de i18n
const t = (key: string, language: string = 'pt-BR') => {
    const langData = translations[language as keyof typeof translations];
    return langData?.[key] || key;
};

export { t };

// Placeholder para compatibilidade com código existente
const i18n = {
    t,
    language: 'pt-BR',
    changeLanguage: (lang: string) => {
        console.log(`Language changed to: ${lang}`);
    }
};

export default i18n;
