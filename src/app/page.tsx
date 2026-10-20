import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WorkingSystemsSection } from "@/components/WorkingSystemsSection";
import { ContributionGraphSection } from "@/components/ContributionGraphSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-paper-100">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <ProjectsSection />
        <WorkingSystemsSection />
        <ContributionGraphSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
