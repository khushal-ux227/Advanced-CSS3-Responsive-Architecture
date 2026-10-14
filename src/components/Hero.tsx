import React from 'react';
import { ArrowDown, Compass, Maximize2 } from 'lucide-react';

interface HeroProps {
  onExploreWorks: () => void;
  onOpenCaseStudy: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWorks, onOpenCaseStudy }) => {
  return (
    <section id="top" className="relative pt-8 pb-14 border-b border-[var(--border-subtle)]">
      {/* 2D CSS Grid Layout Container: Desktop 1440px wide baseline */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="hero-grid items-stretch">
          {/* Left Column: Typographic Hierarchy & Editorial Intent */}
          <div className="flex flex-col justify-between py-2 lg:py-6">
            <div>
              {/* Quiet unboxed kicker text (NO PILLS) */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                <span>Architecture</span>
                <span aria-hidden="true">·</span>
                <span>Spatial Systems</span>
                <span aria-hidden="true">·</span>
                <span>Tectonic Matter</span>
              </div>

              {/* Dominant Headline with balanced text wrap */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-6 [text-wrap:balance]">
                Sculpting Void, Daylight & Raw Monolithic Matter.
              </h1>

              {/* Editorial Lead Prose */}
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mb-8">
                Elena Vance Studio conceives architectural monuments and micro-climates calibrated to their landscape. By orchestrating structural honesty, passive thermal inertia, and sensory voids, we transform spatial thresholds into timeless human rituals.
              </p>
            </div>

            {/* Localized Flexbox Action Controls */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreWorks}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-md transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
                >
                  <span>Explore Selected Works</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <a
                  href="#principles"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--surface-bg)] hover:bg-[var(--surface-subtle)] border border-[var(--border-contrast)] rounded-md transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Compass className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>Design Manifesto</span>
                </a>
              </div>

              {/* Clean unboxed proof metadata with typographic separators */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
                <span>Practicing in Basel & Kyoto</span>
                <span aria-hidden="true">·</span>
                <span>Pritzker Emerging Monograph Citation</span>
                <span aria-hidden="true">·</span>
                <span>100% Embodied Carbon Neutral</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container at Matching Height */}
          <div className="relative group rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-bg)] min-h-[380px] lg:min-h-[520px] flex flex-col justify-end">
            <img
              src="/src/assets/images/hero_architectural_monograph_1791967516850.jpg"
              alt="Cape Mendocino Coastal Monograph by Elena Vance Studio"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            {/* Interactive Image Footer Overlay */}
            <div className="relative z-10 p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-amber-300/90">
                  Featured Monograph // No. 01
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Cape Mendocino Coastal Monograph
                </h2>
                {/* Clean unboxed specs */}
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span>Pacific Coast, USA</span>
                  <span aria-hidden="true">·</span>
                  <span>1,420 m²</span>
                  <span aria-hidden="true">·</span>
                  <span>Board-Formed Concrete</span>
                </div>
              </div>

              <button
                onClick={onOpenCaseStudy}
                className="self-start sm:self-auto px-3.5 py-2 text-xs font-semibold tracking-wider uppercase bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-md text-white border border-white/30 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>View Case Study</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
