import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
<<<<<<< Updated upstream
import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from "react-icons/fa";

// --- WORKING CLOUD CHAMBER SIMULATION COMPONENT ---
const CloudChamber = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const createTrack = () => {
      const isAlpha = Math.random() > 0.6;
      const angle = Math.random() * Math.PI * 2;
      const speed = isAlpha ? 2.6 : 6.8;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        decay: isAlpha ? 0.02 : 0.045,
        history: [],
        isAlpha,
      };
    };

    const render = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.16)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.15) particles.push(createTrack());

      particles.forEach((p, index) => {
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > 20) p.history.shift();

        if (!p.isAlpha) {
          p.vx += (Math.random() - 0.5) * 1.8;
          p.vy += (Math.random() - 0.5) * 1.8;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.moveTo(p.history[0].x, p.history[0].y);
          for (let i = 1; i < p.history.length; i++) {
            ctx.lineTo(p.history[i].x, p.history[i].y);
          }
          ctx.strokeStyle = p.isAlpha
            ? `rgba(255, 255, 255, ${p.life * 0.95})`
            : `rgba(96, 165, 250, ${p.life * 0.75})`;
          ctx.lineWidth = p.isAlpha ? 2.8 : 1.4;
          ctx.lineCap = "round";

          ctx.shadowBlur = p.isAlpha ? 6 : 3;
          ctx.shadowColor = p.isAlpha
            ? "rgba(255, 255, 255, 0.4)"
            : "rgba(37, 99, 235, 0.4)";

          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block bg-[#0a0a0a]" />;
};

export default function Home() {
  const [showChamberDetails, setShowChamberDetails] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
=======
import { useEffect, useRef } from "react";
import FoundersPhoto from "../components/FoundersPhoto";
import { IconBadge } from "../components/Icons";

// Data arrays remain unchanged...
const solutionCards = [
  { title: "Helio Box", icon: "sensor", bullets: ["Edge-sensor hardware on your roof", "Captures hyper-local irradiance and weather data", "Monitors electrical system performance in real time"] },
  { title: "Helio AI", icon: "ai", bullets: ["Transformer-based forecasting model", "Predicts generation from 15 minutes to days ahead", "Fuses rooftop sensors with system-level signals"] },
  { title: "Helio App", icon: "app", bullets: ["Turns predictions into routing decisions", "Automates power flow between solar, battery, and grid", "Guides homeowners with clear, actionable insights"] },
];

const howItWorksSteps = [
  { step: "01", title: "Sense", description: "Helio Box collects real-time environmental and electrical data from your rooftop.", icon: "sensor" },
  { step: "02", title: "Predict", description: "AI forecasts solar generation and household demand across multiple time horizons.", icon: "forecast" },
  { step: "03", title: "Route", description: "Power is automatically shifted between solar, battery, grid, and appliances.", icon: "route" },
  { step: "04", title: "Learn", description: "Anomaly detection catches shading, dirt, or degradation before they cost you.", icon: "learn" },
];

const differentiators = [
  { title: "Real-time automated power routing", description: "Not just monitoring — Helio actively shifts energy where it's needed most.", icon: "route" },
  { title: "Hyper-local predictive AI", description: "Rooftop sensor fusion, not generic weather APIs. Forecasts tuned to your array.", icon: "forecast" },
  { title: "Hardware-agnostic", description: "Integrates with existing inverters and batteries via API — no rip-and-replace.", icon: "plug" },
  { title: "Early fault detection", description: "Catches shading, soiling, and degradation early — before they compound.", icon: "alert" },
];

const programs = [
  { title: "NSF I-Corps", description: "Customer discovery and commercialization validation through the National Science Foundation program." },
  { title: "Wolfram Technology Conference, 2024", description: "Presented Helio's forecasting approach to the Wolfram research community." },
  { title: "UConn CCEI Get Seeded Pitch Night", description: "$500 award, Connecticut Center for Entrepreneurship & Innovation — January 2026." },
  { title: "Research Advisors", description: "Dr. Diego Cerrai (Eversource Energy Center) and Dr. Yuhao Nie (solar forecasting expert)." },
];

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Belt-and-suspenders autoplay fix: React's JSX `muted` attribute doesn't
    // always set the actual DOM `muted` property on first paint, and Chrome
    // silently blocks autoplay on anything it doesn't consider truly muted.
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked (e.g. low-power mode) — poster image still shows, so fail silently.
        });
      }
    }
>>>>>>> Stashed changes
  }, []);

  return (
    <>
      <Head>
<<<<<<< Updated upstream
        <title>pragyan yadav</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg) translateY(-4px); }
            25% { transform: rotate(0.8deg) translateY(-6px); }
            75% { transform: rotate(-0.8deg) translateY(-6px); }
          }
          .card-wiggle:hover {
            animation: wiggle 0.4s ease-in-out;
            transform: translateY(-4px);
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-[#f2f2f3] font-['Plus_Jakarta_Sans',_sans-serif] px-6 sm:px-12 lg:px-16 py-12 sm:py-20 flex flex-col items-center selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-950 dark:selection:text-blue-200 transition-colors duration-300">
        <main className="max-w-6xl w-full space-y-12">

          {/* Header Section: Image + Big Name */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              {/* Profile Image */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-zinc-300 dark:border-zinc-700/80 bg-zinc-100 dark:bg-zinc-900 flex-shrink-0 shadow-lg dark:shadow-2xl">
                <Image
                  src="/me2.jpg"
                  alt="Pragyan Yadav"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Title & Tagline */}
              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                  Pragyan Yadav
                </h1>
                <p className="text-sm sm:text-base font-mono mt-2 tracking-tight text-zinc-600 dark:text-zinc-400">
                  physics & cs @ uconn · computational astrophysics · explainable AI
                </p>
              </div>
            </div>
          </div>

          {/* 2-Column Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 pt-2">

            {/* Left Column: Narrative with Blue Key Phrases */}
            <div className="md:col-span-6 space-y-5 text-base sm:text-[17px] leading-[1.8] text-zinc-700 dark:text-zinc-300">
              <p>
                Hey! I&apos;m Pragyan, studying{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">Physics and Computer Science</span>{" "}
                at the University of Connecticut. I&apos;m curious about how{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">computation</span>{" "}
                can unlock new ways of understanding the universe.
              </p>

              <p>
                Outside of research code and simulations, I&apos;m really interested in{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">film and music</span>. I also serve as the{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">Director of Journalism</span>{" "}
                for the UConn Undergraduate Science Journal, so I get to spend a lot of time thinking about{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">science journalism</span>{" "}
                and how we communicate technical ideas.
              </p>

              <p>
                Lately, I&apos;ve been fascinated by the philosophy of{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">explaining emergent complex systems</span>, and I&apos;m collaborating with the UConn art department on{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">data sculpture design</span>{" "}
                to turn physical datasets into tangible forms.
              </p>

              <p>
                On the hardware side, I had been wanting to build a{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">continuous cloud chamber</span>{" "}
                for a long time, and recently finally got it running.
              </p>

              {/* Social Links Row */}
              <div className="flex items-center gap-6 pt-2 text-zinc-500 dark:text-zinc-400 text-xl">
                <a
                  href="https://github.com/ypragyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/pragyan-yadav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:pragyan.yadav@uconn.edu"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all"
                  title="Email"
                >
                  <FaEnvelope />
                </a>
=======
        <title>Helio | Predictive Solar Intelligence</title>
      </Head>

      {/* Hero Section — full-bleed background video */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-end md:items-center overflow-hidden border-b border-slate-200">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-solar-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — keeps headline/body legible regardless of what's playing underneath */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20 md:bg-gradient-to-r md:from-ink/90 md:via-ink/50 md:to-ink/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-8">
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] text-white mb-8 max-w-2xl">
            Solar power is unpredictable. <br/>
            <span className="text-amber-400">Helio makes it intelligent.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-xl mb-12">
            Helio forecasts solar generation from 15 minutes to days ahead and automatically routes power between your solar array, battery, and the grid.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-helio-500 text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-helio-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem (Stark Data Grid) */}
      <section id="problem" className="border-b border-slate-200">
        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          <div className="p-12 lg:p-16 flex flex-col justify-between">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-8">/ 02 The Inefficiency</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight leading-snug text-ink">
              Production and usage don&apos;t align.
            </h2>
            <p className="mt-8 text-slate-600 font-light leading-relaxed">
              Power is generated when it isn&apos;t needed, and gone when it is. Homeowners export surplus at low rates and buy back from the grid at higher ones.
            </p>
          </div>
          {/* Stat callouts use Solar Amber — the one "spotlight" color per section */}
          <div className="p-12 lg:p-16 bg-white flex flex-col justify-end">
            <p className="text-7xl font-mono font-medium tracking-tighter text-amber-500 mb-6">20-40%</p>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500 leading-relaxed">Wasted solar energy generated per household</p>
          </div>
          <div className="p-12 lg:p-16 bg-white flex flex-col justify-end">
            <p className="text-7xl font-mono font-medium tracking-tighter text-amber-500 mb-6">$2,000</p>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500 leading-relaxed">Maximum lost value across 3M+ U.S. residential setups</p>
          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <section className="h-[40vh] md:h-[60vh] bg-mist border-b border-slate-200 flex items-center justify-center relative overflow-hidden">
         {/* INSERT ENVIRONMENTAL/LIFESTYLE IMAGE HERE */}
         <span className="font-mono text-slate-500 text-sm z-10">[ Full Bleed Architecture / Solar Array Image ]</span>
      </section>

      {/* The Solution Architecture */}
      <section id="solution" className="py-14 md:py-24 border-b border-slate-200 bg-paper">
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">/ 03 Architecture</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-ink">Three layers of intelligence.</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 border-t border-l border-slate-200">
            {solutionCards.map(({ title, icon, bullets }) => (
              <div key={title} className="border-r border-b border-slate-200 bg-white p-10 hover:bg-mist/40 transition-colors">
                <IconBadge name={icon} className="mb-10 text-ink" />
                <h3 className="text-2xl font-display font-semibold tracking-tight mb-6 text-ink">{title}</h3>
                <ul className="space-y-4">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-4 text-sm font-light text-slate-600">
                      <span className="text-helio-500 font-mono shrink-0">{"->"}</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
>>>>>>> Stashed changes
              </div>
            </div>

<<<<<<< Updated upstream
            {/* Right Column: Cards with Blue Monospace Titles */}
            <div className="md:col-span-6 space-y-4">
              
              {/* RECENTLY CARD */}
              <div className="card-wiggle p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50 dark:bg-[#0e0f13] hover:bg-zinc-100 dark:hover:bg-[#12141a] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 space-y-2 cursor-default shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-2 font-mono font-bold text-xs tracking-wider uppercase text-blue-600 dark:text-blue-400">
                  <span className="text-[10px]">●</span>
                  <span>Recently</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Completed an R&D Physics internship at Mirion Technologies developing Geant4 simulations and <span className="font-semibold text-zinc-900 dark:text-white">machine learning classifiers</span> for gamma-ray spectroscopy.
                </p>
              </div>

              {/* NOW CARD */}
              <div className="card-wiggle p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50 dark:bg-[#0e0f13] hover:bg-zinc-100 dark:hover:bg-[#12141a] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 space-y-2 cursor-default shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-2 font-mono font-bold text-xs tracking-wider uppercase text-blue-600 dark:text-blue-400">
                  <span className="text-[10px]">▲</span>
                  <span>Now</span>
=======
      {/* Process & Advantages */}
      <section id="how-it-works" className="border-b border-slate-200">
        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

          <div className="p-10 md:p-16 bg-white">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-12">/ 04 The Process</p>
            <div className="space-y-12">
              {howItWorksSteps.map(({ step, title, description }) => (
                <div key={step} className="grid grid-cols-[auto_1fr] gap-8 items-start">
                  <span className="font-mono text-sm text-helio-500 mt-1">{step}</span>
                  <div>
                    <h3 className="text-xl font-display font-semibold tracking-tight mb-2 text-ink">{title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{description}</p>
                  </div>
>>>>>>> Stashed changes
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Undergraduate researcher in the UConn Computational Galaxy Formation Lab, studying the cosmic web and cosmology with Dr. Daniel Anglés-Alcázar.
                </p>
              </div>

              {/* READING CARD */}
              <div className="card-wiggle p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50 dark:bg-[#0e0f13] hover:bg-zinc-100 dark:hover:bg-[#12141a] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 space-y-2 cursor-default shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-2 font-mono font-bold text-xs tracking-wider uppercase text-blue-600 dark:text-blue-400">
                  <span className="text-[10px]">◆</span>
                  <span>Reading</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <span className="italic">Sculpting in Time</span> by Andrei Tarkovsky and keeping up with recent AI preprints.
                </p>
              </div>

            </div>
<<<<<<< Updated upstream

          </div>

          {/* Interactive Cloud Chamber Frame + Story Toggle */}
          <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="uppercase tracking-wider">figure 1.0 · diffusion cloud chamber</span>
              <span className="text-blue-600 dark:text-blue-400/90">alpha & beta tracks</span>
            </div>

            {/* Canvas Box */}
            <div className="rounded-2xl border border-zinc-300 dark:border-zinc-800/90 overflow-hidden bg-black shadow-xl">
              <div className="w-full aspect-[16/8] sm:aspect-[21/9] relative">
                <CloudChamber />
                <div className="absolute inset-0 shadow-[inset_0_0_35px_rgba(0,0,0,0.7)] pointer-events-none" />
              </div>
              <div className="px-5 py-2.5 bg-zinc-950 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>simulating vapor supersaturation & particle ionization</span>
                <span className="text-blue-500 font-medium">● live canvas</span>
              </div>
            </div>

            {/* Learn More Toggle Button */}
            <div className="pt-1">
              <button
                onClick={() => setShowChamberDetails(!showChamberDetails)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                <span>{showChamberDetails ? "Hide build story" : "The story behind this build"}</span>
                <FaChevronDown
                  className={`text-[10px] transition-transform duration-300 ${
                    showChamberDetails ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                  }`}
                />
              </button>

              {/* Collapsible Info Drawer */}
              {showChamberDetails && (
                <div className="mt-3 p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50 dark:bg-[#0e0f13] space-y-3 text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 animate-[fadeIn_0.2s_ease-out]">
                  <p>
                    A diffusion cloud chamber is a particle detector that makes ionizing radiation visible to the naked eye. Chilling isopropyl alcohol vapor creates a supersaturated layer near the cold plate. When an energetic charged particle zips through, it knocks electrons off ambient vapor molecules; alcohol droplets instantly condense along that ionization trail, leaving behind a brief white track in the dark.
                  </p>
                  <p>
                    I first saw one watching the TV show <em>Rocket Boys</em> and became obsessed with building my own. My first couple of attempts completely failed to form a stable vapor gradient, usually because of leaky seals or uneven cooling.
                  </p>
                  <p>
                    With the support of an undergraduate supply grant at UConn and mentorship from Professor Simone Colombo in the physics department, I redesigned the chamber cooling and sealing geometry and finally got a continuous, reliable vapor zone running.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Minimal Footer */}
          <footer className="pt-6 border-t border-zinc-200 dark:border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-600">
            <span>pragyan yadav · storrs, ct</span>
            <span>2026</span>
          </footer>

        </main>
      </div>
=======
          </div>

          <div className="p-10 md:p-16 bg-paper">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-12">/ 05 Differentiators</p>
            <div className="space-y-12">
              {differentiators.map(({ title, description }) => (
                <div key={title} className="border-b border-slate-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-xl font-display font-semibold tracking-tight mb-3 text-ink">{title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Recognition */}
      <section id="programs" className="border-b border-slate-200 bg-white">
        <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

          <div className="lg:col-span-4 p-10 md:p-16 flex flex-col justify-between">
            <div>
               <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">/ 06 Traction</p>
               <h2 className="text-4xl font-display font-bold tracking-tight text-ink">Research-backed validation.</h2>
            </div>
            {/* Small Image inside the grid */}
            <div className="mt-12 aspect-square bg-mist flex items-center justify-center border border-slate-200 relative">
               <FoundersPhoto className="absolute inset-0 w-full h-full object-cover" />
               <span className="font-mono text-slate-400 text-[10px] uppercase">[ Event Photo ]</span>
            </div>
          </div>

          <div className="lg:col-span-8 p-10 md:p-16">
            <div className="border-t border-slate-200">
              {programs.map(({ title, description }) => (
                <div key={title} className="py-8 border-b border-slate-200 grid md:grid-cols-2 gap-6 items-start hover:bg-mist/40 transition-colors px-4 -mx-4">
                  <h3 className="text-lg font-display font-semibold tracking-tight text-ink">{title}</h3>
                  <p className="text-sm font-light text-slate-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 md:py-32 px-6 text-center bg-ink text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12">
            The timing is right for hyper-local solar intelligence.
          </h2>
          <Link href="/contact" className="inline-block border border-white/20 px-8 py-4 font-mono text-xs uppercase tracking-widest hover:border-helio-400 hover:text-helio-400 transition-all duration-300">
            Partner With Us
          </Link>
        </div>
      </section>
>>>>>>> Stashed changes
    </>
  );
}