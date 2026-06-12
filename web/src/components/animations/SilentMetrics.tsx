"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const metrics = [
  {
    target: 1,
    suffix: "/10000",
    label: "全球供应链极致甄选率",
    ariaLabel: "1/10000 全球供应链极致甄选率",
  },
  {
    target: 12,
    label: "私域独家直采基地",
    ariaLabel: "12 私域独家直采基地",
  },
  {
    target: 300,
    label: "同频会员席位绝对上限",
    ariaLabel: "300 同频会员席位绝对上限",
  },
];

function useCountUp(target: number, shouldStart: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [shouldStart, target]);

  return value;
}

export function SilentMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section className="bg-[#0a0a0a] px-6">
      <div
        ref={ref}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-12 pb-32 pt-12 md:grid-cols-3"
        aria-label="天机优选核心数据"
      >
        {metrics.map((metric) => (
          <MetricCounter key={metric.label} metric={metric} isInView={isInView} />
        ))}
      </div>
    </section>
  );
}

function MetricCounter({
  metric,
  isInView,
}: {
  metric: (typeof metrics)[number];
  isInView: boolean;
}) {
  const value = useCountUp(metric.target, isInView);
  const displayValue = `${value}${metric.suffix ?? ""}`;

  return (
    <div className="text-center" aria-label={metric.ariaLabel}>
      <p className="font-display text-6xl leading-none text-white/90 md:text-8xl">
        {displayValue}
      </p>
      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">
        {metric.label}
      </p>
    </div>
  );
}
