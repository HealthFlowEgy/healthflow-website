import React from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Eye,
  FileCheck2,
  Fingerprint,
  Languages,
  Landmark,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Pill,
  Receipt,
  ScrollText,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  Users,
  X,
} from 'lucide-react'
import './App.css'
import healthflowLogo from './assets/healthflow_logo.png'
import bimalabLogo from './assets/partners/bimalab.png'
import edaLogo from './assets/partners/eda.png'
import fedisLogo from './assets/partners/fedis.png'
import fsdLogo from './assets/partners/fsd-africa.png'
import iqviaLogo from './assets/partners/iqvia.svg'
import leanLogo from './assets/partners/lean.svg'
import microsoftLogo from './assets/partners/microsoft.svg'
import orangeLogo from './assets/partners/orange.svg'
import { LANGS, LangContext, applyDocumentLang, content, initialLang, persistLang, useLang } from './i18n.js'

const solutionIcons = {
  hip: Network,
  hfcx: Receipt,
  ndp: Pill,
  eclaims: ScrollText,
  hpr: Fingerprint,
  nhfr: Building2,
  ndpr: Users,
  ai: Brain,
  itqan: BadgeCheck,
  regtech: ShieldCheck,
}

// Official logo files, keyed by partner `key` in the content files.
// To add one (e.g. ITQAN or the Medical Syndicate), drop the file in
// src/assets/partners, import it here and add it to this map.
const partnerLogos = {
  microsoft: microsoftLogo,
  orange: orangeLogo,
  iqvia: iqviaLogo,
  lean: leanLogo,
  eda: edaLogo,
  bimalab: bimalabLogo,
  fsd: fsdLogo,
}

const stakeholderIcons = [Landmark, Stethoscope, UserRound, Receipt]
const siloIcons = [Users, Fingerprint, Network, Eye]

const groupStyles = {
  Exchange: 'text-teal bg-teal/10',
  Registry: 'text-brand bg-brand/10',
  AI: 'text-gold bg-gold/10',
}

function AltName({ lang, className = '', children }) {
  const other = lang === 'en' ? 'ar' : 'en'
  return (
    <p dir={LANGS[other].dir} lang={other} className={`${other === 'ar' ? 'font-arabic' : 'font-latin'} ${className}`}>
      {children}
    </p>
  )
}

function Eyebrow({ children, dark = false }) {
  return (
    <p className={`text-xs font-semibold tracking-[0.25em] uppercase ${dark ? 'text-gold-light' : 'text-gold'}`}>
      {children}
    </p>
  )
}

function SectionHeading({ eyebrow, title, intro, dark = false, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-3 font-serif text-3xl sm:text-4xl font-bold leading-tight ${dark ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{intro}</p>}
    </div>
  )
}

function LangToggle({ dark = false, className = '' }) {
  const { lang, c, setLang } = useLang()
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      aria-label={c.ui.switchLabel}
      lang={lang === 'en' ? 'ar' : 'en'}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition ${
        dark ? 'border-white/30 text-white hover:bg-white/10' : 'border-slate-300 text-navy-900 hover:bg-slate-100'
      } ${className}`}
    >
      <Languages className="h-4 w-4" />
      <span className={lang === 'en' ? 'font-arabic' : ''}>{c.ui.switchTo}</span>
    </button>
  )
}

function Header({ onContact }) {
  const { c } = useLang()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label={c.ui.homeLabel}>
          <span className={`rounded-lg ${scrolled || open ? '' : 'bg-white/95 px-2 py-1'}`}>
            <img src={healthflowLogo} alt="HealthFlow" className="h-10 w-auto" />
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {c.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-700 hover:text-brand' : 'text-slate-200 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle dark={!scrolled} />
          <button
            onClick={onContact}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-light"
          >
            {c.ui.talk} <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle dark={!(scrolled || open)} />
        <button
          className={`lg:hidden ${scrolled || open ? 'text-navy-900' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? c.ui.closeMenu : c.ui.openMenu}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {c.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3 font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setOpen(false)
              onContact()
            }}
            className="mt-4 w-full rounded-full bg-gold px-5 py-3 font-semibold text-navy-950"
          >
            {c.ui.talk}
          </button>
        </div>
      )}
    </header>
  )
}

function Hero({ onContact }) {
  const { lang, c } = useLang()
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute -end-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-navy-800/70" />
      <div className="pointer-events-none absolute -end-10 top-64 h-[28rem] w-[28rem] rounded-full bg-navy-900" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <Eyebrow dark>{c.ui.heroEyebrow}</Eyebrow>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.08] sm:text-6xl rtl:leading-[1.3]">
            {c.ui.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {c.ui.heroText}
          </p>
          <p
            dir={lang === 'en' ? 'rtl' : 'ltr'}
            lang={lang === 'en' ? 'ar' : 'en'}
            className={`mt-4 text-lg text-gold-light ${lang === 'en' ? 'font-arabic' : 'font-latin'}`}
          >
            {c.ui.heroAlt}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy-950 transition hover:bg-gold-light"
            >
              {c.ui.explore} <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </a>
            <button
              onClick={onContact}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              {c.ui.demo}
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 lg:ps-8">
          <div className="grid gap-4">
            {c.heroStats.map((s) => (
              <div key={s.value} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <p className="font-serif text-4xl font-bold text-gold-light">{s.value}</p>
                <p className="mt-2 text-sm text-slate-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const trustIcons = [Network, Landmark, Lock, Eye]

function TrustBar() {
  const { c } = useLang()
  const items = c.trustBar.map((text, i) => ({ icon: trustIcons[i], text }))
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.text} className="flex items-center gap-3">
              <Icon className="h-6 w-6 shrink-0 text-gold" />
              <span className="text-sm font-medium text-slate-700">{item.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Problem() {
  const { c } = useLang()
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={c.ui.problemEyebrow}
          title={c.ui.problemTitle}
          intro={c.ui.problemIntro}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {c.silos.map((l, i) => {
              const Icon = siloIcons[i]
              return (
                <div key={l.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900">{l.title}</h3>
                  <p className="mt-1 text-slate-600">{l.text}</p>
                </div>
              )
            })}
          </div>
          <div className="rounded-2xl bg-navy-900 p-8 text-white">
            <p className="text-sm font-semibold text-gold-light">{c.ui.costsTitle}</p>
            <ul className="mt-5 space-y-5">
              {c.costs.map((x) => (
                <li key={x.value}>
                  <p className="font-serif text-2xl font-bold">{x.value}</p>
                  <p className="text-sm text-slate-300">{x.label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-slate-400">{c.ui.costsNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Platform() {
  const { c } = useLang()
  return (
    <section id="platform" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={c.ui.platformEyebrow}
          title={c.ui.platformTitle}
          intro={c.ui.platformIntro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-9">
            {c.layers.map((layer, i) => (
              <div
                key={layer.name}
                className={`rounded-2xl border p-5 ${
                  i === 1 ? 'border-gold/40 bg-gold/5' : i === 3 ? 'border-brand/20 bg-brand/5' : 'border-slate-200 bg-slate-50'
                }`}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">{layer.name}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-navy-900 shadow-sm ring-1 ring-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="self-start rounded-2xl bg-navy-900 p-6 text-white lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">{c.ui.trustServices}</p>
            <ul className="mt-4 space-y-3">
              {c.trustServices.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">{c.ui.flowTitle}</p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-5">
            {c.flow.map((f, i) => (
              <li key={f.step} className="relative rounded-xl border border-slate-200 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-3 font-semibold text-navy-900">{f.step}</p>
                <p className="text-sm text-slate-500">{f.detail}</p>
                {i < c.flow.length - 1 && (
                  <ChevronRight className="absolute -end-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-gold sm:block rtl:-scale-x-100" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Scenarios() {
  const { c } = useLang()
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 sm:p-12">
          <SectionHeading
            eyebrow={c.ui.scenariosEyebrow}
            title={c.ui.scenariosTitle}
            intro={c.ui.scenariosIntro}
          />
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {c.scenarios.map((sc, i) => (
              <div key={sc.title} className="border-s-2 border-gold ps-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">0{i + 1}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-navy-900">{sc.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{sc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Solutions() {
  const { lang, c } = useLang()
  const { hip, solutions } = c
  const [filter, setFilter] = React.useState('All')
  const groups = ['All', 'Registry', 'Exchange', 'AI']
  const shown = filter === 'All' ? solutions : solutions.filter((s) => s.group === filter)

  return (
    <section id="solutions" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={c.ui.solutionsEyebrow}
            title={c.ui.solutionsTitle}
            intro={c.ui.solutionsIntro}
          />
          <div className="flex flex-wrap gap-2" role="tablist">
            {groups.map((g) => (
              <button
                key={g}
                role="tab"
                aria-selected={filter === g}
                onClick={() => setFilter(g)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === g ? 'bg-navy-900 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-navy-900'
                }`}
              >
                {c.groupLabels[g]}
              </button>
            ))}
          </div>
        </div>

        {(filter === 'All' || filter === 'Exchange') && (
          <article className="mt-12 grid gap-8 rounded-2xl bg-navy-900 p-8 text-white lg:grid-cols-5 lg:p-10">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy-950">
                  <Network className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gold-light">{hip.code}</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold">{hip.title}</h3>
              <AltName lang={lang} className="mt-1 text-sm text-slate-400">
                {hip.alt}
              </AltName>
              <p className="mt-4 text-slate-300">{hip.text}</p>
            </div>
            <ul className="space-y-3 self-center lg:col-span-2">
              {hip.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" /> {p}
                </li>
              ))}
            </ul>
          </article>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((s) => {
            const Icon = solutionIcons[s.key]
            return (
              <article key={s.key} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-light">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${groupStyles[s.group]}`}>{s.code}</span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy-900">{s.title}</h3>
                <AltName lang={lang} className="mt-1 text-sm text-slate-500">
                  {s.alt}
                </AltName>
                <p className="mt-3 text-slate-600">{s.text}</p>
                <ul className="mt-auto space-y-2 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {p}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AIEngine() {
  const { c } = useLang()
  const [tab, setTab] = React.useState('hie')
  const tabs = [
    { id: 'hie', label: c.ui.tabHie, items: c.hieAgents },
    { id: 'claims', label: c.ui.tabClaims, items: c.agents },
  ]
  const current = tabs.find((t) => t.id === tab)

  return (
    <section id="ai" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow={c.ui.aiEyebrow}
          title={c.ui.aiTitle}
          intro={c.ui.aiIntro}
        />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === t.id ? 'bg-gold text-navy-950' : 'border border-white/20 text-slate-300 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
          {tab === 'claims' && (
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-light/40 px-4 py-1.5 text-xs font-semibold tracking-widest text-teal-light uppercase">
              <Sparkles className="h-3.5 w-3.5" /> {c.ui.inProduction}
            </span>
          )}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((a) => (
            <div key={a.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-serif text-2xl font-bold text-gold-light">{a.n}</p>
              <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {c.governance.map((g, i) => (
            <div key={g.title} className="rounded-2xl bg-navy-800 p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-teal-light uppercase">
                {c.ui.step} {i + 1}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{g.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-slate-400">{c.ui.aiNote}</p>
      </div>
    </section>
  )
}

function Impact() {
  const { lang, c } = useLang()
  return (
    <section id="impact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow={c.ui.impactEyebrow}
          title={c.ui.impactTitle}
          intro={c.ui.impactIntro}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.stakeholders.map((s, i) => {
            const Icon = stakeholderIcons[i]
            return (
              <div key={s.title} className="rounded-2xl border border-slate-200 p-7">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900">{s.title}</h3>
                <AltName lang={lang} className="text-sm text-slate-500">
                  {s.alt}
                </AltName>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhyNow() {
  const { c } = useLang()
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={c.ui.whyEyebrow}
          title={c.ui.whyTitle}
          intro={c.ui.whyIntro}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.regulators.map((r) => (
            <div key={r.code} className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="font-latin text-4xl font-bold text-teal">{r.code}</p>
              <p className="mt-2 font-semibold text-navy-900">{r.name}</p>
              <p className="mt-3 text-sm text-slate-600">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Traction() {
  const { c } = useLang()
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={c.ui.progressEyebrow}
          title={c.ui.progressTitle}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.milestones.map((m) => (
            <div key={m.title} className="flex gap-4 rounded-2xl border border-slate-200 p-6">
              <FileCheck2 className="h-6 w-6 shrink-0 text-gold" />
              <div>
                <h3 className="font-semibold text-navy-900">{m.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{m.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">{c.ui.roadmap}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.roadmap.map((r) => (
              <div key={r.year} className="rounded-2xl bg-navy-900 p-6 text-white">
                <p className="font-serif text-3xl font-bold text-gold-light">{r.year}</p>
                <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-teal-light uppercase">{r.phase}</p>
                <p className="mt-3 text-sm text-slate-300">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Trust() {
  const { c } = useLang()
  return (
    <section id="trust" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={c.ui.trustEyebrow}
          title={c.ui.trustTitle}
          intro={c.ui.trustIntro}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {c.security.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Lock className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {c.standards.map((s) => (
            <span key={s} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy-900 ring-1 ring-slate-200">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const { c } = useLang()
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={c.ui.teamEyebrow}
          title={c.ui.teamTitle}
          intro={c.ui.teamIntro}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.team.map((m) => (
            <a
              key={m.name}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-slate-200 p-6 transition hover:border-gold/60 hover:shadow-md"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy-900 font-latin text-xl font-bold text-gold-light">
                {m.initials}
              </span>
              <div className="min-w-0">
                <p className="font-serif text-lg font-semibold text-navy-900">{m.name}</p>
                <p className="text-sm text-slate-600">{m.role}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-brand opacity-70 group-hover:opacity-100">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20">
          <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-gold/40 bg-gold/5 px-8 py-6 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">{c.ui.nationalPartner}</p>
            <img src={fedisLogo} alt={c.nationalPartner} className="mt-4 h-16 w-auto" />
          </div>
          <p className="mt-12 text-center text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            {c.ui.partners}
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-4">
            {c.partners.map((p) => (
              <li
                key={p.key}
                className="flex h-24 w-[calc(50%-0.5rem)] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 sm:w-48"
                title={p.name}
              >
                {partnerLogos[p.key] ? (
                  <img src={partnerLogos[p.key]} alt={p.name} loading="lazy" className="max-h-11 w-auto max-w-full object-contain" />
                ) : (
                  <span className="text-center font-serif text-base font-semibold leading-snug text-slate-500">{p.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function CTA({ onContact }) {
  const { c } = useLang()
  return (
    <section className="bg-navy-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Network className="mx-auto h-10 w-10 text-gold-light" />
        <h2 className="mt-6 font-serif text-3xl font-bold sm:text-4xl">{c.ui.ctaTitle}</h2>
        <p className="mt-4 text-lg text-slate-300">{c.ui.ctaText}</p>
        <button
          onClick={onContact}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-semibold text-navy-950 transition hover:bg-gold-light"
        >
          {c.ui.ctaButton} <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
        </button>
      </div>
    </section>
  )
}

function Footer() {
  const { c } = useLang()
  const { contact } = c
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="bg-navy-950 py-16 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <span className="inline-block rounded-lg bg-white px-3 py-2">
            <img src={healthflowLogo} alt="HealthFlow" className="h-10 w-auto" />
          </span>
          <p className="mt-4 max-w-md text-sm">{c.ui.footerText}</p>
        </div>
        <div>
          <p className="font-semibold text-white">{c.ui.footerPlatform}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {c.nav.slice(0, 5).map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">{c.ui.footerContact}</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-gold" /> {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneHref}`} className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-gold" /> <span dir="ltr">{contact.phone}</span>
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> {contact.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-slate-500 sm:px-6 lg:px-8">
        © {year} {c.ui.rights}
      </div>
    </footer>
  )
}

function ContactDialog({ open, onClose }) {
  const { c } = useLang()
  const { contact, ui } = c
  const [form, setForm] = React.useState({ name: '', email: '', company: '', role: '', message: '' })
  const [sent, setSent] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const role = form.role || c.roles[0]
    const subject = `${ui.mailSubject} — ${role} — ${form.name}`
    const body = `${ui.mailName}: ${form.name}\n${ui.mailEmail}: ${form.email}\n${ui.mailOrg}: ${form.company}\n${ui.mailRole}: ${role}\n\n${form.message}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field =
    'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-navy-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20'

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/70 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <Eyebrow>{ui.contactEyebrow}</Eyebrow>
            <h2 id="contact-title" className="mt-2 font-serif text-2xl font-bold text-navy-900">
              {ui.contactTitle}
            </h2>
          </div>
          <button onClick={onClose} aria-label={ui.close} className="text-slate-400 hover:text-navy-900">
            <X className="h-6 w-6" />
          </button>
        </div>

        {sent ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-teal" />
            <p className="mt-4 font-semibold text-navy-900">{ui.sentTitle}</p>
            <p className="mt-1 text-sm text-slate-600">
              {ui.sentText}{' '}
              <a className="text-brand underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </p>
            <button onClick={onClose} className="mt-6 rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white">
              {ui.close}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                {ui.name}
                <input required dir="auto" name="name" value={form.name} onChange={update} className={field} />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                {ui.email}
                <input required dir="ltr" type="email" name="email" value={form.email} onChange={update} className={field} />
              </label>
            </div>
            <label className="block text-sm font-medium text-slate-700">
              {ui.org}
              <input dir="auto" name="company" value={form.company} onChange={update} className={field} />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              {ui.role}
              <select name="role" value={form.role || c.roles[0]} onChange={update} className={field}>
                {c.roles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              {ui.message}
              <textarea required dir="auto" name="message" rows={4} value={form.message} onChange={update} className={field} />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-navy-950 transition hover:bg-gold-light"
            >
              <Send className="h-4 w-4 rtl:-scale-x-100" /> {ui.send}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [lang, setLangState] = React.useState(initialLang)
  const [contactOpen, setContactOpen] = React.useState(false)
  const openContact = () => setContactOpen(true)

  React.useEffect(() => {
    applyDocumentLang(lang)
  }, [lang])

  const value = React.useMemo(
    () => ({
      lang,
      c: content[lang],
      setLang: (next) => {
        persistLang(next)
        setLangState(next)
      },
    }),
    [lang],
  )

  return (
    <LangContext.Provider value={value}>
    <div className="min-h-screen bg-white text-slate-800">
      <Header onContact={openContact} />
      <main>
        <Hero onContact={openContact} />
        <TrustBar />
        <Problem />
        <Platform />
        <Scenarios />
        <Solutions />
        <AIEngine />
        <Impact />
        <WhyNow />
        <Traction />
        <Trust />
        <About />
        <CTA onContact={openContact} />
      </main>
      <Footer />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
    </LangContext.Provider>
  )
}
