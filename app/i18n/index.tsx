"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
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
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("lang");
    setLangState(param === "es" ? "es" : "en");
    setMounted(true);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", l);
    window.history.replaceState(null, "", url.toString());
  }, []);

  const t = lang === "en" ? en : es;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {!mounted ? <LoadingScreen /> : children}
    </LangContext.Provider>
  );
}

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#111111]">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-brown-500 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export function useTranslations() {
  return useContext(LangContext);
}
