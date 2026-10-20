"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import { X, ArrowUpRight, Copy, Check, Terminal, Server, Layers, Cpu } from "lucide-react";

interface ArchitectureLensModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ArchitectureLensModal({ project, onClose }: ArchitectureLensModalProps) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCli = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="architecture-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-xl border-2 border-ink-900 bg-paper-50 p-6 shadow-2xl transition-all sm:p-8">
        
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-paper-300 pb-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-ink-500">
              <span className="rounded bg-paper-200 px-2 py-0.5 font-semibold uppercase text-ink-700">
                {project.category}
              </span>
              <span>•</span>
              <span>SYSTEMS ARCHITECTURE LENS</span>
            </div>
            <h2
              id="architecture-modal-title"
              className="mt-1 font-sans text-2xl font-bold tracking-tight text-ink-900"
            >
              {project.title}
              {project.highlightEmoji && (
                <span className="ml-2 text-xl" role="img" aria-label="Roast icon">
                  {project.highlightEmoji}
                </span>
              )}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="touch-target inline-flex items-center justify-center rounded-lg p-2 text-ink-500 hover:bg-paper-200 hover:text-ink-900 focus-visible:ring-2 focus-visible:ring-system-blue"
            aria-label="Close architecture lens"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-6">
          
          {/* Exact Verified Description */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-400">
              System Description
            </h3>
            <p className="mt-1 text-base leading-relaxed text-ink-700">
              {project.desc}
            </p>
          </div>

          {/* CLI Scaffolding command if applicable */}
          {project.architectureDetails?.cliCommand && (
            <div className="rounded-lg border border-paper-300 bg-ink-900 p-3.5 text-white">
              <div className="flex items-center justify-between pb-2 font-mono text-xs text-paper-400">
                <span className="flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-system-green" />
                  Terminal Execution
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyCli(project.architectureDetails!.cliCommand!)}
                  className="flex items-center gap-1 rounded bg-ink-800 px-2 py-1 font-mono text-xs text-paper-200 hover:bg-ink-700 focus-visible:ring-2 focus-visible:ring-system-blue"
                  aria-label="Copy CLI command"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-system-green" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <code className="block font-mono text-sm text-system-green">
                $ {project.architectureDetails.cliCommand}
              </code>
            </div>
          )}

          {/* Architecture Data Flow Diagram */}
          {project.architectureDetails && (
            <div className="rounded-lg border border-paper-300 bg-paper-100 p-4 font-mono text-xs">
              <h3 className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-ink-900 mb-3">
                <Cpu className="h-4 w-4 text-system-blue" />
                Data Flow & Subsystem Lifecycle
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded border border-paper-200 bg-white p-3">
                  <span className="block font-semibold text-ink-500 uppercase text-[10px]">
                    01. Inbound
                  </span>
                  <span className="mt-1 block text-ink-800">
                    {project.architectureDetails.inputs}
                  </span>
                </div>

                <div className="rounded border border-paper-200 bg-white p-3">
                  <span className="block font-semibold text-system-blue uppercase text-[10px]">
                    02. Engine Logic
                  </span>
                  <span className="mt-1 block text-ink-800">
                    {project.architectureDetails.processing}
                  </span>
                </div>

                <div className="rounded border border-paper-200 bg-white p-3">
                  <span className="block font-semibold text-system-green uppercase text-[10px]">
                    03. Deliverable
                  </span>
                  <span className="mt-1 block text-ink-800">
                    {project.architectureDetails.outputs}
                  </span>
                </div>
              </div>

              {/* Deployment Environment */}
              <div className="mt-3 flex items-center gap-2 pt-2 border-t border-paper-200 text-ink-600">
                <Server className="h-3.5 w-3.5 text-ink-500" />
                <span className="font-semibold text-ink-800">Deployment Target:</span>
                <span>{project.architectureDetails.deployment}</span>
              </div>
            </div>
          )}

          {/* Verified Technologies */}
          <div>
            <h3 className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink-400">
              <Layers className="h-3.5 w-3.5 text-ink-500" />
              Verified Stack
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.split(",").map((techItem) => (
                <span
                  key={techItem.trim()}
                  className="rounded-md border border-paper-300 bg-white px-2.5 py-1 font-mono text-xs font-medium text-ink-800"
                >
                  {techItem.trim()}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Direct Destination */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-paper-300 pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center gap-2 rounded border border-ink-900 bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white shadow-hard-sm transition-all hover:-translate-y-0.5 hover:bg-ink-800 focus-visible:ring-2 focus-visible:ring-system-blue"
          >
            <span>Open Destination</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="touch-target rounded border border-paper-300 px-4 py-2 text-sm font-medium text-ink-700 hover:bg-paper-200 focus-visible:ring-2 focus-visible:ring-system-blue"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
