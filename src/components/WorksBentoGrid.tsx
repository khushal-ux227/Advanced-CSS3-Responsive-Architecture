import React, { useState, useMemo } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { LayoutGrid, Grid3X3, Table, ArrowUpRight, Search, Eye } from 'lucide-react';

interface WorksBentoGridProps {
  onSelectProject: (project: Project) => void;
}

type ViewMode = 'bento' | 'masonry' | 'table';
type CategoryFilter = 'all' | 'residential' | 'civic' | 'facades' | 'experimental';

export const WorksBentoGrid: React.FC<WorksBentoGridProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('bento');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="works" className="py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header with single dominant anchor */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)] mb-2 font-mono">
              Portfolio & Spatial Archives
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Selected Works & Architectural Monoliths
            </h2>
          </div>

          <p className="text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
            Constructed commissions spanning civic sculpture institutions, kinetic solar research facilities, and coastal residencies.
          </p>
        </div>

        {/* Toolbar: Localized Flexbox Alignment for Filtering & Layout Switching */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-[var(--border-subtle)]">
          {/* Category Filter: Interactive Segmented Control (Allowed functional buttons) */}
          <div className="flex items-center gap-1 p-1 bg-[var(--surface-subtle)] rounded-lg overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Typologies ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('residential')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'residential'
                  ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Residential & Pavilions
            </button>
            <button
              onClick={() => setActiveCategory('civic')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'civic'
                  ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Civic & Cultural
            </button>
            <button
              onClick={() => setActiveCategory('facades')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'facades'
                  ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Kinetic & Facades
            </button>
            <button
              onClick={() => setActiveCategory('experimental')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'experimental'
                  ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Experimental
            </button>
          </div>

          {/* Right Controls: Search & View Mode Switcher */}
          <div className="flex items-center gap-3 self-end lg:self-auto w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 lg:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                placeholder="Search materials, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[var(--surface-bg)] border border-[var(--border-subtle)] rounded-md text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
              />
            </div>

            {/* Layout Mode Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-[var(--surface-subtle)] rounded-lg shrink-0">
              <button
                onClick={() => setViewMode('bento')}
                title="2D CSS Bento Grid Layout"
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === 'bento'
                    ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                aria-label="Bento Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                title="Structured 3-Column Masonry"
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === 'masonry'
                    ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                aria-label="Masonry View"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                title="Technical Specification Table"
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === 'table'
                    ? 'bg-[var(--surface-bg)] text-[var(--text-primary)] shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                aria-label="Specification Table View"
              >
                <Table className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            VIEW 1: 2D CSS BENTO GRID (The Core Two-Dimensional Architecture)
           ========================================================================= */}
        {viewMode === 'bento' && (
          <div className="bento-grid">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-bg)] cursor-pointer transition-all duration-300 hover:border-[var(--border-contrast)] hover:shadow-[var(--shadow-elevated)] flex flex-col justify-end ${
                  activeCategory === 'all' ? project.bentoClass : 'col-span-12 md:col-span-6 lg:col-span-4 min-h-[340px]'
                }`}
              >
                {/* Media Image with Fallback Container */}
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Safe graceful fallback container if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5 transition-opacity duration-300 group-hover:via-black/45 pointer-events-none" />

                {/* Card Top Metadata Bar */}
                <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-amber-200/90 font-medium">
                    {project.categoryLabel}
                  </div>
                  <div className="font-mono text-zinc-300 tabular-nums">
                    {project.year}
                  </div>
                </div>

                {/* Card Content & Tectonic Data (Zero-Pills: Clean unboxed text) */}
                <div className="relative z-10 p-6 text-white space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-100 transition-colors">
                    {project.title}
                  </h3>

                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300">
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.area}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate max-w-[200px]">{project.materials.join(', ')}</span>
                  </div>

                  <p className="text-xs text-zinc-300 line-clamp-2 pt-1 font-light opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 flex items-center gap-1">
                      <span>Examine Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {project.exif.focalLength} · {project.exif.aperture}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* =========================================================================
            VIEW 2: STRUCTURED 3-COLUMN MASONRY GRID
           ========================================================================= */}
        {viewMode === 'masonry' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-bg)] cursor-pointer hover:border-[var(--border-contrast)] hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 font-mono text-[11px] px-2 py-1 bg-black/60 backdrop-blur-md text-white rounded">
                    {project.year}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] mb-1">
                      {project.categoryLabel}
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed mb-3">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.area}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                    <span className="font-medium text-[var(--accent-primary)] flex items-center gap-1">
                      Inspect Specs
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[var(--text-subtle)] font-mono">
                      {project.client}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* =========================================================================
            VIEW 3: TECHNICAL SPECIFICATION TABLE (Tabular Precision)
           ========================================================================= */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-bg)] shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[var(--surface-subtle)] border-b border-[var(--border-subtle)] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                <tr>
                  <th className="py-3.5 px-4 font-medium">Year</th>
                  <th className="py-3.5 px-4 font-medium">Project Monograph</th>
                  <th className="py-3.5 px-4 font-medium">Typology</th>
                  <th className="py-3.5 px-4 font-medium">Location</th>
                  <th className="py-3.5 px-4 font-medium">Floor Area</th>
                  <th className="py-3.5 px-4 font-medium">Primary Tectonic Materials</th>
                  <th className="py-3.5 px-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] font-normal text-[var(--text-secondary)]">
                {filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="hover:bg-[var(--surface-subtle)] cursor-pointer transition-colors"
                  >
                    <td className="py-4 px-4 font-mono tabular-nums text-[var(--text-primary)] font-semibold">
                      {project.year}
                    </td>
                    <td className="py-4 px-4 font-semibold text-[var(--text-primary)]">
                      {project.title}
                    </td>
                    <td className="py-4 px-4 text-[var(--text-muted)]">
                      {project.categoryLabel}
                    </td>
                    <td className="py-4 px-4">{project.location}</td>
                    <td className="py-4 px-4 font-mono tabular-nums">{project.area}</td>
                    <td className="py-4 px-4 text-[var(--text-muted)] truncate max-w-xs">
                      {project.materials.join(', ')}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="inline-flex items-center gap-1 font-medium text-[var(--accent-primary)] hover:underline"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Specs</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-[var(--border-contrast)] rounded-xl">
            <p className="text-sm text-[var(--text-muted)] mb-3">
              No architectural monographs match your current filter parameters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)] border border-[var(--accent-primary)] rounded-md hover:bg-[var(--accent-subtle)]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
