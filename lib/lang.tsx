"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "mn" | "en";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "mn",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("mn");
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}

export function t(obj: { mn: string; en: string }, lang: Lang): string {
  return obj[lang];
}
