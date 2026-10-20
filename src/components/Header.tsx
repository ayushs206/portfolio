"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Systems", href: "#systems" },
    { label: "Activity", href: "#contributions" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-paper-300 bg-paper-100/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex flex-col font-sans transition-opacity hover:opacity-80"
          >
            <span className="text-base font-bold tracking-tight text-ink-900 sm:text-lg">
              Ayush Singla
            </span>
            <span className="font-mono text-xs text-ink-500">
              TIET Patiala · Mansa, PB
            </span>
          </Link>
          <div className="hidden items-center gap-2 rounded-full border border-paper-300 bg-paper-50 px-2.5 py-1 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-system-green opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-system-green"></span>
            </span>
            <span className="font-mono text-[11px] font-medium text-ink-700">
              Open to systems work
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="touch-target inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-paper-200 hover:text-ink-900 focus-visible:ring-2 focus-visible:ring-system-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:ayushsingla206@gmail.com"
            className="touch-target ml-2 inline-flex items-center gap-1 rounded border border-ink-900 bg-ink-900 px-3 py-2 text-sm font-medium text-white shadow-hard-sm transition-all hover:-translate-y-0.5 hover:bg-ink-800 focus-visible:ring-2 focus-visible:ring-system-blue"
          >
            <span>Email Ayush</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="touch-target inline-flex items-center justify-center rounded-md p-2 text-ink-700 hover:bg-paper-200 hover:text-ink-900 md:hidden focus-visible:ring-2 focus-visible:ring-system-blue"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-paper-300 bg-paper-100 px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="touch-target flex items-center rounded-md px-3 py-2 text-base font-medium text-ink-800 hover:bg-paper-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:ayushsingla206@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="touch-target mt-2 flex items-center justify-center gap-1.5 rounded border border-ink-900 bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white shadow-hard-sm"
            >
              <span>Email Ayush</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
