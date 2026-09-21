import Head from "next/head";

export default function Bookshelf() {
  const sections = [
    // 1. ESSAYS & MEDIA (ON TOP)
    {
      id: "essays-media",
      title: "Essays & Media",
      items: [
        {
          title: "My wife almost died, and I thought about movies...",
          creator: "Like Stories of Old",
          year: "YouTube",
          link: "https://www.youtube.com/watch?v=cw0zx2cStlU",
        },
        {
          title: "The Time Travel Movie That Doesn't Move",
          creator: "Nerdwriter1",
          year: "YouTube",
          link: "https://www.youtube.com/watch?v=JO_LMc7YkBw",
        },
        {
          title: "Akira Kurosawa - Composing Movement",
          creator: "Every Frame a Painting",
          year: "YouTube",
          link: "https://www.youtube.com/watch?v=doaQC-S8de8",
        },
        {
          title: "The Bittersweet Tragedy Of Cowboy Bebop",
          creator: "Soul",
          year: "YouTube",
          link: "https://www.youtube.com/watch?v=ymNSMqe1l9Y",
        },
        {
          title: "Escaping Flatland",
          creator: "Henrik Karlsson",
          year: "Blog",
        },
        {
          title: "Paul Graham Essays",
          creator: "Paul Graham",
          year: "Essays",
        },
        {
          title: "Stephen Wolfram Writings",
          creator: "Stephen Wolfram",
          year: "Blog",
        },
      ],
    },

    // 2. MOVIES (IN THE MIDDLE)
    {
      id: "movies",
      title: "Cinema",
      items: [
        {
          title: "Chungking Express",
          creator: "Dir. Wong Kar-wai",
          year: "1994",
        },
        {
          title: "The Summit of the Gods",
          creator: "Dir. Patrick Imbert",
          year: "2021",
        },
        {
          title: "Ocean's Eleven",
          creator: "Dir. Steven Soderbergh",
          year: "2001",
        },
        {
          title: "Nayak: The Hero",
          creator: "Dir. Satyajit Ray",
          year: "1966",
        },
      ],
    },

    // 3. BOOKS (AT THE BOTTOM)
    {
      id: "books",
      title: "Books",
      items: [
        {
          title: "Dune",
          creator: "Frank Herbert",
          year: "1965",
        },
        {
          title: "Memories, Dreams, Reflections",
          creator: "Carl Jung",
          year: "1962",
        },
        {
          title: "The Last Man Who Knew Everything",
          creator: "David N. Schwartz",
          year: "2017",
        },
        {
          title: "A Mathematician's Apology",
          creator: "G. H. Hardy",
          year: "1940",
        },
        {
          title: "Sculpting in Time",
          creator: "Andrei Tarkovsky",
          year: "1986",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Bookshelf & Media | Pragyan Yadav</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-[#f2f2f3] font-['Plus_Jakarta_Sans',_sans-serif] px-6 sm:px-12 lg:px-16 py-16 sm:py-24 flex flex-col items-center selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-600/35 dark:selection:text-blue-100 transition-colors duration-300">
        <main className="max-w-4xl w-full space-y-16">

          {/* Big Bold Headline */}
          <header className="space-y-3 pb-8 border-b border-zinc-200 dark:border-zinc-800/80">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
              Bookshelf<span className="text-blue-600 dark:text-blue-400">.</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              A list of video essays, blogs, films, and books that have shaped how I think.
            </p>
          </header>

          {/* Minimalist Lists */}
          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.id} className="space-y-4">
                
                {/* Section Header */}
                <div className="border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                    {section.title}
                  </h2>
                </div>

                {/* Items */}
                <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group"
                    >
                      <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4 decoration-blue-500/50 transition-colors"
                          >
                            <span>{item.title}</span>
                            <svg
                              className="w-2.5 h-2.5 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
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
                        ) : (
                          item.title
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500 shrink-0">
                        <span>{item.creator}</span>
                        <span>·</span>
                        <span>{item.year}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </section>
            ))}
          </div>

          {/* Minimal Footer */}
          <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-500">
            <span>pragyan yadav · storrs, ct</span>
            <span>2026</span>
          </footer>

        </main>
      </div>
    </>
  );
}
