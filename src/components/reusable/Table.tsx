import sort_arrows_icon from "assets/trash/sort-arrows.svg";
import { classes } from "helper";
import { ReactNode } from "react";

interface Props<T> {
  title?: string;
  data?: T[];
  cols: {
    col?: number;
    title: string | ReactNode;
    render: ((data: T) => ReactNode) | ReactNode;
    className?: string;
    thClassName?: string;
    tdClassName?: string;
    filterArrows?: boolean;
  }[];
  className?: string;
  filterNode?: ReactNode;
  trClassName?: string;
}

export const Table = <T,>({
  className = "",
  trClassName = "",
  data,
  cols,
  title,
  filterNode,
}: Props<T>) => {
  return (
    <div className="flex flex-col gap-6 ">
      {title && (
        <p className="text-[var(--green)] text-[2.3rem] font-semibold">
          {title}
        </p>
      )}
      <div
        className={classes("rounded-md overflow-hidden shadow-md", className)}
      >
        <div className="overflow-auto custom-scrollbar">
          <div className="bg-[var(--green)] px-5 py-3.5 min-h-[3.75rem] min-w-[900px]">
            {filterNode}
          </div>
        </div>
        <div className="flex flex-col custom-scrollbar overflow-auto">
          <div
            className="grid min-h-16 w-full min-w-[900px]"
            style={{
              gridTemplateColumns: cols
                .map((c) => c.col)
                ?.map((n) => n + "fr")
                .join(" "),
            }}
          >
            {cols.map(({ title, filterArrows, thClassName }, i) => (
              <div
                key={i}
                className={classes(
                  thClassName,
                  "text-black text-sm font-bold px-2 py-1 min-h-[4.2rem] flex items-center justify-between"
                )}
              >
                {title}
                {filterArrows && <FilterArrows />}
              </div>
            ))}
          </div>
          <div className="flex flex-col overflow-x-auto w-full min-w-[900px]">
            {!!data?.length &&
              data?.map((item, i) => (
                <div
                  className={classes("grid min-h-16 w-full", trClassName)}
                  style={{
                    gridTemplateColumns: cols
                      .map((c) => c.col)
                      ?.map((n) => n + "fr")
                      .join(" "),
                  }}
                  key={i}
                >
                  {cols.map(({ render, tdClassName = "" }, index) => (
                    <div
                      className={classes(
                        tdClassName,
                        "px-2 py-1 min-h-[4.2rem] text-sm flex items-center"
                      )}
                      style={{
                        backgroundColor:
                          i % 2 === 0 ? "rgba(8, 68, 66, 0.03)" : "#fff",
                      }}
                      key={index}
                    >
                      {typeof render === "function" ? render(item) : render}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// This is going to be changed in the feature!
const FilterArrows = ({}) => {
  return (
    <img
      className="cursor-pointer"
      src={sort_arrows_icon}
      alt="filter-arrows"
    />
  );
};
