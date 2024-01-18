import { FC } from "react";
import { Outlet, UIMatch, useLocation, useMatches } from "react-router-dom";
import { IRouteHandle } from "types";
import { classes } from "../../helper";
import { Sidebar } from "./Sidebar";

export const Root: FC = () => {
  return (
    <>
      <Sidebar />
      <LinksIcon />
      <main
        className={classes(
          "flex-[1] pt-[var(--gl-py)] pb-10 px-[3.75rem] flex flex-col gap-16 overflow-x-hidden"
        )}
      >
        <PageTitle />
        <Outlet />
      </main>
    </>
  );
};

const PageTitle: FC = () => {
  const { pathname } = useLocation();
  const matches = useMatches() as UIMatch<unknown, IRouteHandle>[];
  const filteredMatches = matches.filter((m) => !!m?.handle);
  const handle = filteredMatches[filteredMatches.length - 1] as UIMatch<
    unknown,
    IRouteHandle
  >;

  return (
    <h2
      className={classes(
        "text-[var(--green)] font-bold",
        pathname.split("/").filter(Boolean)[0] === "auth" && "text-center"
      )}
      style={{
        fontSize: { md: "37.9px", lg: "50.5px" }[handle?.handle?.size || "md"],
        lineHeight: { md: "47.6px", lg: "57.6px" }[
          handle?.handle?.size || "md"
        ],
        textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
      }}
    >
      {handle?.handle?.title}
    </h2>
  );
};

const LinksIcon: FC = () => {
  return (
    <div className="bg-[#B9E6C9] text-[var(--green)] font-bold text-[28.279px] cursor-pointer rounded-full absolute top-7 right-[1.875rem] w-[57px] h-[57px] flex items-center justify-center">
      M
    </div>
  );
};
