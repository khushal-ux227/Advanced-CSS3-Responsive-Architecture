import React from 'react';
import { TEAM } from '../data/portfolioData';

export const PracticeSection: React.FC = () => {
  return (
    <section id="practice" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--canvas-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)] mb-2 font-mono">
              The Studio
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Partners & Collaborative Practice
            </h2>
          </div>
          <p className="text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
            Operating as an international atelier uniting structural craft, computational analysis, and geological sensitivity.
          </p>
        </div>

        {/* 3-in-a-Row Responsive CSS Grid as specified in Portfolio Reference */}
        <div className="team-grid">
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-bg)] hover:border-[var(--border-contrast)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover border border-[var(--border-subtle)]"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-[var(--accent-primary)]">
                      {member.role}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] font-mono">
                      {member.education}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    Discipline Focus
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {member.focus}
                  </p>
                </div>
              </div>

              {/* Clean unboxed footer metadata */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="text-[var(--text-muted)] font-mono">Principal Work:</span>
                <span className="font-medium text-[var(--text-primary)] truncate max-w-[180px]">
                  {member.selectedWork}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
