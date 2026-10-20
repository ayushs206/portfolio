import React from "react";
import Image from "next/image";
import { GraduationCap, MapPin, Code2, Users, Compass } from "lucide-react";

export function AboutSection() {
  const verifiedMilestones = [
    {
      institution: "Thapar Institute of Engineering & Technology, Patiala",
      role: "Bachelor of Engineering in Computer Science",
      period: "2025 — 2029",
      desc: "Focusing on systems programming, web protocols, data structures, and distributed architectures.",
    },
    {
      institution: "ISTE Thapar Chapter",
      role: "Technical Member",
      period: "July 2026 — Present",
      desc: "Co-developed the recruitment quiz portal with peer members, supporting 500+ concurrent students during assessments on an AWS EC2 + MongoDB backend.",
    },
    {
      institution: "OWASP Student Chapter & Creative Computing Society",
      role: "Core Organizing Member",
      period: "2025 — 2026",
      desc: "Contributed to organizing HackTU 7.0 and HackOWASP 8.0, facilitating participation across 100+ hackathon teams.",
    },
  ];

  return (
    <section id="about" className="border-b border-paper-300 bg-paper-100 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-system-blue">
            Background & Profile
          </div>
          <h2 className="mt-1 font-sans text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            From Mansa to Thapar Institute
          </h2>
          <p className="mt-2 text-base text-ink-500">
            A student developer driven by practical execution, collaborative open source, and building reliable systems.
          </p>
        </div>

        {/* Grid: Authentic Portrait + Story & Milestones */}
        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-paper-300 bg-white p-3 shadow-hard">
              <div className="flex items-center justify-between border-b border-paper-200 pb-2 mb-2 font-mono text-[11px] text-ink-400">
                <span>FIG 03. PORTRAIT / AYUSH SINGLA</span>
                <span className="text-ink-600 font-medium">TIET CAMPUS</span>
              </div>

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-paper-200">
                <Image
                  src="/images/portrait-about.jpg"
                  alt="Ayush Singla front-facing portrait photograph"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                  className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="mt-3 flex items-center justify-between font-mono text-xs text-ink-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-system-blue" />
                  Mansa, Punjab, India
                </span>
                <span className="text-ink-700">Engineering Student</span>
              </div>
            </div>
          </div>

          {/* Story & Milestones Column (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* Story Card */}
            <div className="rounded-xl border border-paper-300 bg-white p-6 shadow-hard-sm">
              <h3 className="font-sans text-xl font-bold text-ink-900">
                Engineering from first principles
              </h3>
              
              <div className="mt-4 space-y-3.5 text-base leading-relaxed text-ink-600">
                <p>
                  Born and raised in Mansa, Punjab, I developed a natural curiosity for how digital infrastructure works under the hood. Currently pursuing my Bachelor of Engineering in Computer Science at Thapar Institute of Engineering and Technology, Patiala.
                </p>
                <p>
                  Rather than consuming heavy abstractions blindly, I enjoy building the foundational pieces myself: whether that is writing a custom SMTP server to understand mail transport, crafting NPM packages like <code className="rounded bg-paper-200 px-1.5 py-0.5 font-mono text-xs text-ink-800">create-botflow</code> and <code className="rounded bg-paper-200 px-1.5 py-0.5 font-mono text-xs text-ink-800">create-veriflow-auth</code>, or building <code className="rounded bg-paper-200 px-1.5 py-0.5 font-mono text-xs text-ink-800">Parcel</code> to deploy projects to personal virtual machines without Vercel or complex CI/CD lock-in.
                </p>
                <p>
                  When not coding, I contribute to campus developer societies, co-organize university hackathons, and curate open-source student opportunities through OWASP.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-paper-200 pt-4 font-mono text-xs text-ink-700">
                <span className="flex items-center gap-1 rounded bg-paper-100 px-2.5 py-1">
                  <Code2 className="h-3.5 w-3.5 text-system-blue" />
                  Node.js / Express
                </span>
                <span className="flex items-center gap-1 rounded bg-paper-100 px-2.5 py-1">
                  <Compass className="h-3.5 w-3.5 text-system-green" />
                  MongoDB / AWS
                </span>
                <span className="flex items-center gap-1 rounded bg-paper-100 px-2.5 py-1">
                  <Users className="h-3.5 w-3.5 text-system-amber" />
                  Community & OSS
                </span>
              </div>
            </div>

            {/* Campus Timeline Milestones */}
            <div className="rounded-xl border border-paper-300 bg-white p-6 shadow-hard-sm">
              <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink-400">
                <GraduationCap className="h-4 w-4 text-ink-600" />
                <span>Verified Academic & Campus Activities</span>
              </h3>

              <div className="mt-4 divide-y divide-paper-200">
                {verifiedMilestones.map((item) => (
                  <div key={item.institution} className="py-3.5 first:pt-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="font-sans text-sm font-bold text-ink-900">
                        {item.institution}
                      </span>
                      <span className="font-mono text-xs text-ink-400 sm:text-right">
                        {item.period}
                      </span>
                    </div>
                    <div className="font-mono text-xs font-medium text-system-blue mt-0.5">
                      {item.role}
                    </div>
                    <p className="mt-1 text-xs text-ink-600 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
