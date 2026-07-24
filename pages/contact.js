import Head from "next/head";
import { useState } from "react";
import { CONTACT_EMAIL } from "../components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Helio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>Contact — Helio</title>
        <meta name="description" content="Get in touch with Helio about piloting, partnerships, or advising opportunities." />
      </Head>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">Contact</p>
          <h1 className="section-heading">Get in touch.</h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Interested in piloting Helio, partnering as an installer, or advising the team? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <p className="text-lg font-semibold text-slate-850">Opening your email client&hellip;</p>
                <p className="text-sm text-slate-600">
                  If it didn&apos;t open, email us directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-helio-600 hover:text-helio-700 font-medium">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-850 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm text-slate-850 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-helio-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-850 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm text-slate-850 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-helio-500 focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-850 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm text-slate-850 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-helio-500 focus:border-transparent resize-y"
                    placeholder="Tell us about your interest in Helio..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Submit
                </button>
              </form>
            )}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">Or reach us directly at</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-block text-lg font-semibold text-helio-600 hover:text-helio-700 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
