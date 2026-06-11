"use client";

import { Bar } from "@/components/charts/bar";
import { BarChart } from "@/components/charts/bar-chart";
import { BarXAxis } from "@/components/charts/bar-x-axis";
import { FunnelChart } from "@/components/charts/funnel-chart";
import { Grid } from "@/components/charts/grid";
import { Line } from "@/components/charts/line";
import { LineChart } from "@/components/charts/line-chart";
import { ChartTooltip } from "@/components/charts/tooltip";
import { XAxis } from "@/components/charts/x-axis";

const metrics = [
  {
    label: "Form Completion",
    value: "68.4%",
    subtitle: "18,468 completed proposals",
    delta: "+4.2pp vs prior period",
    tone: "positive",
    definition: "Completed forms divided by all started proposals.",
  },
  {
    label: "Quote Coverage",
    value: "74.8%",
    subtitle: "At least one quoted price",
    delta: "-1.1pp panel appetite",
    tone: "negative",
    definition: "Completed proposals with at least one quoted price.",
  },
  {
    label: "Bind Rate",
    value: "29.7%",
    subtitle: "Quoted proposals purchased",
    delta: "+2.8pp price competitiveness",
    tone: "positive",
    definition: "Purchases divided by proposals that received a quote.",
  },
  {
    label: "Collection Rate",
    value: "91.6%",
    subtitle: "Successful monthly payments",
    delta: "-0.6pp early tenure drag",
    tone: "negative",
    definition: "Successful payments divided by payment attempts.",
  },
  {
    label: "Realised Premium",
    value: "£1.42m",
    subtitle: "£348 ARPP",
    delta: "+9.5% collected premium",
    tone: "positive",
    definition: "Premium actually collected from successful payments.",
  },
];

const funnelData = [
  { label: "Landed", value: 27000, displayValue: "27.0k", color: "var(--brand-blue)" },
  { label: "Completed", value: 18468, displayValue: "18.5k", color: "var(--brand-blue)" },
  { label: "Quoted", value: 13812, displayValue: "13.8k", color: "var(--brand-blue)" },
  { label: "Purchased", value: 4102, displayValue: "4.1k", color: "var(--brand-blue)" },
];

const dropoutData = [
  { label: "Page 1", value: 4275, pct: 50, color: "var(--brand-blue)" },
  { label: "Page 2", value: 2850, pct: 33, color: "var(--brand-blue)" },
  { label: "Page 3", value: 1407, pct: 17, color: "var(--brand-blue)" },
];

const declineReasons = [
  { reason: "High-risk postcode", count: 2180 },
  { reason: "User underage", count: 1420 },
  { reason: "Vehicle value", count: 1165 },
  { reason: "Modified vehicle", count: 850 },
  { reason: "Claims history", count: 625 },
];

const conversionTrend = [
  { date: new Date("2026-01-05"), conversion: 12.6 },
  { date: new Date("2026-01-12"), conversion: 13.1 },
  { date: new Date("2026-01-19"), conversion: 13.8 },
  { date: new Date("2026-01-26"), conversion: 14.2 },
  { date: new Date("2026-02-02"), conversion: 14.0 },
  { date: new Date("2026-02-09"), conversion: 15.3 },
  { date: new Date("2026-02-16"), conversion: 15.9 },
  { date: new Date("2026-02-23"), conversion: 15.1 },
  { date: new Date("2026-03-02"), conversion: 16.4 },
  { date: new Date("2026-03-09"), conversion: 16.9 },
  { date: new Date("2026-03-16"), conversion: 16.1 },
  { date: new Date("2026-03-23"), conversion: 15.4 },
];

const collectionByTenure = [
  { tenure: "1st", success: 86.2, failed: 13.8 },
  { tenure: "2nd", success: 91.4, failed: 8.6 },
  { tenure: "3rd", success: 93.1, failed: 6.9 },
  { tenure: "4th", success: 94.0, failed: 6.0 },
  { tenure: "5th+", success: 95.2, failed: 4.8 },
];

const segmentRows = [
  { segment: "QuickQuote / 18-24", completion: "61.2%", bind: "22.8%", arpp: "£284", color: "var(--warning)" },
  { segment: "QuickQuote / 25-34", completion: "70.5%", bind: "31.4%", arpp: "£331", color: "var(--success)" },
  { segment: "Coverly / 35-49", completion: "73.9%", bind: "34.6%", arpp: "£392", color: "var(--success)" },
  { segment: "Coverly / 50+", completion: "76.1%", bind: "28.1%", arpp: "£365", color: "var(--blue)" },
  { segment: "DriveSure / 18-24", completion: "57.8%", bind: "19.5%", arpp: "£301", color: "var(--danger)" },
];

function Section({
  title,
  meta,
  children,
  delay = "0ms",
}: {
  title: string;
  meta?: string;
  children: React.ReactNode;
  delay?: string;
}) {
  return (
    <section className="section" style={{ animationDelay: delay }}>
      <div className="section-heading">
        <h2>{title}</h2>
        {meta ? <p>{meta}</p> : null}
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Panel({
  title,
  meta,
  info,
  children,
}: {
  title: string;
  meta?: string;
  info?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="panel">
      <div className="panel-header">
        <div className="panel-title-row">
          <h3>{title}</h3>
        </div>
        <div className="panel-meta">
          {meta ? <p>{meta}</p> : null}
          {info ? <InfoTooltip text={info} /> : null}
        </div>
      </div>
      <div className="panel-body">{children}</div>
    </article>
  );
}

function InfoTooltip({ text }: { text: string }) {
  return (
    <span className="info-wrap">
      <button className="info-button" type="button" aria-label={text}>
        i
      </button>
      <span className="info-tooltip" role="tooltip">
        {text}
      </span>
    </span>
  );
}

function MetricCard({ metric }: { metric: (typeof metrics)[number] }) {
  return (
    <article className="metric-card card">
      <InfoTooltip text={metric.definition} />
      <p className="metric-label">{metric.label}</p>
      <p className="metric-value">{metric.value}</p>
      <p className="metric-subtitle">{metric.subtitle}</p>
      <p className={`delta ${metric.tone}`}>{metric.delta}</p>
    </article>
  );
}

function ProgressRows({
  rows,
  valueSuffix = "",
}: {
  rows: { label: string; value: number; pct: number; color: string }[];
  valueSuffix?: string;
}) {
  return (
    <div className="dropout-list">
      {rows.map((row) => (
        <div className="bar-row" key={row.label}>
          <div className="bar-row-top">
            <strong>{row.label}</strong>
            <span>
              {row.value.toLocaleString("en-GB")}
              {valueSuffix} · {row.pct}%
            </span>
          </div>
          <div className="bar-track">
            <div
              className="bar-fill"
              style={
                {
                  "--fill-color": row.color,
                  width: `${row.pct}%`,
                } as React.CSSProperties
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-mark">
          <span className="brand-dot" aria-hidden />
          Insurance Analytics
        </div>
        <div className="topbar-meta">Demo dataset · Updated 15:42</div>
      </header>

      <main className="dashboard">
        <div className="page-header">
          <div>
            <h1>Car insurance funnel</h1>
            <p>
              A one-page scorecard for product, pricing, and finance teams to see
              where proposal journeys leak, where insurer appetite blocks quotes,
              and how much premium is actually collected.
            </p>
          </div>
          <details className="filter-menu">
            <summary className="filter-trigger">Filters</summary>
            <div className="filter-popover" aria-label="Dashboard filters">
              <div className="filter-item">
                <span>Date</span>
                <strong>Q1 2026</strong>
              </div>
              <div className="filter-item">
                <span>Brand</span>
                <strong>All brands</strong>
              </div>
              <div className="filter-item">
                <span>Insurer</span>
                <strong>Panel view</strong>
              </div>
              <div className="filter-item">
                <span>Age</span>
                <strong>All bands</strong>
              </div>
            </div>
          </details>
        </div>

        <Section title="Headline KPIs" meta="Rates use honest fact grains">
          <div className="kpi-grid">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </Section>

        <Section
          title="Funnel diagnosis"
          meta="Landed → completed → quoted → purchased"
          delay="80ms"
        >
          <div className="dashboard-grid">
            <Panel
              title="Proposal journey"
              info="Shows where started proposals fall out before purchase."
            >
              <div className="funnel-chart-wrap">
                <FunnelChart
                  data={funnelData}
                  edges="straight"
                  gap={8}
                  grid={{
                    bands: true,
                    bandColor: "var(--muted)",
                    lines: true,
                    lineColor: "var(--chart-grid)",
                    lineOpacity: 0.7,
                  }}
                  enterTransition={{ duration: 0 }}
                  labelAlign="center"
                  labelLayout="grouped"
                  layers={3}
                  orientation="horizontal"
                  showLabels={false}
                  showPercentage
                  showValues
                  style={{ minHeight: 310 }}
                  staggerDelay={0}
                />
                <div className="funnel-stage-labels" aria-hidden>
                  {funnelData.map((stage) => (
                    <span key={stage.label}>{stage.label}</span>
                  ))}
                </div>
              </div>
            </Panel>

            <Panel
              title="Drop-out by page"
              meta="Proposal grain"
              info="Shows which form page loses the most journeys."
            >
              <ProgressRows rows={dropoutData} />
              <div className="dropout-insight">
                <strong>Primary leak: first disclosure page</strong>
                <p>
                  Half of all abandoned journeys happen before page 2. Tightening
                  the first-page questions would recover the most quoteable demand.
                </p>
              </div>
            </Panel>
          </div>
        </Section>

        <Section title="Pricing and conversion" meta="Insurer panel plus cohort trend" delay="160ms">
          <div className="two-column-grid">
            <Panel
              title="Decline reason ranking"
              meta="Reason grain"
              info="Shows why completed proposals fail to get a price."
            >
              <BarChart
                animationDuration={0}
                aspectRatio="2.15 / 1"
                barGap={0.24}
                data={declineReasons}
                margin={{ top: 18, right: 16, bottom: 34, left: 12 }}
                xDataKey="reason"
              >
                <Grid horizontal />
                <Bar animate={false} dataKey="count" fill="var(--brand-blue)" lineCap={5} />
                <BarXAxis maxLabels={5} />
                <ChartTooltip
                  rows={(point) => [
                    {
                      color: "var(--brand-blue)",
                      label: "Declines",
                      value: Number(point.count ?? 0).toLocaleString("en-GB"),
                    },
                  ]}
                />
              </BarChart>
            </Panel>

            <Panel
              title="End-to-end conversion trend"
              meta="Latest weeks still maturing"
              info="Tracks purchase conversion by proposal cohort week."
            >
              <LineChart
                animationDuration={0}
                aspectRatio="2.15 / 1"
                data={conversionTrend}
                margin={{ top: 18, right: 20, bottom: 34, left: 12 }}
                xDataKey="date"
              >
                <Grid horizontal />
                <Line
                  dataKey="conversion"
                  animate={false}
                  dashFromIndex={9}
                  showMarkers
                  stroke="var(--brand-blue)"
                  strokeWidth={3}
                />
                <XAxis numTicks={5} tickMode="data" />
                <ChartTooltip
                  rows={(point) => [
                    {
                      color: "var(--brand-blue)",
                      label: "Conversion",
                      value: `${Number(point.conversion ?? 0).toFixed(1)}%`,
                    },
                  ]}
                />
              </LineChart>
            </Panel>
          </div>
        </Section>

        <Section title="Collections and segments" meta="Payment grain kept separate" delay="240ms">
          <div className="two-column-grid">
            <Panel
              title="Collection rate by payment tenure"
              meta="Success vs failure"
              info="Shows whether payment failures happen early or later."
            >
              <BarChart
                animationDuration={0}
                aspectRatio="2.15 / 1"
                barGap={0.18}
                data={collectionByTenure}
                margin={{ top: 18, right: 16, bottom: 34, left: 12 }}
                stackGap={2}
                stacked
                xDataKey="tenure"
              >
                <Grid horizontal />
                <Bar animate={false} dataKey="success" fill="var(--brand-blue)" lineCap={4} />
                <Bar animate={false} dataKey="failed" fill="var(--brand-blue-4)" lineCap={4} />
                <BarXAxis showAllLabels />
                <ChartTooltip
                  rows={(point) => [
                    {
                      color: "var(--brand-blue)",
                      label: "Success",
                      value: `${Number(point.success ?? 0).toFixed(1)}%`,
                    },
                    {
                      color: "var(--brand-blue-4)",
                      label: "Failure",
                      value: `${Number(point.failed ?? 0).toFixed(1)}%`,
                    },
                  ]}
                />
              </BarChart>
            </Panel>

            <Panel
              title="Segment cut"
              meta="Brand and age bands"
              info="Compares conversion and value across key customer groups."
            >
              <table className="segment-table">
                <thead>
                  <tr>
                    <th>Segment</th>
                    <th>Completion</th>
                    <th>Bind</th>
                    <th>ARPP</th>
                  </tr>
                </thead>
                <tbody>
                  {segmentRows.map((row) => (
                    <tr key={row.segment}>
                      <td>{row.segment}</td>
                      <td>
                        <span
                          className="heat"
                          style={{ "--heat-color": row.color } as React.CSSProperties}
                        >
                          {row.completion}
                        </span>
                      </td>
                      <td>{row.bind}</td>
                      <td>{row.arpp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Panel>
          </div>
        </Section>
      </main>
    </div>
  );
}
