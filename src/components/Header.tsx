import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentTheme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTheme,
  onToggleTheme,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[var(--surface-bg)]/90 backdrop-blur-md border-[var(--border-subtle)] shadow-[var(--shadow-subtle)]'
          : 'bg-[var(--canvas-bg)] border-[var(--border-subtle)]'
      }`}
    >
      {/* Strict Top Bar Contract: Exactly 3 zones separated by gap-8 */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face, no pills, no subtitles) */}
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)] whitespace-nowrap shrink-0 hover:text-[var(--accent-primary)] transition-colors"
        >
          ELENA VANCE <span className="font-light text-[var(--text-muted)] text-base ml-1">/ STUDIO</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <a
            href="#works"
            className="hover:text-[var(--text-primary)] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Works
          </a>
          <a
            href="#principles"
            className="hover:text-[var(--text-primary)] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Principles
          </a>
          <a
            href="#practice"
            className="hover:text-[var(--text-primary)] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Practice
          </a>
          <a
            href="#recognition"
            className="hover:text-[var(--text-primary)] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Recognition
          </a>
          <a
            href="#inquiry"
            className="hover:text-[var(--text-primary)] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] border border-[var(--border-subtle)] transition-colors"
            title={`Active: ${currentTheme.toUpperCase()} theme (CSS Variables dynamic)`}
          >
            {currentTheme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Commission Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Navigation Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            className="md:hidden p-2.5 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--surface-subtle)] border border-[var(--border-subtle)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--surface-bg)] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="#works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--text-primary)] py-2 border-b border-[var(--border-subtle)]"
            >
              Selected Works
            </a>
            <a
              href="#principles"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--text-primary)] py-2 border-b border-[var(--border-subtle)]"
            >
              Design Principles
            </a>
            <a
              href="#practice"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--text-primary)] py-2 border-b border-[var(--border-subtle)]"
            >
              The Practice
            </a>
            <a
              href="#recognition"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--text-primary)] py-2 border-b border-[var(--border-subtle)]"
            >
              Honors & Recognition
            </a>
            <a
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--text-primary)] py-2"
            >
              Commission Inquiry
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-md transition-colors"
            >
              <span>Commission Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
