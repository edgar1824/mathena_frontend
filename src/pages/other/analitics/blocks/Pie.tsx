import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { classes } from "helper";
import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartSelect } from "./ChartSelect";

export const Pie: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={classes(
        "px-10 py-7 bg-white shadow-md rounded-md overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col gap-7">
        <div className="flex justify-between items-center gap-10">
          <span className="text-[1.8rem] font-medium">Coût livraisons</span>
          <ChartSelect
            defaultValue=""
            options={[{ label: "Nov 2023", value: "" }]}
            classNames={{
              select: "placeholder:text-xl text-xl h-6",
              parent: "w-[135px]",
            }}
          />
        </div>

        <ParentSize
          className="pie_chart"
          parentSizeStyles={{
            width: "100%",
            height: "175px",
          }}
        >
          {({ width, height }) => (
            <ReactApexChart
              options={{
                colors: ["var(--green)", "var(--light-green)"],
                chart: {
                  type: "donut",
                  height: 200,
                },

                legend: {
                  itemMargin: { vertical: 20 },
                  fontSize: "16px",
                  markers: {
                    width: 35,
                    height: 10,
                    offsetX: -10,
                  },
                  inverseOrder: true,
                },
                plotOptions: {
                  pie: {
                    startAngle: 40,
                    dataLabels: { offset: 20 },
                    donut: { size: "50%" },
                  },
                },
                labels: ["En magasin", "En ligne"],
                dataLabels: {
                  offsetX: 10,
                  enabled: true,
                  textAnchor: "middle",
                  formatter: (val) => `${val}€`,
                  dropShadow: {
                    enabled: true,
                    color: "black",
                    top: 0,
                    left: 1,
                    blur: 54,
                  },
                  background: {
                    enabled: true,
                    padding: 20,
                    foreColor: "black",
                    opacity: 1,
                    borderRadius: 100,
                    dropShadow: {
                      enabled: true,
                      color: "black",
                      top: 0,
                      left: 1,
                      blur: 3,
                      opacity: 0.1,
                    },
                  },

                  style: {
                    colors: ["white"],
                    fontSize: "20px",
                  },
                },

                responsive: [
                  {
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200,
                      },
                      legend: {
                        position: "bottom",
                      },
                    },
                  },
                ],
              }}
              series={[57, 43]}
              type="donut"
              width={width}
              height={height}
            />
          )}
        </ParentSize>
      </div>
    </div>
  );
};
