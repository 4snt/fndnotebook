import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "./src/locales/en.json";
import pt from "./src/locales/pt.json";

// Configurar os idiomas
i18n.translations = {
  en,
  pt,
};

// Definir o idioma padrão como o do sistema
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default i18n;
