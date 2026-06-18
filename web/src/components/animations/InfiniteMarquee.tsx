const rowOne = [
  { label: "Private Dinner", title: "私享晚宴", meta: "28 guests" },
  { label: "Tea Salon", title: "暗光茶会", meta: "Hangzhou" },
  { label: "Source Visit", title: "源头探访", meta: "Supply" },
  { label: "Reading Night", title: "阅读夜谈", meta: "Members" },
  { label: "Quiet Tasting", title: "低声品鉴", meta: "Seasonal" },
  { label: "City Walk", title: "隐线漫游", meta: "Offline" },
];

const rowTwo = [
  { label: "Circle", title: "长期关系", meta: "Trust" },
  { label: "Selection", title: "万里挑一", meta: "Curation" },
  { label: "Boundary", title: "秩序边界", meta: "Membership" },
  { label: "Sanctuary", title: "隐匿之所", meta: "Space" },
  { label: "Dialogue", title: "同频对谈", meta: "Forum" },
  { label: "Ritual", title: "生活仪式", meta: "Lifestyle" },
];

const rows = [
  { items: rowOne, direction: "left", duration: "38s" },
  { items: rowTwo, direction: "right", duration: "44s" },
] as const;

export function InfiniteMarquee() {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="space-y-3 md:space-y-6">
        {rows.map((row) => (
          <div key={row.direction} className="flex overflow-hidden">
            <div
              className="marquee-track flex w-max shrink-0 transform-gpu gap-3 will-change-transform md:gap-6"
              data-direction={row.direction}
              style={{ animationDuration: row.duration }}
            >
              {[...row.items, ...row.items].map((item, index) => (
                <article
                  key={`${row.direction}-${item.label}-${index}`}
                  className="liquid-glass-strong relative h-20 w-36 shrink-0 overflow-hidden rounded-[1rem] p-3 md:h-44 md:w-72 md:rounded-[1.5rem] md:p-5"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.14),transparent_32%),linear-gradient(135deg,rgba(212,175,55,0.12),transparent_45%)]" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <p className="font-display text-[8px] uppercase tracking-[0.22em] text-[hsl(var(--accent))]/80 md:text-[0.65rem] md:tracking-[0.34em]">
                      {item.label}
                    </p>
                    <div>
                      <h3 className="font-serif text-sm leading-tight text-white/84 md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-display text-[8px] uppercase tracking-[0.18em] text-white/32 md:mt-3 md:text-[0.65rem] md:tracking-[0.28em]">
                        {item.meta}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
