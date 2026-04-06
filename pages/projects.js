import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// --- WORKING CLOUD CHAMBER SIMULATION COMPONENT ---
// (Kept dark internally because particle tracks require a dark background to be visible)
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
      ctx.fillStyle = "rgba(5, 5, 5, 0.15)"; 
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
          // Alpha: thick white, Beta: thin glowing cyan/blue
          ctx.strokeStyle = p.isAlpha
            ? `rgba(255, 255, 255, ${p.life})`
            : `rgba(34, 211, 238, ${p.life * 0.8})`;
          ctx.lineWidth = p.isAlpha ? 3.5 : 1.5;
          ctx.lineCap = "round";
          
          ctx.shadowBlur = p.isAlpha ? 8 : 6;
          ctx.shadowColor = p.isAlpha ? "rgba(255, 255, 255, 0.5)" : "rgba(34, 211, 238, 0.6)";
          
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

  return <canvas ref={canvasRef} className="w-full h-full block bg-[#030303]" />;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sections = [
    {
      title: "Current Work",
      description: "Active work in computational astrophysics and machine learning.",
      projects: [
        {
          title: "Morphological Footprints of Cosmology in the Cosmic Web",
          subtitle: "UConn Galaxy Formation Group",
          description:
            "Using Convolutional Neural Networks (CNNs) to infer fundamental cosmological parameters directly from hydrodynamical simulation snapshots. Developing robust Explainable AI (XAI) pipelines using Saliency Maps to interpret model behavior, verifying that the network leverages physically meaningful morphological features of the cosmic web.",
          image: "/project/XAI.png",
        },
        {
          title: "Network Theory Analysis of the Cosmic Web",
          subtitle: "UConn Galaxy Formation Group",
          description:
            "Applying advanced network theory metrics to topological graphs extracted via DisPerSE from massive cosmological simulations. Quantifying the impact of baryonic physics and subgrid galaxy-formation models on the large-scale cosmic web structure. Investigating scalar variations in cosmological parameters to establish robust structure-to-parameter mappings for future observational surveys.",
          image: "/project/graph.png",
        },
        {
          title: "helio",
          subtitle: "Startup",
          description:
            "Engineered an end-to-end IoT and Machine Learning pipeline for solar energy forecasting. Developed complex PyTorch-based Time-Series Transformer models to capture long-range dependencies in weather and irradiance data. Architected a highly scalable microservices backend coupled with a React/Next.js frontend to visualize real-time predictive analytics ingested from custom Raspberry Pi sensor nodes.",
          image: "/project/helio.png",
        },
      ],
    },
    {
      title: "Past Projects",
      description: "Previous projects in solar physics, computer vision, and particle detection.",
      projects: [
        {
          title: "Exploring Solar Complexity through Visual & Fractals Analysis",
          subtitle: "Wolfram Student Ambassador",
          description:
            "Authored comprehensive Wolfram Language pipelines for automated, high-throughput analysis of extreme ultraviolet (EUV) solar imagery. Implemented advanced computer vision algorithms to calculate the monofractal dimension of solar flares, correlating topological complexity with magnetic flux emergence. Published and presented findings at the annual Wolfram Technology Conference.",
          image: "/project/complex.png",
        },
        {
          title: "Probing Solar Flare Dynamics via Explainable AI",
          subtitle: "Independent Research",
          description:
            "Conducted independent research to analyze multivariate time-series data of solar active regions. Leveraged Explainable AI to identify statistically significant pre-flare optical signatures across multiple wavelengths, predicting flare onset with high accuracy. Awarded 1st Place in the CT Science Fair (CS Category) and the UConn Innovation Award for novel predictive methodology.",
          image: "/project/PILHMI.png",
        },
        {
          title: "Solar Flare Forecasting",
          subtitle: "Independent Research",
          description:
            "Designed and implemented Vision Transformer (ViT) and attention-based neural network architectures in TensorFlow to forecast M- and X-class solar flares. Built robust Python data ingestion scripts utilizing SunPy to seamlessly stream, normalize, and augment terabytes of magnetogram and continuum imagery from the Solar Dynamics Observatory (SDO).",
          image: "/project/Fractal.jpg",
        },
        {
          title: "WasteWatch",
          subtitle: "The New York Academy of Sciences",
          description:
            "Developed an end-to-end, interpretable computer vision system for real-time waste classification to optimize recycling center sorting efficiency. Built a comprehensive data pipeline utilizing Python and OpenCV to aggregate and augment diverse datasets. Deployed the inference model via a streamlined Streamlit web application to ensure accessibility and low-latency performance.",
          image: "/project/waste.png",
          link: "https://github.com/ypragyan/WasteWatch",
        },
        {
          title: "Pixet Particle Detector",
          subtitle: "Wolfram High School Summer Research Program",
          description:
            "Utilized the Wolfram Language to parse, filter, and reconstruct high-dimensional raw particle hit data from a Pixet silicon pixel detector. Engineered statistical models to quantify radiation shielding efficacy against varying spectra of subatomic particles. Designed experimental protocols to ensure high signal-to-noise ratios during continuous cosmic ray data acquisition.",
          image: "/project/3D.png",
          link: "https://community.wolfram.com/groups/-/m/t/2965243",

        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>my projects</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 font-['Plus_Jakarta_Sans',_sans-serif] pb-24 selection:bg-blue-500/30 pt-16 transition-colors duration-300">
        
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">
              Projects & Portfolio
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              Research and engineering projects.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-24">
            {sections.map((section, sIndex) => (
              <div key={sIndex}>
                <div className="mb-10">
                  <h2 className="text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100 tracking-wide">
                    {section.title}
                  </h2>
                  <p className="text-zinc-500 text-sm tracking-wide uppercase">
                    {section.description}
                  </p>
                  <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800/60 mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.projects.map((project, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer bg-white dark:bg-[#0a0a0a] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-500 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all duration-300 group flex flex-col"
                    >
                      {/* Image Container with Interactive Overlay */}
                      <div className="h-48 w-full overflow-hidden relative bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/80">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80 group-hover:opacity-100"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                            DATA_UNAVAILABLE
                          </div>
                        )}
                        
                        {/* Sleek Hover Overlay */}
                        <div className="absolute inset-0 bg-white/90 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="bg-zinc-900 text-white dark:bg-white dark:text-black text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg transform scale-95 group-hover:scale-100 transition-transform duration-300">
                            Read summary
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-auto pt-4">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL EXPANDED VIEW */}
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-zinc-900/40 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative my-auto animate-[fadeIn_0.2s_ease-out]"
            >
              {/* Modal Image */}
              <div className="h-48 sm:h-72 w-full relative bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover opacity-100 dark:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent"></div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-10 -mt-10 relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-900 dark:text-white leading-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-widest mb-8">
                  {selectedProject.subtitle}
                </p>

                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base sm:text-lg font-light mb-10 text-justify">
                  {selectedProject.description}
                </p>

                {/* Optional External Link */}
                {selectedProject.link && (
                  <div className="mb-10">
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                    >
                      ACCESS DEPLOYMENT 
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}

                {/* Modal Actions */}
                <div className="flex justify-end pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black text-sm font-semibold rounded-full dark:hover:bg-white transition-colors shadow-sm"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}