import React, { useState, useEffect } from 'react';
import { Sliders, Grid, Monitor, Smartphone, Tablet, ChevronDown, ChevronUp, Code2, Eye, EyeOff } from 'lucide-react';

interface CssArchitectureHUDProps {
  currentTheme: 'light' | 'dark';
  gridDebugActive: boolean;
  onToggleGridDebug: () => void;
  previewViewport: 'responsive' | 'mobile' | 'tablet' | 'desktop';
  onSetPreviewViewport: (mode: 'responsive' | 'mobile' | 'tablet' | 'desktop') => void;
}

export const CssArchitectureHUD: React.FC<CssArchitectureHUDProps> = ({
  currentTheme,
  gridDebugActive,
  onToggleGridDebug,
  previewViewport,
  onSetPreviewViewport,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [collapsed, setCollapsed] = useState(false);
  const [showVariablesModal, setShowVariablesModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = () => {
    if (windowWidth < 640) return { label: 'Mobile (xs)', query: 'Default (<640px)', cols: '1-Column Stacks' };
    if (windowWidth < 768) return { label: 'Tablet Small (sm)', query: '@media (min-width: 640px)', cols: '2-Column Grid' };
    if (windowWidth < 1024) return { label: 'Tablet Large (md)', query: '@media (min-width: 768px)', cols: '4-Col Metrics & 2-Col Grid' };
    if (windowWidth < 1200) return { label: 'Desktop (lg)', query: '@media (min-width: 1024px)', cols: '2-Col Hero Split & 3-Col Grids' };
    return { label: 'Wide Baseline (xl)', query: '@media (min-width: 1200px)', cols: '12-Column 2D Bento Grid' };
  };

  const breakpoint = getBreakpoint();

  const cssVariables = [
    { name: '--canvas-bg', desc: 'Viewport canvas ground' },
    { name: '--surface-bg', desc: 'Card and container ground' },
    { name: '--surface-elevated', desc: 'Floating modal and sheet surface' },
    { name: '--border-subtle', desc: '1px hairline architectural divider' },
    { name: '--text-primary', desc: 'High-contrast typography' },
    { name: '--text-secondary', desc: 'Editorial body prose' },
    { name: '--accent-primary', desc: 'Terracotta / architectural amber focal color' },
    { name: '--font-display', desc: 'Outfit geometric sans-serif' },
    { name: '--font-body', desc: 'Plus Jakarta Sans prose' },
    { name: '--font-mono', desc: 'JetBrains Mono tabular figures' },
  ];

  return (
    <>
      {/* Floating HUD at the bottom */}
      <aside
        aria-label="CSS3 Architecture Inspector"
        className="fixed bottom-4 right-4 z-40 max-w-sm rounded-xl border border-[var(--border-contrast)] bg-[var(--surface-bg)]/95 backdrop-blur-md shadow-xl text-[var(--text-primary)] transition-all overflow-hidden"
      >
        {/* HUD Header Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[var(--surface-subtle)] border-b border-[var(--border-subtle)] text-xs">
          <div className="flex items-center gap-2 font-mono font-semibold">
            <Sliders className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span className="text-[11px] uppercase tracking-wider">CSS3 Architecture HUD</span>
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? 'Expand HUD' : 'Collapse HUD'}
            className="p-1 rounded hover:bg-[var(--surface-bg)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            {collapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* HUD Expanded Body */}
        {!collapsed && (
          <div className="p-3.5 space-y-3 text-xs">
            {/* Realtime Breakpoint Telemetry */}
            <div className="space-y-1 font-mono">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[var(--text-muted)]">Active Viewport:</span>
                <span className="text-[var(--text-primary)] font-bold tabular-nums">
                  {windowWidth}px
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[var(--text-muted)]">Media Query:</span>
                <span className="text-[var(--accent-primary)] font-semibold">{breakpoint.label}</span>
              </div>
              <div className="text-[10px] text-[var(--text-muted)] truncate">
                Layout: {breakpoint.cols}
              </div>
            </div>

            {/* Interactive Feature Controls */}
            <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2">
              {/* Toggle CSS Grid Tracks */}
              <button
                onClick={onToggleGridDebug}
                className={`w-full py-1.5 px-2.5 rounded-md text-[11px] font-mono font-medium flex items-center justify-between transition-colors border ${
                  gridDebugActive
                    ? 'bg-amber-500/15 border-amber-500 text-amber-600 dark:text-amber-400 font-bold'
                    : 'bg-[var(--surface-subtle)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Grid className="w-3.5 h-3.5" />
                  <span>2D Grid Track Overlay</span>
                </span>
                <span>{gridDebugActive ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3 text-[var(--text-muted)]" />}</span>
              </button>

              {/* View CSS Variables */}
              <button
                onClick={() => setShowVariablesModal(true)}
                className="w-full py-1.5 px-2.5 rounded-md text-[11px] font-mono font-medium flex items-center justify-between bg-[var(--surface-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Inspect CSS Variables</span>
                </span>
                <span className="text-[10px] text-[var(--text-muted)] uppercase">
                  {currentTheme}
                </span>
              </button>

              {/* Device Emulation Simulator */}
              <div className="pt-1">
                <div className="text-[10px] font-mono uppercase text-[var(--text-muted)] mb-1">
                  Responsive Width Tester:
                </div>
                <div className="grid grid-cols-4 gap-1">
                  <button
                    onClick={() => onSetPreviewViewport('responsive')}
                    className={`py-1 text-[10px] font-mono rounded border flex items-center justify-center gap-1 ${
                      previewViewport === 'responsive'
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--surface-subtle)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
                    }`}
                    title="Fill 100% of current browser window"
                  >
                    <span>Full</span>
                  </button>
                  <button
                    onClick={() => onSetPreviewViewport('desktop')}
                    className={`py-1 text-[10px] font-mono rounded border flex items-center justify-center gap-1 ${
                      previewViewport === 'desktop'
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--surface-subtle)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
                    }`}
                    title="Constrain to 1280px Desktop"
                  >
                    <Monitor className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onSetPreviewViewport('tablet')}
                    className={`py-1 text-[10px] font-mono rounded border flex items-center justify-center gap-1 ${
                      previewViewport === 'tablet'
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--surface-subtle)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
                    }`}
                    title="Constrain to 768px Tablet"
                  >
                    <Tablet className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onSetPreviewViewport('mobile')}
                    className={`py-1 text-[10px] font-mono rounded border flex items-center justify-center gap-1 ${
                      previewViewport === 'mobile'
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                        : 'bg-[var(--surface-subtle)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
                    }`}
                    title="Constrain to 375px Mobile"
                  >
                    <Smartphone className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* CSS Variables Modal */}
      {showVariablesModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setShowVariablesModal(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[var(--surface-bg)] border border-[var(--border-subtle)] p-6 space-y-4 text-[var(--text-primary)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[var(--accent-primary)]" />
                <h3 className="font-display font-bold text-base">
                  Dynamic CSS Variables System
                </h3>
              </div>
              <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--text-muted)]">
                Active: {currentTheme.toUpperCase()}
              </span>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              These semantic custom CSS properties are declared in <code className="text-[var(--accent-primary)] font-mono">:root</code> and overridden under <code className="text-[var(--accent-primary)] font-mono">[data-theme="dark"]</code>. They govern the entire layout contrast, borders, and typography.
            </p>

            <div className="max-h-72 overflow-y-auto space-y-2 pr-1 font-mono text-xs">
              {cssVariables.map((v, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border-subtle)] flex items-center justify-between"
                >
                  <div>
                    <span className="font-semibold text-[var(--accent-primary)]">
                      {v.name}
                    </span>
                    <div className="text-[10px] text-[var(--text-muted)] mt-0.5 font-sans">
                      {v.desc}
                    </div>
                  </div>
                  <div
                    className="w-6 h-6 rounded border border-[var(--border-subtle)]"
                    style={{ backgroundColor: `var(${v.name})` }}
                    title={`Color value of ${v.name}`}
                  />
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex justify-end">
              <button
                onClick={() => setShowVariablesModal(false)}
                className="px-4 py-2 text-xs font-semibold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-md transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
