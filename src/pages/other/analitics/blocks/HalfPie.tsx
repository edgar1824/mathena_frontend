import { Group } from "@visx/group";
import { scaleOrdinal } from "@visx/scale";
import { Pie } from "@visx/shape";
import { Text } from "@visx/text";
import { classes } from "helper";
import { FC } from "react";
import { ChartSelect } from "./ChartSelect";

interface DataItem {
  label: string;
  value: number;
  color: string;
}

const data: DataItem[] = [
  { label: "Category 1", value: 50, color: "var(--green)" },
  { label: "Category 2", value: 50, color: "#E9ECF1" },
];

export const HalfPie: FC<{ className?: string }> = ({ className }) => (
  <div
    className={classes(
      "px-10 py-7 bg-white shadow-md rounded-md overflow-hidden",
      className
    )}
  >
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center gap-10">
        <span className="text-[1.8rem] font-medium">Retours</span>
        <ChartSelect
            defaultValue=""
            options={[{ label: "Nov 2023", value: "" }]}
            classNames={{
              select: "placeholder:text-xl text-xl h-6",
              parent: "w-[135px]",
            }}
          />
      </div>
      <div className="flex items-center justify-between flex-[1] gap-3">
        <div className="flex flex-[1] items-center justify-center">
          <Chart />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[var(--green)] rounded-[20px] w-[35px] h-2.5" />
          <span>Retours</span>
        </div>
      </div>
    </div>
  </div>
);

const colorScale = scaleOrdinal<string, string>({
  domain: data.map((d) => d.label),
});
const width = 270;
const height = 120;
const radius = Math.min(width, height) / 2;
const Chart = () => {
  return (
    <svg height={height} width={width}>
      <Group top={height} left={width / 2}>
        <Pie<DataItem>
          data={data}
          pieValue={(d) => d.value}
          fill={(d) => colorScale(d.data.label)}
          startAngle={-Math.PI / 2}
          endAngle={Math.PI / 2}
          outerRadius={height}
          innerRadius={height * 0.85}
          cornerRadius={10}
        >
          {(pie) =>
            pie.arcs.map((arc) => {
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const angle = Math.atan2(centroidY, centroidX);
              const x = Math.cos(angle) * (radius + width / 2.75);
              const y = Math.sin(angle) * (radius + height / 2);
              return (
                <g
                  key={arc.index}
                  style={{ zIndex: pie?.arcs?.length - arc?.index }}
                >
                  <path
                    fill={arc.data.color}
                    style={{ zIndex: pie?.arcs?.length - arc?.index }}
                    d={
                      pie.path({
                        ...arc,
                        endAngle:
                          arc.endAngle +
                          (arc.data.label === "Category 1" ? 0.2 : 0),
                      })!
                    }
                  />
                  <Text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    fill="var(--green)"
                    fontSize={21.3}
                    dy=".33em"
                  >
                    {`${arc.data.value}%`}
                  </Text>
                </g>
              );
            })
          }
        </Pie>
      </Group>
    </svg>
  );
};
