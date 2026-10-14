import React from 'react';
import { STUDIO_METRICS } from '../data/portfolioData';

export const MetricsStrip: React.FC = () => {
  return (
    <section className="py-8 border-b border-[var(--border-subtle)] bg-[var(--surface-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="metrics-grid">
          {STUDIO_METRICS.map((metric, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-[var(--surface-bg)] flex flex-col justify-between transition-colors hover:bg-[var(--surface-subtle)]"
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums">
                  {metric.value}
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[var(--accent-primary)] font-mono">
                  {metric.unit}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-medium leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
