// Google Analytics 4, loaded only after the visitor consents.
//
// The measurement ID comes from the VITE_GA_MEASUREMENT_ID environment
// variable (set it in Vercel → Project → Settings → Environment Variables,
// then redeploy). Without it, analytics is fully disabled and no consent
// banner is shown.

export const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || '').trim()
export const analyticsEnabled = /^G-[A-Z0-9]+$/.test(GA_ID)

const CONSENT_KEY = 'hf-analytics-consent' // 'granted' | 'denied'

export function getConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* storage unavailable: the choice lasts for this page view only */
  }
  if (value === 'granted') loadAnalytics()
  else revokeAnalytics()
}

let loaded = false

export function loadAnalytics() {
  if (!analyticsEnabled || loaded) return
  loaded = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { anonymize_ip: true })
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
  document.head.appendChild(s)
}

function revokeAnalytics() {
  if (!analyticsEnabled) return
  // Stop further collection for this page and clear GA cookies.
  window[`ga-disable-${GA_ID}`] = true
  const host = window.location.hostname
  const domains = [host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`]
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim()
    if (name === '_ga' || name.startsWith('_ga_') || name === '_gid') {
      domains.forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${d}`
      })
      document.cookie = `${name}=; Max-Age=0; path=/`
    }
  })
}

// Send an event only if analytics is running (consent given).
export function track(event, params = {}) {
  if (loaded && typeof window.gtag === 'function') window.gtag('event', event, params)
}

export function initAnalytics() {
  if (analyticsEnabled && getConsent() === 'granted') loadAnalytics()
}
