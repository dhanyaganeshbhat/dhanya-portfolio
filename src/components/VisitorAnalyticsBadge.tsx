"use client";

import { useEffect, useState } from "react";
import {
  trackVisitorSession,
  formatVisitorCount,
} from "@/scripts/visitorAnalytics";
import {
  Eye,
  Activity,
  Users,
  Compass,
  Laptop,
  CheckCircle2,
  X,
  Sparkles,
  BarChart3,
} from "lucide-react";

interface VisitorMetrics {
  visitorId: string;
  isNewVisitor: boolean;
  totalVisitors: number;
  pageViews: number;
  visitCount: number;
  deviceType: string;
  firstVisitDate: string;
  sessionStarted: number;
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
        setMetrics(data);
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
        <span>Syncing visitor telemetry...</span>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left">
      {/* ── INTERACTIVE VISITOR COUNTER PILL ───────────────────────────── */}
      <button
        onClick={() => setExpanded(!expanded)}
        data-hover
        className="visitor-badge-trigger group"
        aria-label="View live visitor analytics"
      >
        {/* Pulsing Radar Dot */}
        <span className="visitor-radar-wrapper">
          <span className="visitor-radar-ping" />
          <span className="visitor-radar-solid" />
        </span>

        {/* Counter & Label */}
        <div className="flex items-center gap-2">
          <span className="visitor-label-tag">Live Visitors:</span>
          <span className="visitor-counter-digits">
            {formatVisitorCount(metrics.totalVisitors)}
          </span>
        </div>

        {/* New Visitor Badge Indicator */}
        {metrics.isNewVisitor ? (
          <span className="visitor-new-pill">● New Visitor</span>
        ) : (
          <span className="visitor-new-pill text-[#D6C29A]">
            Visit #{metrics.visitCount}
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
                Visitor Telemetry
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
                <span className="text-[10px] font-mono text-[#D6C29A]">GLOBAL</span>
              </div>
              <p className="visitor-stat-num">
                {formatVisitorCount(metrics.totalVisitors)}
              </p>
              <p className="visitor-stat-title">Total Visitors</p>
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

          {/* Detailed Session Breakdown */}
          <div className="space-y-1.5 pt-2 border-t border-[#242424]">
            <div className="visitor-info-row">
              <span>Visitor Status</span>
              <span className="flex items-center gap-1 text-[#F1E4C8]">
                <CheckCircle2 size={12} className="text-[#D6C29A]" />
                {metrics.isNewVisitor ? "New Unique Visitor" : "Returning Visitor"}
              </span>
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
              <span>Anonymous ID</span>
              <span className="font-mono text-[10px] truncate max-w-[150px]">
                {metrics.visitorId}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#242424] text-[10px] font-mono text-neutral-500 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6C29A]" />
              Privacy-first · No cookies used
            </span>
            <span className="text-[#D6C29A]/80">BIT Bengaluru</span>
          </div>
        </div>
      )}
    </div>
  );
}
