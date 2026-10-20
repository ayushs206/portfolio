import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { ContributionData } from "@/types";
import { GitCommit, ArrowUpRight, Calendar, Info } from "lucide-react";

export function ContributionGraphSection() {
  let contributionData: ContributionData | null = null;

  try {
    const filePath = path.join(process.cwd(), "public", "data", "github-contributions.json");
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      contributionData = JSON.parse(raw);
    }
  } catch (err) {
    console.error("Failed to read contribution data:", err);
  }

  // Level color palette matching our paper/ink technical design
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#9BE9A8] border-[#81CF8E]";
      case 2:
        return "bg-[#40C463] border-[#34A853]";
      case 3:
        return "bg-[#30A14E] border-[#25823E]";
      case 4:
        return "bg-[#216E39] border-[#18532B]";
      default:
        return "bg-[#EBEDF0] border-[#DFE1E5]";
    }
  };

  if (!contributionData) {
    return (
      <section id="contributions" className="border-b border-paper-300 bg-paper-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-xl border border-paper-300 bg-white p-6">
            <h2 className="text-xl font-bold text-ink-900">GitHub Activity Telemetry</h2>
            <p className="mt-2 text-sm text-ink-600">
              Contribution snapshot temporarily unavailable. View verified real-time commits at{" "}
              <a
                href="https://github.com/ayushs206"
                target="_blank"
                rel="noopener noreferrer"
                className="text-system-blue underline"
              >
                github.com/ayushs206
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }

  const { totalContributions, range, weeks, username } = contributionData;

  return (
    <section id="contributions" className="border-b border-paper-300 bg-paper-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-system-blue">
              <GitCommit className="h-4 w-4" aria-hidden="true" />
              <span>Public Activity Telemetry</span>
            </div>
            <h2 className="mt-1 font-sans text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              A year of building in public
            </h2>
            <p className="mt-1 font-mono text-sm text-ink-500">
              <strong className="text-ink-900">{totalContributions} verified contributions</strong> from{" "}
              <span>{range.from}</span> to <span>{range.to}</span>
            </p>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-1.5 rounded border border-paper-300 bg-white px-3.5 py-2 font-mono text-xs font-semibold text-ink-700 shadow-hard-sm transition-all hover:border-ink-800 hover:text-ink-900 focus-visible:ring-2 focus-visible:ring-system-blue"
          >
            <span>Verify on GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Contribution Graph Box */}
        <div className="mt-8 rounded-xl border border-paper-300 bg-white p-5 shadow-hard">
          <div className="flex items-center justify-between border-b border-paper-200 pb-3 mb-4 font-mono text-xs text-ink-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-ink-400" />
              Trailing 53 Calendar Weeks
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-ink-400">Less</span>
              <span className="h-2.5 w-2.5 rounded-sm bg-[#EBEDF0] border border-[#DFE1E5]"></span>
              <span className="h-2.5 w-2.5 rounded-sm bg-[#9BE9A8] border-[#81CF8E]"></span>
              <span className="h-2.5 w-2.5 rounded-sm bg-[#40C463] border-[#34A853]"></span>
              <span className="h-2.5 w-2.5 rounded-sm bg-[#30A14E] border-[#25823E]"></span>
              <span className="h-2.5 w-2.5 rounded-sm bg-[#216E39] border-[#18532B]"></span>
              <span className="text-[11px] text-ink-400">More</span>
            </div>
          </div>

          {/* Horizontally scrollable calendar container for complete width safety on mobile */}
          <div
            className="overflow-x-auto pb-2 focus-visible:ring-2 focus-visible:ring-system-blue"
            tabIndex={0}
            role="region"
            aria-label="GitHub contribution calendar grid"
          >
            <div className="flex min-w-[720px] gap-[3px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      className={`h-[11px] w-[11px] rounded-[2px] border transition-transform hover:scale-125 hover:z-10 focus-visible:scale-125 ${getLevelColor(
                        day.level
                      )}`}
                      title={`${day.count} contributions on ${day.date}`}
                      tabIndex={0}
                      role="gridcell"
                      aria-label={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bot & Data Attribution Note */}
          <div className="mt-4 flex flex-col gap-2 border-t border-paper-100 pt-3 sm:flex-row sm:items-center sm:justify-between text-xs text-ink-500">
            <div className="flex items-center gap-1.5 font-mono text-[11px]">
              <Info className="h-3.5 w-3.5 text-ink-400" />
              <span>Snapshot compiled daily via decoupled bot script. Bot updates are excluded from user metrics.</span>
            </div>
            <span className="font-mono text-[11px] text-ink-400">
              Updated: {new Date(contributionData.generatedAt).toISOString().split("T")[0]}
            </span>
          </div>

          {/* Accessible Table alternative for screen readers */}
          <details className="mt-4 border-t border-paper-200 pt-3">
            <summary className="cursor-pointer font-mono text-xs font-medium text-system-blue hover:underline focus-visible:ring-2 focus-visible:ring-system-blue">
              View accessible data summary table
            </summary>
            <div className="mt-3 max-h-48 overflow-y-auto text-xs text-ink-700">
              <table className="w-full text-left font-mono">
                <thead>
                  <tr className="border-b border-paper-200 text-ink-500">
                    <th className="py-1">Date</th>
                    <th className="py-1">Contributions</th>
                    <th className="py-1">Intensity Level</th>
                  </tr>
                </thead>
                <tbody>
                  {weeks
                    .flatMap((w) => w.contributionDays)
                    .filter((d) => d.count > 0)
                    .slice(-30) // show last 30 active days in summary table
                    .reverse()
                    .map((d) => (
                      <tr key={d.date} className="border-b border-paper-100">
                        <td className="py-1">{d.date}</td>
                        <td className="py-1 font-semibold text-ink-900">{d.count}</td>
                        <td className="py-1">Level {d.level}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <p className="mt-2 text-[11px] text-ink-400">
                (Showing recent active days in text ledger. Complete historic record available via GitHub API.)
              </p>
            </div>
          </details>

        </div>

      </div>
    </section>
  );
}
