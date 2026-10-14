import React from 'react';
import { RECOGNITIONS } from '../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

export const RecognitionSection: React.FC = () => {
  return (
    <section id="recognition" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--surface-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)] mb-2 font-mono">
              Honors & Citations
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Institutional Recognition & Monograph Awards
            </h2>
          </div>
          <p className="text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
            Independent jury honors evaluating tectonic innovation, civic permanence, and environmental ethics.
          </p>
        </div>

        {/* 2D CSS Grid Table Layout */}
        <div className="border border-[var(--border-subtle)] rounded-xl overflow-hidden divide-y divide-[var(--border-subtle)] bg-[var(--canvas-bg)]">
          {RECOGNITIONS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[var(--surface-subtle)] transition-colors"
            >
              <div className="md:col-span-1 font-mono text-sm font-semibold text-[var(--text-muted)] tabular-nums">
                {item.year}
              </div>

              <div className="md:col-span-4">
                <div className="font-display text-base font-bold text-[var(--text-primary)]">
                  {item.award}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {item.organization}
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="text-xs text-[var(--text-secondary)] font-medium">
                  {item.project}
                </div>
              </div>

              <div className="md:col-span-3 text-right flex items-center justify-between md:justify-end gap-3">
                <span className="text-xs font-mono text-[var(--accent-primary)]">
                  {item.type}
                </span>
                <Award className="w-4 h-4 text-[var(--text-subtle)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
