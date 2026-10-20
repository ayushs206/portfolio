import React from "react";
import Image from "next/image";
import { Server, Database, ShieldCheck, Terminal, Cpu, Users } from "lucide-react";

export function WorkingSystemsSection() {
  const capabilities = [
    {
      icon: <Server className="h-4 w-4 text-system-blue" />,
      title: "Backend & Runtime",
      desc: "Node.js and Express.js REST services designed for asynchronous I/O, custom protocol parsers (SMTP RFC 5321), and decoupled worker daemons.",
      stack: ["Node.js", "Express", "C++", "JavaScript"],
    },
    {
      icon: <Database className="h-4 w-4 text-system-green" />,
      title: "Storage & Cloud Infrastructure",
      desc: "Dedicated AWS EC2 instances, MongoDB clusters, custom Linux VPS environments managed with PM2 and zero-downtime deployment pipelines.",
      stack: ["AWS EC2", "MongoDB", "Linux VPS", "PM2"],
    },
    {
      icon: <ShieldCheck className="h-4 w-4 text-system-amber" />,
      title: "Auth, Protocols & Security",
      desc: "JWT access/refresh token lifecycles, GitHub OAuth handshakes, bcrypt credential hashing, and transactional email deliverability via Resend.",
      stack: ["JWT", "GitHub OAuth", "Resend", "Bcrypt"],
    },
    {
      icon: <Users className="h-4 w-4 text-ink-700" />,
      title: "Campus Scale & Hackathons",
      desc: "Co-developed the full-stack recruitment quiz platform for ISTE Thapar Chapter serving 500+ concurrent students; organized HackTU 7.0 and HackOWASP 8.0 (100+ teams).",
      stack: ["ISTE Thapar", "HackTU 7.0", "HackOWASP 8.0"],
    },
  ];

  return (
    <section id="systems" className="border-b border-paper-300 bg-paper-100 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-system-blue">
            Technical Foundations · Process & Proof
          </div>
          <h2 className="mt-1 font-sans text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Working systems and technical range
          </h2>
          <p className="mt-2 text-base text-ink-500">
            Real software built around concurrency, protocol parsing, and self-hosted deployments. No synthetic vanity metrics or fake dashboards.
          </p>
        </div>

        {/* Content Grid: Real Process Image + Verified Capabilities */}
        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Authentic Process Image (6 cols) */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-paper-300 bg-white p-3 shadow-hard">
              <div className="flex items-center justify-between border-b border-paper-200 pb-2 mb-2 font-mono text-[11px] text-ink-400">
                <span>FIG 02. PROCESS / COMPILATION & RUNTIME</span>
                <span className="text-ink-600 font-medium">TIET PATIALA</span>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-ink-900">
                <Image
                  src="/images/process-code.jpg"
                  alt="Ayush Singla coding, debugging, and reviewing system code in process"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                  className="object-cover object-center filter contrast-[1.05]"
                />
              </div>

              <div className="mt-3 flex items-center justify-between font-mono text-xs text-ink-500">
                <span>Active code & process review</span>
                <span className="text-ink-700">Verified workstation environment</span>
              </div>
            </div>
          </div>

          {/* Capabilities List (6 cols) */}
          <div className="space-y-4 lg:col-span-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-paper-300 bg-white p-5 shadow-hard-sm transition-all hover:border-ink-800"
              >
                <div className="flex items-center gap-2.5">
                  <div className="rounded border border-paper-200 bg-paper-50 p-2">
                    {cap.icon}
                  </div>
                  <h3 className="font-sans text-base font-bold text-ink-900">
                    {cap.title}
                  </h3>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {cap.desc}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5 border-t border-paper-100 pt-2.5">
                  {cap.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-paper-100 px-2 py-0.5 font-mono text-[11px] font-medium text-ink-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
