import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const loadTranslation = (locale: string, namespaces: string[]) => {
  return serverSideTranslations(locale!, namespaces);
};
