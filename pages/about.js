import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Head>
        <title>about me</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Global Wrapper: Inherits dark mode from your global/navbar state */}
      <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 flex flex-col items-center px-6 py-20 font-['Plus_Jakarta_Sans',_sans-serif] transition-colors duration-300">
        
        <div className="max-w-3xl w-full">
          

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">
              About Me
            </h1>
            <div className="w-12 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
          </div>

          {/* Intro Section */}
          <section className="mb-16">
            <p className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
              Hi, I&apos;m Pragyan. I am a sophomore at the University of Connecticut, pursuing a dual degree in Computer Science and Physics, with a minor in Astrophysics.
              I am interested in understanding complex systems and emergent phenomena, from the large-scale structure of the universe to the algorithms we use to model and interpret it.
            </p>
          </section>

          {/* Currently Working On */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">Currently Working On</h2>
            <div className="space-y-4 text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
              <p>
                Right now, I am fascinated by our ability to learn from AI. Working with the UConn Computational Galaxy Formation Group, I am applying Explainable AI (XAI) techniques to learn more about cosmological structures and extract hidden physical information from the universe from an AI model.
              </p>
              <p>
Doing this project made me realize the philosophical questions surrounding transparency and explainability in AI. That’s why I am also collaborating with the Philosophy Department at the University of Connecticut to investigate what transparency and explainability in artificial intelligence truly look like. 
I strongly believe in interdisciplinary research and do not want to be restricted to a single field in my pursuit of knowledge and learning.              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">Other Interests</h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
Beyond code and equations, I’ve always liked attempting to understand unknown things, which pulled me toward journalism. Right now, I’m the Director of Journalism for the UConn Undergraduate Science Journal (USJ). Outside of writing, I really enjoy movies and visual storytelling, and I also like watching video essays on YouTube that break down ideas, films, and culture in interesting ways.            </p>
          </section>

          {/* Inspiration (Quote) */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">cool quote</h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed font-light mb-6">
              I am very inspired by the Indian physicist Dr. Homi Bhabha, and this quote of his is one I really resonate with.
            </p>
            <blockquote className="relative p-6 md:p-8 border-l-2 border-blue-500/50 bg-white dark:bg-white/5 rounded-r-2xl italic text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed shadow-sm">
              <span className="absolute -top-4 left-4 text-5xl text-zinc-200 dark:text-zinc-700 font-serif opacity-50">&quot;</span>
              I know quite clearly what I want out of my life. Life and my emotions are the only things I am conscious of. I love the consciousness of life and I want as much of it as I can get. But the span of one&apos;s life is limited. What comes after death no one knows. Nor do I care. Since, therefore, I cannot increase the content of life by increasing its duration, I will increase it by increasing its intensity. Art, music, poetry and everything else … I do have this one purpose — increasing the intensity of my consciousness of life.
            </blockquote>
          </section>

          {/* Contact */}
          <section className="border-t border-zinc-200 dark:border-zinc-800 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-200">Let&apos;s talk</h2>
              <p className="text-zinc-500">
                You can reach me at:{" "}
                <a href="mailto:pragyan.yadav@uconn.edu" className="font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  pragyan.yadav@uconn.edu
                </a>
              </p>
            </div>

            <div className="flex space-x-6 text-2xl">
              <a
                href="https://www.linkedin.com/in/pragyan-yadav/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ypragyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:-translate-y-1 transition-all duration-200"
              >
                <FaGithub />
              </a>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}