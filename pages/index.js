import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
  const [, setIsDark] = useState(true);

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
  }, []);

  return (
    <>
      <Head>
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

              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                  Pragyan Yadav
                </h1>
                <p className="text-sm sm:text-base font-mono mt-2 tracking-tight text-blue-600 dark:text-blue-400">
                  physics & cs @ uconn · computational astrophysics · science journalism
                </p>
              </div>
            </div>
          </div>

          {/* 2-Column Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 pt-2">
            {/* Left Column */}
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

              {/* Social Icons (Pure Inline SVGs - No react-icons) */}
              <div className="flex items-center gap-6 pt-2 text-zinc-500 dark:text-zinc-400">
                <a
                  href="https://github.com/ypragyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/pragyan-yadav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z" />
                  </svg>
                </a>
                <a
                  href="mailto:pragyan.yadav@uconn.edu"
                  className="hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all"
                  title="Email"
                >
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Status Cards */}
            <div className="md:col-span-6 space-y-4">
              <div className="card-wiggle p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50 dark:bg-[#0e0f13] hover:bg-zinc-100 dark:hover:bg-[#12141a] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 space-y-2 cursor-default shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-2 font-mono font-bold text-xs tracking-wider uppercase text-blue-600 dark:text-blue-400">
                  <span className="text-[10px]">●</span>
                  <span>Recently</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Completed an R&D Physics internship at Mirion Technologies developing Geant4 simulations and <span className="font-semibold text-zinc-900 dark:text-white">machine learning classifiers</span> for gamma-ray spectroscopy.
                </p>
              </div>

              <div className="card-wiggle p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50 dark:bg-[#0e0f13] hover:bg-zinc-100 dark:hover:bg-[#12141a] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 space-y-2 cursor-default shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-2 font-mono font-bold text-xs tracking-wider uppercase text-blue-600 dark:text-blue-400">
                  <span className="text-[10px]">▲</span>
                  <span>Now</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Undergraduate researcher in the UConn Computational Galaxy Formation Lab, studying the cosmic web and cosmology with Dr. Daniel Anglés-Alcázar.
                </p>
              </div>

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
          </div>

          {/* Interactive Cloud Chamber Frame + Story Toggle */}
          <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="uppercase tracking-wider">figure 1.0 · diffusion cloud chamber</span>
              <span className="text-blue-600 dark:text-blue-400/90">alpha & beta tracks</span>
            </div>

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

            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowChamberDetails(!showChamberDetails)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                <span>{showChamberDetails ? "Hide build story" : "The story behind this build"}</span>
                <svg
                  className={`w-3 h-3 stroke-current fill-none transition-transform duration-300 ${
                    showChamberDetails ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                  }`}
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

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

          <footer className="pt-6 border-t border-zinc-200 dark:border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-600">
            <span>pragyan yadav · storrs, ct</span>
            <span>2026</span>
          </footer>
        </main>
      </div>
    </>
  );
}
