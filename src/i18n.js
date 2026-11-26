import React from 'react'
import * as en from './content.js'
import * as ar from './content.ar.js'

export const content = { en, ar }
export const LANGS = { en: { dir: 'ltr' }, ar: { dir: 'rtl' } }

const STORAGE_KEY = 'hf-lang'

export function initialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (fromUrl in LANGS) return fromUrl
  } catch {
    /* ignore */
  }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved in LANGS) return saved
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

export function persistLang(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* storage unavailable */
  }
  try {
    const url = new URL(window.location.href)
    if (lang === 'en') url.searchParams.delete('lang')
    else url.searchParams.set('lang', lang)
    window.history.replaceState(null, '', url)
  } catch {
    /* ignore */
  }
}

export function applyDocumentLang(lang) {
  const c = content[lang]
  const root = document.documentElement
  root.lang = lang
  root.dir = LANGS[lang].dir
  document.title = c.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', c.meta.description)
}

export const LangContext = React.createContext({ lang: 'en', c: en, setLang: () => {} })
export const useLang = () => React.useContext(LangContext)
