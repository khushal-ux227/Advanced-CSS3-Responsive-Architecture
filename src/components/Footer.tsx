import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[var(--border-subtle)] bg-[var(--surface-bg)] text-xs text-[var(--text-muted)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-bold text-[var(--text-primary)] tracking-tight text-sm">
            ELENA VANCE / STUDIO
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} Vance Architectural Atelier Ltd. All rights reserved.</span>
        </div>

        {/* Global Cities */}
        <div className="flex items-center gap-4 font-mono text-[11px] text-[var(--text-secondary)]">
          <span>BASEL</span>
          <span aria-hidden="true">/</span>
          <span>KYOTO</span>
          <span aria-hidden="true">/</span>
          <span>NEW YORK</span>
        </div>

        {/* Subtle Links */}
        <div className="flex items-center gap-6">
          <a href="#top" className="hover:text-[var(--text-primary)] transition-colors">
            Return to Top ↑
          </a>
          <a href="#works" className="hover:text-[var(--text-primary)] transition-colors">
            Monographs
          </a>
          <a href="#inquiry" className="hover:text-[var(--text-primary)] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
