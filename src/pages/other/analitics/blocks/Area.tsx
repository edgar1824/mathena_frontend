import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { classes } from "helper";
import { FC } from "react";
import ApexChart, { Props as ApexChartProps } from "react-apexcharts";

interface Props {
  className?: string;
}

function genDates() {
  const date = new Date();
  date.setDate(date.getDate() - 5);
  const arr = [];
  while (arr.length < 6) {
    arr.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return arr;
}

const options: ApexChartProps["options"] = {
  chart: {
    id: "area-chart",
    type: "area",
    toolbar: { show: false },
  },

  yaxis: { show: false },
  dataLabels: {
    enabled: false,
  },
  tooltip: {},
  grid: {
    strokeDashArray: 6,
    borderColor: "#AFAFAF",
    show: true,
    yaxis: { lines: { show: false } },
    xaxis: { lines: { show: true } },
  },
  stroke: {
    show: true,
    colors: ["var(--green)"],
  },
  fill: {
    gradient: {
      opacityFrom: 0.9323,
      opacityTo: 0,
      type: "vertical",
      colorStops: [
        {
          offset: 1,
          color: "rgba(8, 68, 66, 0.50)",
          opacity: 1,
        },
        {
          offset: 100,
          color: "rgba(217, 217, 217, 0.00)",
          opacity: 0.2,
        },
      ],
      // gradientToColors: ["rgba(217, 217, 217, 0.00)", "rgba(8, 68, 66, 0.50)"]
    },

    // colors: ["rgba(217, 217, 217, 0.00)", "rgba(8, 68, 66, 0.50)"]
  },
  xaxis: {
    position: "top",
    axisBorder: { show: false },

    axisTicks: { show: false },
    labels: {
      show: true,
      style: { cssClass: "text-black text-[1.375rem] font-semibold" },
    },

    // categories: ["Lundi", "Mardi", "Mercr", "Jeudi", "Vendr", "Sam"],
    categories: genDates(),
  },
};

const series = [
  {
    name: "Series A",
    data: [50, 60, 40, 30, 35, 20],
  },
];
export const Area: FC<Props> = ({ className }) => {
  return (
    <div
      className={classes(
        "bg-white rounded-md shadow-md px-[2.625rem] py-[1.8rem] flex flex-col gap-[3rem]",
        className
      )}
    >
      <p className="text-[1.8rem] font-medium">Cette semaine</p>
      <div className="flex flex-col gap-[2.5rem]">
        <div className="flex flex-col">
          <div className="flex justify-between">
            {["Lundi", "Mardi", "Mercr", "Jeudi", "Vendr", "Sam"].map((str) => (
              <span className="opacity-50 text-black text-[1.375rem]" key={str}>
                {str}
              </span>
            ))}
          </div>
          <ParentSize
            parentSizeStyles={{
              height: "300px",
              padding: "0 8px",
            }}
          >
            {({ width, height }) => (
              <ApexChart
                options={options}
                series={series}
                type="area"
                height={height}
                width={width}
              />
            )}
          </ParentSize>
        </div>
        <div className="flex flex-col self-end w-1/2 self-end">
          <p className="text-[1.33rem] font-medium flex items-center justify-between gap-1">
            <span className="opacity-50">Le plus elevé</span>
            <span>30€</span>
          </p>
          <p className="text-[1.33rem] font-medium flex items-center justify-between gap-1">
            <span className="opacity-50">Aujourd’hui</span>
            <span>10€</span>
          </p>
        </div>
      </div>
    </div>
  );
};
