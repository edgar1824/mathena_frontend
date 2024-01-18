import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { FC } from "react";

const width = 160;
const half = width / 2;
const strokeThickness = 30;
const coins = [
  {
    label: "Dépensé",
    amount: 65,
    color: "var(--green)",
    inner: half,
    outer: half - strokeThickness,
  },
  {
    label: "Reste",
    amount: 35,
    color: "var(--light-gray)",
    inner: half - strokeThickness * 0.25,
    outer: half - strokeThickness * 0.75,
  },
];

export const Chart: FC = () => {
  return (
    <div className="shadow-md rounded-md flex-[1] flex justify-evenly gap-4 px-[1.5rem] py-[3.5rem]">
      <svg className="shrink-0" width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={coins}
            pieValue={(data) => data.amount}
            outerRadius={({ data }) => data.outer}
            innerRadius={({ data }) => data.inner}
            padAngle={0.01}
            cornerRadius={({ data }) =>
              data.inner === Math.max(...coins.map((c) => c.inner)) ? 10 : 0
            }
          >
            {(pie) => {
              return (
                <>
                  {pie.arcs.map((arc, i) => {
                    return (
                      <g key={arc.data.amount * i}>
                        <path d={pie.path(arc)!} fill={arc.data.color}></path>
                      </g>
                    );
                  })}
                  <circle r={width * 0.12} fill="rgba(8, 68, 66, 0.10)" />
                </>
              );
            }}
          </Pie>
        </Group>
      </svg>
      <div className="flex flex-col gap-2 py-3 justify-around whitespace-nowrap">
        <span className="text-[1.75rem] font-medium">
          Pack {`${coins.reduce((acc, item) => acc + item.amount, 0)} €`}
        </span>
        <div className="flex flex-col gap-3">
          {coins.map((c, i) => (
            <div className="flex gap-2.5" key={c.amount * i}>
              <div
                style={{ backgroundColor: c?.color }}
                className="w-2.5 h-2.5 rounded-full mt-1.5"
              />
              <span>
                {c?.label} {`${c?.amount}€`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
