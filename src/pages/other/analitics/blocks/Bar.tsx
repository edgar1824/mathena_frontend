import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarGroup } from "@visx/shape";
import { classes } from "helper";
import { FC } from "react";
import { ChartSelect } from "./ChartSelect";

export interface IBarData {
  month: (typeof months)[number];
  online: number;
  store: number;
}

export type BarGroupProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};
// type CityName = "New York" | "San Francisco" | "Austin";
type CityName = "online" | "store";

const yellow = "var(--yellow)";
const green = "var(--green)";
const background = "transparent";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = Array.from({ length: 12 }).map((_, i) => ({
  online: Math.floor(Math.random() * 20),
  store: Math.floor(Math.random() * 20),
  month: months[i],
})) as IBarData[];

// const keys = Object.keys(data[0]).filter((d) => d !== "date") as CityName[];

const keys = Object.keys(data[0]).filter(
  (key) => key !== "month"
) as CityName[];
const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };

// scales
const dateScale = scaleBand<string>({
  domain: months,
  padding: 0.7,
});
const cityScale = scaleBand<string>({ domain: keys });
const tempScale = scaleLinear<number>({
  domain: [
    0,
    Math.max(
      20,
      ...data.map((d) => Math.max(...keys.map((key) => Number(d[key]))))
    ),
  ],
});
const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [yellow, green],
});

const Chart = ({
  width,
  height,
  events = false,
  margin = defaultMargin,
}: BarGroupProps) => {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  dateScale.rangeRound([0, xMax]);
  cityScale.rangeRound([0, dateScale.bandwidth()]);
  tempScale.range([yMax, 0]);

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={background}
        rx={14}
      />
      <AxisLeft
        top={margin.top}
        left={24} // font-size
        scale={tempScale}
        hideAxisLine
        hideTicks
        tickLabelProps={{
          fill: "#000",
          fontSize: 16,
          opacity: 0.5,
        }}
      >
        {(data) =>
          data.ticks
            .filter((t) => (t?.value as number) % 10 === 0)
            .map((tick) => {
              return (
                <g
                  key={tick.index}
                  className="tick"
                  transform={`translate(0,${tempScale(tick.value)})`}
                >
                  <line
                    x1={20}
                    x2={xMax}
                    strokeDasharray="6,6"
                    stroke="rgba(0, 0, 0, 0.20)"
                    style={{ zIndex: -1 }}
                  />
                  <text style={{ textAnchor: "middle", fontSize: 24 }}>
                    {tick.value + ""}
                  </text>
                </g>
              );
            })
        }
      </AxisLeft>
      <Group top={margin.top} left={margin.left}>
        <BarGroup
          data={data}
          keys={keys}
          height={yMax}
          x0={(d) => d.month}
          x0Scale={dateScale}
          x1Scale={cityScale}
          yScale={tempScale}
          color={colorScale}
        >
          {(barGroups) =>
            barGroups.map((barGroup) => (
              <Group
                key={`bar-group-${barGroup.index}-${barGroup.x0}`}
                left={barGroup.x0}
              >
                {barGroup.bars.map((bar) => (
                  <rect
                    key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={bar.color}
                    rx={4}
                    onClick={() => {
                      if (!events) return;
                      const { key, value } = bar;
                      alert(JSON.stringify({ key, value }));
                    }}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroup>
      </Group>
      <AxisBottom
        top={yMax + margin.top}
        scale={dateScale}
        stroke={green}
        tickStroke={green}
        hideAxisLine
        tickLabelProps={{
          fill: "#000",
          fontSize: 16,
          opacity: 0.5,
          textAnchor: "middle",
        }}
      />
    </svg>
  );
};

export const Bar: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={classes(
        "shadow-md px-[1.9rem] pt-[1.9rem] pb-[3.3rem] rounded-md",
        className
      )}
    >
      <div className="flex flex-col gap-11 pb-5">
        <div className="w-full flex items-center justify-between gap-5">
          <span className="text-[var(--green)] text-[1.75rem] font-medium">
            Nombre de livraisons
          </span>
          <ChartSelect
            defaultValue=""
            options={[{ label: "2023", value: "" }]}
            classNames={{
              select: "placeholder:text-[1.8rem] text-[1.8rem] !h-10",
              parent: "w-[110px]",
              icon: "!top-[20%]",
            }}
          />
        </div>
        <div className="flex items-center gap-11">
          <div className="flex items-center gap-3">
            <div className="w-[1.125rem] h-[1.125rem] rounded-full bg-[var(--green)]" />
            <span className="text-[1.325rem] font-medium text-black/50">
              Livraisons en ligne
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[1.125rem] h-[1.125rem] rounded-full bg-[var(--light-gray)]" />
            <span className="text-[1.325rem] font-medium text-black/50">
              Livraisons magasin
            </span>
          </div>
        </div>
      </div>
      <ParentSize
        parentSizeStyles={{
          width: "100%",
          height: "300px",
        }}
      >
        {({ width, height }) => <Chart width={width} height={height} />}
      </ParentSize>
    </div>
  );
};
