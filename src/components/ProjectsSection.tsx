"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import { PROJECTS_DATA } from "@/data/projects";
import { ArchitectureLensModal } from "./ArchitectureLensModal";
import { ArrowUpRight, Cpu, Terminal, Package, Globe, ExternalLink, Sparkles } from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inspectedProject, setInspectedProject] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack", "Infrastructure", "Developer Tooling", "Open Source"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Developer Tooling":
        return <Package className="h-4 w-4" aria-hidden="true" />;
      case "Infrastructure":
        return <Terminal className="h-4 w-4" aria-hidden="true" />;
      case "Open Source":
        return <Globe className="h-4 w-4" aria-hidden="true" />;
      default:
        return <Cpu className="h-4 w-4" aria-hidden="true" />;
    }
  };

  return (
    <section id="work" className="border-b border-paper-300 bg-paper-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-system-blue">
              Index of Work · 8 Verified Systems
            </div>
            <h2 className="mt-1 font-sans text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Selected projects & infrastructure
            </h2>
            <p className="mt-2 max-w-2xl text-base text-ink-500">
              Applications, deployment tooling, NPM packages, and community infrastructure built across practical engineering constraints.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            role="toolbar"
            aria-label="Filter projects by domain"
            className="flex flex-wrap gap-1.5 rounded-lg border border-paper-300 bg-paper-100 p-1"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`touch-target rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-system-blue ${
                  selectedCategory === cat
                    ? "bg-ink-900 text-white shadow-hard-sm"
                    : "text-ink-600 hover:bg-paper-200 hover:text-ink-900"
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid / Architectural Composition */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {filteredProjects.map((project) => {
            const isPackage = project.category === "Developer Tooling";
            const isInfra = project.category === "Infrastructure";

            return (
              <article
                key={project.title}
                className="group relative flex flex-col justify-between rounded-xl border border-paper-300 bg-white p-6 shadow-hard-sm transition-all duration-200 hover:-translate-y-1 hover:border-ink-800 hover:shadow-hard"
              >
                <div>
                  {/* Card Meta Bar */}
                  <div className="flex items-center justify-between border-b border-paper-200 pb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-medium text-ink-500">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>

                    {project.highlightEmoji && (
                      <span
                        className="inline-flex items-center gap-1 rounded bg-red-50 px-2 py-0.5 font-mono text-xs font-semibold text-red-700 border border-red-200"
                        title="Humorous Instagram Roaster project"
                      >
                        <span>{project.highlightEmoji}</span>
                        <span>Roast Project</span>
                      </span>
                    )}

                    {isPackage && (
                      <span className="font-mono text-[11px] text-system-green font-semibold">
                        npm registry
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-sans text-xl font-bold tracking-tight text-ink-900 group-hover:text-system-blue transition-colors">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-system-blue"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight
                        className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity"
                        aria-hidden="true"
                      />
                    </a>
                  </h3>

                  {/* Tagline */}
                  {project.tagline && (
                    <p className="mt-1 font-mono text-xs text-ink-400">
                      {project.tagline}
                    </p>
                  )}

                  {/* Exact description from projects.json */}
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {project.desc}
                  </p>

                  {/* CLI Snippet Preview for NPM packages */}
                  {project.architectureDetails?.cliCommand && (
                    <div className="mt-3 rounded border border-paper-200 bg-paper-100 px-2.5 py-1.5 font-mono text-xs text-ink-800">
                      <span className="text-system-green font-semibold">$ </span>
                      {project.architectureDetails.cliCommand}
                    </div>
                  )}
                </div>

                {/* Card Footer: Tech tags and Interactive Architecture Lens button */}
                <div className="mt-6 border-t border-paper-200 pt-4">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.split(",").map((t) => (
                      <span
                        key={t.trim()}
                        className="rounded border border-paper-300 bg-paper-50 px-2 py-0.5 font-mono text-[11px] text-ink-700"
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setInspectedProject(project)}
                      className="touch-target inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-system-blue hover:text-ink-900 focus-visible:ring-2 focus-visible:ring-system-blue"
                      aria-label={`Inspect architecture for ${project.title}`}
                    >
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Inspect Architecture</span>
                    </button>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="touch-target inline-flex items-center gap-1 font-mono text-xs text-ink-500 hover:text-ink-900 focus-visible:ring-2 focus-visible:ring-system-blue"
                      aria-label={`View source or package for ${project.title} (opens in new tab)`}
                    >
                      <span>Destination</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal for Signature Interaction: Architecture Lens */}
        <ArchitectureLensModal
          project={inspectedProject}
          onClose={() => setInspectedProject(null)}
        />

      </div>
    </section>
  );
}
