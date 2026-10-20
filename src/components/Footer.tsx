import React from "react";
import { ArrowUpRight, Mail, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-paper-300 bg-paper-200 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          
          {/* Main Call to Connect (7 cols) */}
          <div className="space-y-4 md:col-span-7">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-system-blue">
              Contact & Connections
            </div>
            <h2 className="font-sans text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Let&apos;s build useful systems together.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-ink-600 sm:text-base">
              Available for technical internships, open-source collaborations, and systems engineering discussions. Reach out via email or connect on LinkedIn and GitHub.
            </p>

            <div className="pt-2">
              <a
                href="mailto:ayushsingla206@gmail.com"
                className="touch-target inline-flex items-center gap-2 rounded border border-ink-900 bg-ink-900 px-5 py-3 font-mono text-sm font-semibold text-white shadow-hard transition-all hover:-translate-y-0.5 hover:bg-ink-800 focus-visible:ring-2 focus-visible:ring-system-blue"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>ayushsingla206@gmail.com</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Links & Telemetry (5 cols) */}
          <div className="flex flex-col justify-between space-y-6 md:col-span-5 md:items-end">
            
            {/* Minimal Exact Destination Links */}
            <div className="flex flex-col space-y-2 sm:items-end">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-400">
                Verified Destinations
              </span>
              
              <div className="flex flex-col space-y-1 sm:items-end">
                <a
                  href="https://linkedin.com/in/ayushs206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center gap-2 font-mono text-sm text-ink-700 hover:text-system-blue focus-visible:ring-2 focus-visible:ring-system-blue"
                  aria-label="LinkedIn profile of Ayush Singla (opens in new tab)"
                >
                  <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/ayushs206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center gap-2 font-mono text-sm text-ink-700 hover:text-system-blue focus-visible:ring-2 focus-visible:ring-system-blue"
                  aria-label="GitHub profile of Ayush Singla (opens in new tab)"
                >
                  <GithubIcon className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <a
                  href="mailto:ayushsingla206@gmail.com"
                  className="touch-target inline-flex items-center gap-2 font-mono text-sm text-ink-700 hover:text-system-blue focus-visible:ring-2 focus-visible:ring-system-blue"
                  aria-label="Send email to Ayush Singla"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Email</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Local Time & Location info */}
            <div className="font-mono text-xs text-ink-500 sm:text-right">
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Clock className="h-3.5 w-3.5 text-ink-400" />
                <span>Patiala, Punjab, India (IST · UTC+5:30)</span>
              </div>
              <div className="mt-1 text-[11px] text-ink-400">
                Thapar Institute of Engineering and Technology
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Credits & Integrity line */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-paper-300 pt-6 text-center font-mono text-xs text-ink-400 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Ayush Singla. All rights reserved.</p>
          <p>
            Designed & engineered with authentic assets and verified data.
          </p>
        </div>

      </div>
    </footer>
  );
}
