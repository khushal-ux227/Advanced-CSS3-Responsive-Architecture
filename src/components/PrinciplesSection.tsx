import React from 'react';
import { PRINCIPLES } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--surface-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)] mb-2 font-mono">
            Tectonic Tenets
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Architectural Philosophy & Methodology
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Every built work represents an uncompromising synthesis of raw matter, solar choreography, and spatial sequencing.
          </p>
        </div>

        {/* 3-Column Responsive CSS Grid */}
        <div className="principles-grid">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-8 rounded-xl border border-[var(--border-subtle)] bg-[var(--canvas-bg)] flex flex-col justify-between hover:border-[var(--border-contrast)] transition-colors group"
            >
              <div>
                <div className="font-mono text-3xl font-light text-[var(--accent-primary)] mb-4 tabular-nums">
                  {principle.number}.
                </div>

                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {principle.title}
                </h3>

                <p className="text-xs font-medium text-[var(--accent-primary)] mb-4 font-mono">
                  {principle.tagline}
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {principle.description}
                </p>
              </div>

              {/* Clean unboxed bullet list with subtle separators */}
              <div className="pt-6 border-t border-[var(--border-subtle)] space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                  Key Invariants
                </div>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  {principle.keyAspects.map((aspect, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-primary)] select-none">―</span>
                      <span>{aspect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
