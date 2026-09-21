import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Gamma Isotope Classification on Scintillators",
      subtitle: "Mirion Technologies",
      role: "Physics R&D Intern",
      period: "Summer 2026",
      description:
        "Built C++ Geant4 Monte Carlo simulations and trained machine learning classifiers to identify radioisotopes from continuous Compton spectra without discrete photopeaks.",
      story:
        "Plastic scintillators provide cheap, rugged radiation monitoring over large surface areas, but their low atomic number produces smooth Compton continua rather than clean photopeaks. During my internship at Mirion Technologies, I gathered pulse-height spectra in the lab with calibrated isotopic sources, wrote C++ Geant4 Monte Carlo simulations to model photon attenuation through lead and steel shielding, and trained classifiers to identify radionuclides directly from noisy continua.",
      whatIDid: [
        "Collected experimental gamma-ray spectra in the radiation lab using calibrated isotopic sources (Cs-137, Co-60, Ba-133).",
        "Wrote C++ Geant4 user action classes to simulate detector geometry, Compton scattering kinematics, and multi-layer shielding.",
        "Trained machine learning models on synthetic and experimental continua to classify isotopes under high attenuation.",
      ],
      tags: ["Machine Learning", "C++", "Monte Carlo"],
      image: "/project/mirion.png",
    },
    {
      title: "Interpreting Neural Networks on the Cosmic Web",
      subtitle: "UConn Computational Galaxy Formation Lab",
      role: "Astrophysics AI Researcher",
      period: "2024 - Present",
      description:
        "Understanding CNNs trained to predict cosmological parameters directly from CAMELS hydrodynamic simulation volumes, using gradient attribution to trace what physical features drive network outputs.",
      story:
        "Standard cosmological analysis compresses huge 3D matter distributions into two-point summary statistics, which discards high-order spatial geometry on non-linear scales. We trained convolutional neural networks directly on 2D and 3D density slices from CAMELS simulation suites (IllustrisTNG and SIMBA) to predict parameters like matter density and fluctuation amplitude. Because neural nets can latch onto subgrid numerical feedback instead of real physics, I built an attribution pipeline using Captum to verify whether models track actual gas filaments or localized simulation artifacts.",
      whatIDid: [
        "Preprocessed multi-terabyte CAMELS hydrodynamic simulation snapshots into normalized density tensors in PyTorch.",
        "Trained CNN architectures to infer cosmological parameters across divergent baryonic feedback models.",
        "Built attribution pipelines with Captum (Integrated Gradients, Saliency, Grad-CAM) to verify physical feature relevance.",
      ],
      tags: ["Deep Learning", "PyTorch", "Computer Vision"],
      image: "/project/XAI.png",
    },
    {
      title: "Cosmic Web Topology via DisPerSE",
      subtitle: "UConn Computational Galaxy Formation Lab",
      role: "Astrophysics Researcher",
      period: "2024 - Present",
      description:
        "Extracted 3D filamentary networks from cosmological simulations to benchmark how baryonic feedback processes alter cosmic web topology.",
      story:
        "The cosmic web forms an interconnected structure of halos, filaments, and voids. In this project, I run the DisPerSE manifold extractor across hydrodynamic simulation boxes on HPC clusters to convert continuous density fields into formal mathematical graphs. We then compute graph-theoretic properties like connectivity degree, edge lengths, and centrality to measure how AGN feedback and stellar winds reshape the web compared to gravity-only dark matter runs.",
      whatIDid: [
        "Ran DisPerSE topological extraction pipelines across large-scale simulation snapshots via Slurm on HPC clusters.",
        "Converted topological skeleton manifolds into PyTorch Geometric and NetworkX graph data structures.",
        "Benchmarked network connectivity and persistent homology metrics across SIMBA, IllustrisTNG, and dark matter baselines.",
      ],
      tags: ["Graph Neural Networks", "Graph Theory", "Python"],
      image: "/project/graph.png",
    },
    {
      title: "helio: Solar Generation Forecasting",
      subtitle: "helio",
      role: "Co-Founder",
      period: "2024 - Present",
      description:
        "Collecting real-time rooftop solar irradiance data at UConn and training time-series deep learning models to predict localized power drops.",
      story:
        "Sudden cloud cover can cut localized solar output by up to 70% in seconds, causing distribution-level grid instability. We are gathering real-time irradiance, ambient temperature, and power data from sensor units installed on campus at UConn. Using this dataset, I train time-series deep learning models to forecast drop-offs minutes in advance, giving microgrid controllers enough runway to adjust routing before frequency spikes occur.",
      whatIDid: [
        "Deployed IoT sensor hardware across campus at UConn to record solar irradiance, panel temperature, and power telemetry.",
        "Built asynchronous data pipelines to ingest, clean, and store streaming multi-sensor data at sub-second intervals.",
        "Trained time-series neural network models in PyTorch on local solar data to predict drop-offs across short time horizons.",
      ],
      tags: ["Time-Series", "PyTorch", "Machine Learning"],
      image: "/project/helio2.png",
    },
    {
      title: "Solar Flare Active Region Complexity",
      subtitle: "Wolfram Research",
      role: "Ambassador & Researcher",
      period: "2023 - 2024",
      description:
        "Automated image processing pipelines in Wolfram Language to calculate fractal box-counting dimensions of active solar flare regions.",
      story:
        "Solar flares emerge from rapid magnetic reconnection in active regions. I built an automated pipeline in Wolfram Language to pull multi-wavelength EUV imagery from the NASA Solar Dynamics Observatory. The code applies morphological filtering and box-counting algorithms to quantify boundary tortuosity and fractal dimension over time, testing whether geometric complexity correlates with flare emergence.",
      whatIDid: [
        "Automated image acquisition and calibration for extreme ultraviolet FITS files from the NASA SDO archive.",
        "Implemented 2D box-counting fractal dimension estimation to track perimeter deformation in active regions.",
        "Published technical computational essays on the Wolfram Community platform and presented at the Wolfram Technology Conference.",
      ],
      tags: ["Computer Vision", "Algorithms", "Image Processing"],
      image: "/project/complex.png",
      linkText: "Wolfram Community Essay",
    },
    {
      title: "Silicon Pixel Particle Detector Analysis",
      subtitle: "Wolfram Summer Research Program",
      role: "Student Researcher",
      period: "Summer 2023",
      description:
        "Processed raw spatial hit matrices from Timepix silicon pixel detectors to filter particle hits and evaluate radiation shielding.",
      story:
        "Silicon pixel detectors capture ionizing radiation with spatial cluster geometry, time-over-threshold, and arrival timing. Using raw matrices from a Timepix detector, I developed algorithms in Wolfram Language to cluster pixel hits and classify particle tracks by morphology, separating circular alpha hits from linear cosmic muon tracks and scattered electrons.",
      whatIDid: [
        "Parsed multi-dimensional hit matrices from Timepix pixel detectors into structured arrays.",
        "Engineered geometric filters to separate cosmic ray muon tracks from terrestrial background radiation.",
        "Calculated energy deposition curves and published a technical writeup on the Wolfram Community platform.",
      ],
      tags: ["Data Processing", "Algorithms", "Scientific Computing"],
      image: "/project/pixet.png",
      linkText: "Wolfram Research Essay",
      link: "https://community.wolfram.com/groups/-/m/t/2965243",
    },
  ];

  return (
    <>
      <Head>
        <title>Projects & Research | Pragyan Yadav</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-[#f2f2f3] font-['Plus_Jakarta_Sans',_sans-serif] px-6 sm:px-10 lg:px-12 py-16 sm:py-24 transition-colors duration-300">
        <main className="max-w-7xl mx-auto space-y-16">
          <header className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
              Projects & Research
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              Machine learning pipelines, scientific simulations, and software I have built.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="bg-zinc-50/60 dark:bg-[#0c0d11] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/90 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer"
                >
                  <div className="h-52 w-full overflow-hidden relative bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/80">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={320}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-zinc-400 font-mono">
                        preview
                      </div>
                    )}

                    <div className="absolute top-3.5 left-3.5 bg-black/80 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                      {project.period}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {project.subtitle}
                    </p>
                    {project.role && (
                      <span className="text-[11px] font-mono font-medium text-zinc-500 dark:text-zinc-400">
                        {project.role}
                      </span>
                    )}
                  </div>

                  <h2
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer font-bold text-lg text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </h2>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 text-[11px] font-mono font-medium px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-auto border-t border-zinc-200/80 dark:border-zinc-800/70 text-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Read Overview →
                    </button>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <span>Link</span>
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>pragyan yadav</span>
            <span>2026</span>
          </footer>
        </main>

        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#0b0c10] border border-zinc-200 dark:border-zinc-800 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative my-auto flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {selectedProject.subtitle}
                  </span>
                  <span className="text-zinc-400">·</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    {selectedProject.role}
                  </span>
                  <span className="text-zinc-400">·</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{selectedProject.period}</span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                    {selectedProject.title}
                  </h2>
                </div>

                {selectedProject.image && (
                  <div className="w-full h-60 sm:h-72 rounded-xl overflow-hidden relative bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold font-mono">
                    Context
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                    {selectedProject.story}
                  </p>
                </div>

                {selectedProject.whatIDid && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold font-mono">
                      Technical Contributions
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.whatIDid.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                          <span className="text-blue-600 dark:text-blue-400 select-none pt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2 pt-2">
                  <h3 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold font-mono">
                    Core Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50">
                <div>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      <span>{selectedProject.linkText || "View Publication"}</span>
                      <svg
                        className="w-2.5 h-2.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black text-xs font-semibold rounded-lg transition-colors font-mono"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
