import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const InquirySection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    typology: 'residential',
    location: '',
    budget: '$2M - $5M',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-20 border-b border-[var(--border-subtle)] bg-[var(--canvas-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="inquiry-grid">
          {/* Left Column: Studio Atelier Information */}
          <div className="space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-primary)] mb-2 font-mono">
                Initiate Commission
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                Discuss a Site, Monument or Spatial Project
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We accept a limited cohort of 4 to 6 commissions per calendar year to ensure uninterrupted design principal oversight and physical site engagement.
              </p>
            </div>

            {/* Atelier Locations & Timezones */}
            <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">
                    Basel Main Atelier
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-mono">
                    St. Alban-Vorstadt 24, 4052 Basel, Switzerland · CET (UTC+1)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">
                    Kyoto Research Atelier
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-mono">
                    Saga-Ogurayama, Ukyo Ward, Kyoto 616-8394, Japan · JST (UTC+9)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[var(--text-muted)] shrink-0 mt-0.5" />
                <div className="text-xs text-[var(--text-secondary)]">
                  Preliminary architectural feasibility responses within 48 hours.
                </div>
              </div>
            </div>

            {/* Direct Inquiries */}
            <div className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-bg)] space-y-2 text-xs">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                Direct Principal Correspondence
              </div>
              <div className="font-mono text-[var(--text-primary)]">
                commissions@elenavance-studio.ch
              </div>
              <div className="font-mono text-[var(--text-muted)]">
                +41 61 278 9010 (Central Atelier Line)
              </div>
            </div>
          </div>

          {/* Right Column: Commission Inquiry Form */}
          <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-bg)] shadow-[var(--shadow-subtle)]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  Inquiry Dispatched to Atelier
                </h3>
                <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}. Elena Vance and the project partners will review your site briefing and preliminary parameters within 48 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      typology: 'residential',
                      location: '',
                      budget: '$2M - $5M',
                      description: '',
                    });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)] border border-[var(--border-subtle)] rounded-md hover:bg-[var(--surface-subtle)]"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
                  Project Commission Parameters
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
                      Patron / Client Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin Foundation"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-[var(--canvas-bg)] border border-[var(--border-subtle)] rounded-md text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="patron@foundation.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-[var(--canvas-bg)] border border-[var(--border-subtle)] rounded-md text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
                      Typology
                    </label>
                    <select
                      value={formData.typology}
                      onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-[var(--canvas-bg)] border border-[var(--border-subtle)] rounded-md text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                    >
                      <option value="residential">Residential & Private Monograph</option>
                      <option value="civic">Civic, Museum & Cultural</option>
                      <option value="facades">Kinetic Facade & Envelopes</option>
                      <option value="experimental">Experimental Research Pavilion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
                      Site Location / Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Zurich, Switzerland"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-[var(--canvas-bg)] border border-[var(--border-subtle)] rounded-md text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
                    Estimated Construction Budget Tier
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--canvas-bg)] border border-[var(--border-subtle)] rounded-md text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                  >
                    <option value="$1M - $2M">$1M – $2M (Small Scale / Pavilion)</option>
                    <option value="$2M - $5M">$2M – $5M (Custom Residential Monograph)</option>
                    <option value="$5M - $15M">$5M – $15M (Institutional Cultural Wing)</option>
                    <option value="$15M+">$15M+ (Major Monument / Museum Complex)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
                    Project Narrative & Site Context
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe topography, orientation, programmatic aspirations, or zoning constraints..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-[var(--canvas-bg)] border border-[var(--border-subtle)] rounded-md text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[var(--accent-contrast)] bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Commission Brief</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
