import ptBR from '../languages/pt-br.json';
import enUS from '../languages/en-us.json';
import itIT from '../languages/It.json';
import esES from '../languages/es.json';

const dictionaries = {
  'pt-BR': ptBR,
  'pt': ptBR,
  'en-US': enUS,
  'en': enUS,
  'it-IT': itIT,
  'it': itIT,
  'es-ES': esES,
  'es': esES,
};

// Detect current language from HTML lang or WordPress locale
export function getCurrentLocale() {
  if (typeof window !== 'undefined') {
    if (window.wp && window.wp.i18n && typeof window.wp.i18n.getLocaleData === 'function') {
      const wpLocale = window.wp.i18n.getLocaleData()['']?.lang;
      if (wpLocale && dictionaries[wpLocale]) return wpLocale;
    }
    const htmlLang = document.documentElement.lang;
    if (htmlLang) {
      if (dictionaries[htmlLang]) return htmlLang;
      const base = htmlLang.split('-')[0];
      if (dictionaries[base]) return base;
    }
    const navLang = navigator.language || navigator.userLanguage;
    if (navLang) {
      if (dictionaries[navLang]) return navLang;
      const base = navLang.split('-')[0];
      if (dictionaries[base]) return base;
    }
  }
  return 'pt-BR'; // default
}

export function t(path, placeholders = {}) {
  const locale = getCurrentLocale();
  const dict = dictionaries[locale] || dictionaries['pt-BR'] || ptBR;

  const parts = path.split('.');
  let val = dict;
  for (const part of parts) {
    if (val && typeof val === 'object' && part in val) {
      val = val[part];
    } else {
      // Fallback to pt-BR if missing
      let fb = ptBR;
      for (const p of parts) {
        if (fb && typeof fb === 'object' && p in fb) {
          fb = fb[p];
        } else {
          fb = path;
          break;
        }
      }
      val = fb;
      break;
    }
  }

  if (typeof val === 'string') {
    return val.replace(/{(\w+)}/g, (_, key) => placeholders[key] ?? `{${key}}`);
  }
  return path;
}
