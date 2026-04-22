"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { en, type Translations } from "./translations/en";
import { es } from "./translations/es";

export type Lang = "en" | "es";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = lang === "en" ? en : es;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useTranslations() {
  return useContext(LangContext);
}
