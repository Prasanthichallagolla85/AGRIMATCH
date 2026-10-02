"use client";

import { createContext, useContext } from "react";
import { TRANSLATIONS, LangCode } from "@/lib/translations";

export const LanguageContext = createContext<{
  lang: LangCode;
  t: (typeof TRANSLATIONS)[LangCode];
}>({
  lang: "EN",
  t: TRANSLATIONS["EN"],
});

export const useLang = () => useContext(LanguageContext);
