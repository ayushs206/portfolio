import React from "react";
import Image from "next/image";
import { ArrowDown, Mail, Terminal, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-paper-300 bg-paper-100 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Text Column (7 cols on desktop) */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* Student & Systems Metadata Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-md border border-paper-300 bg-paper-50 px-3 py-1.5 font-mono text-xs text-ink-700">
              <span className="flex items-center gap-1 text-ink-900 font-medium">
                <MapPin className="h-3.5 w-3.5 text-system-blue" aria-hidden="true" />
                Mansa → Thapar Institute, Patiala
              </span>
              <span className="text-paper-400">/</span>
              <span className="text-ink-500">BTech Computer Science</span>
            </div>

            {/* Main Headline: strictly fits 2 lines across mobile and desktop */}
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Systems developer building practical web infrastructure.
            </h1>

            {/* Readable, honest supporting sentence */}
            <p className="max-w-2xl text-base text-ink-500 sm:text-lg sm:leading-relaxed">
              Student engineer focused on Node.js, Express, MongoDB, and AWS. Replicating deployment platforms, building Discord developer tooling, and engineering practical backend architectures.
            </p>

            {/* Core Action Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="touch-target inline-flex items-center justify-center gap-2 rounded border border-ink-900 bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-hard transition-all hover:-translate-y-0.5 hover:bg-ink-800 focus-visible:ring-2 focus-visible:ring-system-blue"
              >
                <span>View the work</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="mailto:ayushsingla206@gmail.com"
                className="touch-target inline-flex items-center justify-center gap-2 rounded border border-paper-400 bg-paper-50 px-5 py-3 text-sm font-semibold text-ink-800 transition-all hover:-translate-y-0.5 hover:border-ink-700 hover:bg-white focus-visible:ring-2 focus-visible:ring-system-blue"
              >
                <Mail className="h-4 w-4 text-ink-500" aria-hidden="true" />
                <span>Email Ayush</span>
              </a>

              <div className="flex items-center gap-1.5 pl-2 sm:pl-3">
                <a
                  href="https://github.com/ayushs206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center justify-center rounded p-2.5 text-ink-500 hover:bg-paper-200 hover:text-ink-900 focus-visible:ring-2 focus-visible:ring-system-blue"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <GithubIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com/in/ayushs206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center justify-center rounded p-2.5 text-ink-500 hover:bg-paper-200 hover:text-ink-900 focus-visible:ring-2 focus-visible:ring-system-blue"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Telemetry pill */}
            <div className="flex items-center gap-3 pt-4 font-mono text-xs text-ink-400">
              <span className="flex items-center gap-1">
                <Terminal className="h-3.5 w-3.5 text-ink-500" />
                Stack: Node.js · Express · MongoDB · AWS · Discord.js
              </span>
            </div>
          </div>

          {/* Authentic Portrait Cutout Column (5 cols on desktop) */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
              
              {/* Engineering Blueprint Frame */}
              <div className="relative rounded-xl border border-paper-300 bg-paper-50 p-3 shadow-hard">
                <div className="flex items-center justify-between border-b border-paper-200 pb-2 mb-2 font-mono text-[11px] text-ink-400">
                  <span>FIG 01. IDENTITY / ENGINEER</span>
                  <span className="text-system-green font-medium">● ACTIVE</span>
                </div>
                
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-paper-200">
                  <Image
                    src="/images/hero-cutout.png"
                    alt="Ayush Singla portrait cutout"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                    className="object-contain object-bottom transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between font-mono text-xs text-ink-500">
                  <span>Ayush Singla</span>
                  <span className="rounded bg-paper-200 px-1.5 py-0.5 text-[10px] text-ink-700">
                    Thapar Institute &apos;29
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
