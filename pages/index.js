import Head from "next/head";
import Link from "next/link";
import HeroGraphic from "../components/HeroGraphic";
import FoundersPhoto from "../components/FoundersPhoto";
import { IconBadge } from "../components/Icons";

const solutionCards = [
  {
    title: "Helio Box",
    icon: "sensor",
    bullets: [
      "Edge-sensor hardware on your roof",
      "Captures hyper-local irradiance and weather data",
      "Monitors electrical system performance in real time",
    ],
  },
  {
    title: "Helio AI",
    icon: "ai",
    bullets: [
      "Transformer-based forecasting model",
      "Predicts generation from 15 minutes to days ahead",
      "Fuses rooftop sensors with system-level signals",
    ],
  },
  {
    title: "Helio App",
    icon: "app",
    bullets: [
      "Turns predictions into routing decisions",
      "Automates power flow between solar, battery, and grid",
      "Guides homeowners with clear, actionable insights",
    ],
  },
];

const howItWorksSteps = [
  {
    step: "01",
    title: "Sense",
    description: "Helio Box collects real-time environmental and electrical data from your rooftop.",
    icon: "sensor",
  },
  {
    step: "02",
    title: "Predict",
    description: "AI forecasts solar generation and household demand across multiple time horizons.",
    icon: "forecast",
  },
  {
    step: "03",
    title: "Route",
    description: "Power is automatically shifted between solar, battery, grid, and appliances.",
    icon: "route",
  },
  {
    step: "04",
    title: "Learn",
    description: "Anomaly detection catches shading, dirt, or degradation before they cost you.",
    icon: "learn",
  },
];

const differentiators = [
  {
    title: "Real-time automated power routing",
    description: "Not just monitoring — Helio actively shifts energy where it's needed most.",
    icon: "route",
  },
  {
    title: "Hyper-local predictive AI",
    description: "Rooftop sensor fusion, not generic weather APIs. Forecasts tuned to your array.",
    icon: "forecast",
  },
  {
    title: "Hardware-agnostic",
    description: "Integrates with existing inverters and batteries via API — no rip-and-replace.",
    icon: "plug",
  },
  {
    title: "Early fault detection",
    description: "Catches shading, soiling, and degradation early — before they compound.",
    icon: "alert",
  },
];

const programs = [
  {
    title: "NSF I-Corps",
    description: "Customer discovery and commercialization validation through the National Science Foundation program.",
  },
  {
    title: "Wolfram Technology Conference, 2024",
    description: "Presented Helio's forecasting approach to the Wolfram research community.",
  },
  {
    title: "UConn CCEI Get Seeded Pitch Night",
    description: "$500 award, Connecticut Center for Entrepreneurship & Innovation — January 2026.",
  },
  {
    title: "Research Advisors",
    description: "Dr. Diego Cerrai (Eversource Energy Center) and Dr. Yuhao Nie (solar forecasting expert).",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Helio — AI-Powered Energy Intelligence for Residential Solar</title>
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-helio-50/60 via-white to-stone-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <p className="section-label">Energy Intelligence</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-850 leading-[1.08]">
                Solar power is unpredictable.{" "}
                <span className="text-helio-600">Helio makes it intelligent.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Helio forecasts solar generation from 15 minutes to days ahead and automatically routes power between solar, battery, and grid.
              </p>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="bg-slate-850 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label text-helio-400 mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight max-w-4xl">
            Homeowners waste 20–40% of the solar energy they generate.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-4xl md:text-5xl font-semibold text-helio-400">$1,300–$2,000</p>
              <p className="mt-3 text-stone-300 text-lg">lost per household, per year</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-4xl md:text-5xl font-semibold text-helio-400">3M+</p>
              <p className="mt-3 text-stone-300 text-lg">U.S. residential solar systems affected</p>
            </div>
          </div>

          <p className="mt-10 text-stone-400 leading-relaxed max-w-3xl text-lg">
            Production and usage don&apos;t align — power is generated when it isn&apos;t needed, and gone when it is. Homeowners export surplus at low rates and buy back from the grid at higher ones.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">The Solution</p>
          <h2 className="section-heading max-w-2xl">
            Three layers of intelligence for every rooftop.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {solutionCards.map(({ title, icon, bullets }) => (
              <div key={title} className="card hover:border-helio-200 hover:shadow-md transition-shadow">
                <IconBadge name={icon} className="mb-5" />
                <h3 className="text-xl font-semibold text-slate-850">{title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <span className="text-helio-500 mt-1 shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="section-heading">From sensor data to smarter power flow.</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {howItWorksSteps.map(({ step, title, description, icon }) => (
              <div key={step} className="relative">
                <span className="text-xs font-semibold text-helio-600 tracking-wider">{step}</span>
                <IconBadge name={icon} className="mt-3 mb-4" />
                <h3 className="text-lg font-semibold text-slate-850">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Helio Apart */}
      <section id="differentiators" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">What Sets Helio Apart</p>
          <h2 className="section-heading">Built for action, not just dashboards.</h2>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {differentiators.map(({ title, description, icon }) => (
              <div key={title} className="card flex gap-5">
                <IconBadge name={icon} className="shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-850">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section id="why-now" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Why Now</p>
          <h2 className="section-heading max-w-3xl">The timing is right for hyper-local solar intelligence.</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
            Residential solar is growing at 25% CAGR. Utilities are rolling out time-of-use pricing and virtual power plant programs. Low-cost IoT and modern AI now make hyper-local forecasting affordable at scale — turning a research problem into a deployable product.
          </p>
        </div>
      </section>

      {/* Programs & Recognition */}
      <section id="programs" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Programs &amp; Recognition</p>
          <h2 className="section-heading">Research-backed, early-stage traction.</h2>

          <div className="grid lg:grid-cols-5 gap-10 mt-12 items-start">
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {programs.map(({ title, description }) => (
                <div key={title} className="card">
                  <h3 className="text-base font-semibold text-slate-850">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <figure className="lg:col-span-2 card p-0 overflow-hidden">
              <div className="aspect-[4/3]">
                <FoundersPhoto />
              </div>
              <figcaption className="px-5 py-4 text-xs text-slate-500 border-t border-stone-100">
                UConn CCEI Get Seeded Pitch Night — January 2026
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-24 bg-helio-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Interested in partnering, piloting Helio, or learning more?
          </h2>
          <Link href="/contact" className="btn-primary mt-8 bg-white text-helio-700 hover:bg-helio-50">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
