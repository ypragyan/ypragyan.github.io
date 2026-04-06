import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa";

// --- WORKING CLOUD CHAMBER SIMULATION COMPONENT ---
const CloudChamber = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
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
      const speed = isAlpha ? 3 : 8; 
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        decay: isAlpha ? 0.02 : 0.05,
        history: [],
        isAlpha,
      };
    };

    const render = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.15)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.15) particles.push(createTrack());

      particles.forEach((p, index) => {
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > 20) p.history.shift();

        if (!p.isAlpha) {
          p.vx += (Math.random() - 0.5) * 2;
          p.vy += (Math.random() - 0.5) * 2;
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
            ? `rgba(255, 255, 255, ${p.life})`
            : `rgba(100, 200, 255, ${p.life * 0.7})`;
          ctx.lineWidth = p.isAlpha ? 3 : 1.5;
          ctx.lineCap = "round";
          
          ctx.shadowBlur = p.isAlpha ? 6 : 4;
          ctx.shadowColor = p.isAlpha ? "rgba(255, 255, 255, 0.4)" : "rgba(100, 200, 255, 0.4)";
          
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

  // Canvas remains dark internally for particle contrast
  return <canvas ref={canvasRef} className="w-full h-full block bg-[#0a0a0a]" />;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Pragyan Yadav</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 flex flex-col items-center px-6 py-20 font-['Plus_Jakarta_Sans',_sans-serif] transition-colors duration-300">

        {/* Main Section: Photo + Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center max-w-5xl w-full">

          {/* Clean Profile Photo */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full mb-8 md:mb-0 md:mr-12 flex-shrink-0 border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <Image
              src="/me.jpg"
              alt="Pragyan Yadav"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">
              Pragyan Yadav
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Hey! I&apos;m Pragyan, 
              studying Physics and Computer Science at the University of Connecticut. 
              I&apos;m curious about how computation can unlock new ways of understanding the universe.
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              I am currently working with Prof. Daniel Anglés-Alcázar&apos;s{" "}
              <a
                href="https://angles-alcazar.physics.uconn.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline underline-offset-4 decoration-blue-600/30 dark:decoration-blue-400/30 transition-all"
              >
                Computational Galaxy Formation Group
              </a>{" "}
              at UConn on computational cosmology research, while also exploring the intersection of{" "}
              machine learning with astrophysics. 
              I also serve as the Director of Journalism for the{" "}
              <a
                href="https://uconnusj.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline underline-offset-4 decoration-blue-600/30 dark:decoration-blue-400/30 transition-all"
              >
                UConn Undergraduate Science Journal
              </a>.
            </p>

            {/* Clean Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-white hover:scale-105 transition-all duration-200 shadow-sm"
              >
                About Me
              </Link>
              <Link 
                href="/projects" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
              >
                View Projects 
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div> 

        {/* --- CLOUD CHAMBER (Minimalist Box) --- */}
        <div className="mt-20 w-full max-w-4xl">
          <div className="bg-zinc-50 dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-2 md:p-3 shadow-sm transition-all duration-300">
            
            {/* Canvas Container */}
            <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-black shadow-inner">
              <CloudChamber />
              {/* Soft inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            </div>

            {/* Simple Caption */}
            <div className="px-4 py-3 text-center md:text-left flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Cloud Chamber Simulation
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 hidden sm:block">
                Visualizing Alpha & Beta Particle Trajectories
              </p>
            </div>

          </div>
        </div>

        {/* --- Contact Section --- */}
        <div className="mt-20 max-w-4xl w-full flex flex-col items-center border-t border-zinc-200 dark:border-zinc-800 pt-12">
          <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-center max-w-md">
            I&apos;m always happy to chat about physics, computation, or anything in between. Reach out!
          </p>

          <div className="flex space-x-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/pragyan-yadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ypragyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:-translate-y-1 transition-all duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:pragyan.yadav@uconn.edu"
              className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-200"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div> 
    </>
  );
}
