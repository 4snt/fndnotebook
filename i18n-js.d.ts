declare module "i18n-js" {
  export interface Translations {
    [key: string]: any;
  }

  interface I18n {
    locale: string;
    fallbacks: boolean;
    translations: Translations;
    t: (scope: string, options?: any) => string;
  }

  const i18n: I18n;
  export default i18n;
}
