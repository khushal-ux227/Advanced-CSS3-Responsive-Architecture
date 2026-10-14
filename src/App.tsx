import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { WorksBentoGrid } from './components/WorksBentoGrid';
import { PrinciplesSection } from './components/PrinciplesSection';
import { PracticeSection } from './components/PracticeSection';
import { RecognitionSection } from './components/RecognitionSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CssArchitectureHUD } from './components/CssArchitectureHUD';
import { Project } from './types/portfolio';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  // Dynamic CSS Variables Light / Dark Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ev_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [gridDebugActive, setGridDebugActive] = useState<boolean>(false);
  const [previewViewport, setPreviewViewport] = useState<'responsive' | 'mobile' | 'tablet' | 'desktop'>('responsive');

  // Synchronize dynamic theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('ev_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleExploreWorks = () => {
    const el = document.getElementById('works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenInquiry = () => {
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenFeaturedCaseStudy = () => {
    const featured = PROJECTS.find((p) => p.id === 'cantilever-coastal-villa') || PROJECTS[0];
    setSelectedProject(featured);
  };

  // Viewport simulator container class calculation
  const getViewportWrapperClass = () => {
    if (previewViewport === 'mobile') {
      return 'max-w-[375px] mx-auto my-8 border-x-4 border-y-8 border-slate-700 rounded-3xl shadow-2xl overflow-hidden bg-[var(--canvas-bg)] transition-all';
    }
    if (previewViewport === 'tablet') {
      return 'max-w-[768px] mx-auto my-8 border-x-4 border-y-8 border-slate-700 rounded-2xl shadow-2xl overflow-hidden bg-[var(--canvas-bg)] transition-all';
    }
    if (previewViewport === 'desktop') {
      return 'max-w-[1280px] mx-auto my-6 border-2 border-slate-600 rounded-xl shadow-2xl overflow-hidden bg-[var(--canvas-bg)] transition-all';
    }
    return 'w-full';
  };

  return (
    <div className={`min-h-screen bg-[var(--canvas-bg)] text-[var(--text-primary)] transition-colors duration-200 ${gridDebugActive ? 'css-grid-debug' : ''}`}>
      {/* Device Viewport Simulation Frame wrapper */}
      <div className={getViewportWrapperClass()}>
        {/* Top Navigation conforming to 3-zone contract */}
        <Header
          currentTheme={theme}
          onToggleTheme={toggleTheme}
          onOpenInquiry={handleOpenInquiry}
        />

        <main id="main-content">
          {/* 2D CSS Grid Hero Section */}
          <Hero
            onExploreWorks={handleExploreWorks}
            onOpenCaseStudy={handleOpenFeaturedCaseStudy}
          />

          {/* Responsive 4-Column Metrics Strip */}
          <MetricsStrip />

          {/* Core 2D Bento CSS Grid with Layout Switcher */}
          <WorksBentoGrid
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* 3-Column Architectural Principles Grid */}
          <PrinciplesSection />

          {/* 3-Column Team & Studio Practice Grid */}
          <PracticeSection />

          {/* Institutional Recognition Grid Table */}
          <RecognitionSection />

          {/* 2-Column Responsive Inquiry Form Grid */}
          <InquirySection />
        </main>

        {/* Clean Semantic Footer */}
        <Footer />
      </div>

      {/* Case Study Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive CSS3 Architecture & Responsive Inspector HUD */}
      <CssArchitectureHUD
        currentTheme={theme}
        gridDebugActive={gridDebugActive}
        onToggleGridDebug={() => setGridDebugActive(!gridDebugActive)}
        previewViewport={previewViewport}
        onSetPreviewViewport={setPreviewViewport}
      />
    </div>
  );
}
