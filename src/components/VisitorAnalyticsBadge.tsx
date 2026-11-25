"use client";

import { useEffect, useState } from "react";
import {
  trackVisitorSession,
  formatVisitorCount,
} from "@/scripts/visitorAnalytics";
import {
  Eye,
  Users,
  Laptop,
  CheckCircle2,
  X,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Fingerprint,
} from "lucide-react";

interface VisitorMetrics {
  visitorId: string;
  isNewVisitor: boolean;
  uniqueVisitors: number;
  totalVisitors: number;
  pageViews: number;
  visitCount: number;
  deviceType: string;
  firstVisitDate: string;
  sessionStarted: number;
  deDuplicationActive: boolean;
}

export default function VisitorAnalyticsBadge() {
  const [metrics, setMetrics] = useState<VisitorMetrics | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let isCancelled = false;

    trackVisitorSession().then((data) => {
      if (!isCancelled) {
        setMetrics(data as VisitorMetrics);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  if (!mounted || !metrics) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D6C29A]/20 bg-[#121212] text-neutral-500 font-mono text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D6C29A]/50 animate-pulse" />
        <span>Syncing unique visitor telemetry...</span>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left">
      {/* ── INTERACTIVE UNIQUE VISITOR COUNTER PILL ───────────────────── */}
      <button
        onClick={() => setExpanded(!expanded)}
        data-hover
        className="visitor-badge-trigger group"
        aria-label="View unique visitor analytics"
      >
        {/* Pulsing Radar Dot */}
        <span className="visitor-radar-wrapper">
          <span className="visitor-radar-ping" />
          <span className="visitor-radar-solid" />
        </span>

        {/* Counter & Label: Strictly Unique Visitors */}
        <div className="flex items-center gap-2">
          <span className="visitor-label-tag">Unique Visitors:</span>
          <span className="visitor-counter-digits">
            {formatVisitorCount(metrics.uniqueVisitors)}
          </span>
        </div>

        {/* New Visitor / Returning Badge */}
        {metrics.isNewVisitor ? (
          <span className="visitor-new-pill">● New Unique Visitor</span>
        ) : (
          <span className="visitor-new-pill text-[#D6C29A]">
            Returning (Visit #{metrics.visitCount})
          </span>
        )}

        <BarChart3
          size={13}
          className="text-[#D6C29A]/70 group-hover:text-[#D6C29A] transition-colors ml-0.5"
        />
      </button>

      {/* ── EXPANDED ANALYTICS MODAL / POPOVER ─────────────────────────── */}
      {expanded && (
        <div className="absolute bottom-full left-0 mb-3 z-50 w-80 sm:w-96 visitor-analytics-card">
          <div className="visitor-card-header">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#D6C29A]" />
              <h5 className="font-serif text-lg text-white font-medium">
                Unique Visitor Telemetry
              </h5>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 rounded-full text-neutral-400 hover:text-white transition-colors"
              aria-label="Close analytics popover"
            >
              <X size={15} />
            </button>
          </div>

          {/* Quick Metrics Grid */}
          <div className="visitor-metrics-grid">
            <div className="visitor-stat-tile">
              <div className="flex items-center justify-between text-neutral-400 mb-1">
                <Users size={14} className="text-[#D6C29A]" />
                <span className="text-[10px] font-mono text-[#D6C29A]">UNIQUE</span>
              </div>
              <p className="visitor-stat-num">
                {formatVisitorCount(metrics.uniqueVisitors)}
              </p>
              <p className="visitor-stat-title">Unique Visitors</p>
            </div>

            <div className="visitor-stat-tile">
              <div className="flex items-center justify-between text-neutral-400 mb-1">
                <Eye size={14} className="text-[#D6C29A]" />
                <span className="text-[10px] font-mono text-[#D6C29A]">HITS</span>
              </div>
              <p className="visitor-stat-num">{metrics.pageViews}</p>
              <p className="visitor-stat-title">Your Page Views</p>
            </div>
          </div>

          {/* Strict De-Duplication Verification Banner */}
          <div className="mb-3 p-2.5 rounded-xl border border-[#D6C29A]/25 bg-[#141414] flex items-center gap-2 text-[11px] text-[#F1E4C8]">
            <ShieldCheck size={16} className="text-[#D6C29A] shrink-0" />
            <span className="leading-snug">
              <strong>Strict De-Duplication:</strong> Only 1 count per unique device/visitor. Refreshes & repeat sessions are not counted again.
            </span>
          </div>

          {/* Detailed Session Breakdown */}
          <div className="space-y-1.5 pt-1 border-t border-[#242424]">
            <div className="visitor-info-row">
              <span>Visitor Status</span>
              <span className="flex items-center gap-1 text-[#F1E4C8]">
                <CheckCircle2 size={12} className="text-[#D6C29A]" />
                {metrics.isNewVisitor ? "First-time Unique Visitor" : "Returning Visitor"}
              </span>
            </div>

            <div className="visitor-info-row">
              <span>Personal Visits</span>
              <span className="font-mono text-[#F1E4C8]">{metrics.visitCount} visits recorded</span>
            </div>

            <div className="visitor-info-row">
              <span>Device Category</span>
              <span className="flex items-center gap-1 text-[#F1E4C8]">
                <Laptop size={12} className="text-[#D6C29A]" />
                {metrics.deviceType}
              </span>
            </div>

            <div className="visitor-info-row">
              <span>First Discovered</span>
              <span>{metrics.firstVisitDate}</span>
            </div>

            <div className="visitor-info-row">
              <span className="flex items-center gap-1">
                <Fingerprint size={12} className="text-[#D6C29A]" />
                Unique ID
              </span>
              <span className="font-mono text-[10px] truncate max-w-[150px]">
                {metrics.visitorId}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#242424] text-[10px] font-mono text-neutral-500 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6C29A]" />
              Privacy-first · Unique De-dup Active
            </span>
            <span className="text-[#D6C29A]/80">BIT Bengaluru</span>
          </div>
        </div>
      )}
    </div>
  );
}
