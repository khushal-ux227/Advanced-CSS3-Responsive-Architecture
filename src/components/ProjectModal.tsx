import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, MapPin, Calendar, Layers, ShieldCheck, Camera, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[var(--surface-bg)] border border-[var(--border-subtle)] text-[var(--text-primary)] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--surface-bg)]/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-primary)] font-semibold">
              {project.categoryLabel}
            </span>
            <span className="text-[var(--text-muted)]">·</span>
            <span className="font-mono text-xs text-[var(--text-muted)] tabular-nums">
              Ref // {project.id}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] border border-[var(--border-subtle)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Hero Media Container */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-black border border-[var(--border-subtle)]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Subtle bottom info scrim */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-xs text-white/90 font-mono">
              <div className="flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-amber-300" />
                <span>EXIF: {project.exif.focalLength} · {project.exif.aperture} · {project.exif.shutter} · ISO {project.exif.iso}</span>
              </div>
              <span className="hidden sm:inline">Archival Photograph</span>
            </div>
          </div>

          {/* Title & Core Meta Row */}
          <div>
            <h2 id="modal-title" className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                {project.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Year of Commission {project.year}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Area: {project.area}
              </span>
            </div>
          </div>

          {/* 3-Column Metrics Strip if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border-subtle)]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    {m.label}
                  </div>
                  <div className="text-sm font-bold text-[var(--text-primary)] font-display">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Narrative Grid: Challenge vs. Architectural Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[var(--border-subtle)]">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                Site & Engineering Challenge
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Tectonic Solution & Methodology
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Materials Palette & Client Metadata */}
          <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-subtle)]/50 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              Material Specification & Patron
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap gap-2 text-[var(--text-primary)] font-medium">
                {project.materials.map((mat, i) => (
                  <span key={i} className="underline decoration-[var(--border-contrast)] underline-offset-4">
                    {mat}
                  </span>
                ))}
              </div>
              <div className="text-[var(--text-muted)] font-mono">
                Client: <span className="text-[var(--text-primary)] font-medium">{project.client}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[var(--border-subtle)] bg-[var(--surface-subtle)] flex items-center justify-between text-xs">
          <span className="text-[var(--text-muted)]">
            Press <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-bg)] border border-[var(--border-subtle)] font-mono text-[10px]">ESC</kbd> to return to gallery
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-md transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
