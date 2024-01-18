import { navigationItems } from "constants/sidebar";
import { FC, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { classes } from "../../helper";

export const Sidebar: FC = () => {
  return (
    <div
      className={classes(
        `shrink-0 sticky top-0 bottom-0 h-screen bg-[var(--green)] text-white px-[1.7rem] pt-[var(--gl-py)] flex flex-col items-center gap-[13.5rem] pb-10 overflow-y-auto custom-scrollbar`
      )}
    >
      <img src={logo} alt="logo" />
      <Navigation />
    </div>
  );
};

const Navigation: FC = () => {
  const { pathname } = useLocation();
  const key = useMemo(
    () =>
      pathname.split("/").filter(Boolean)[0] === "auth" ? "auth" : "protected",
    [pathname]
  );
  return (
    <div className="flex flex-col gap-[1.9rem] w-full">
      {navigationItems[key].map(
        ({ title, img, children, to, className }, index) => {
          if (children) {
            return (
              <div className="flex flex-col gap-3" key={index}>
                <NavLink
                  className={classes("flex items-center gap-2.5", className)}
                  to={to}
                >
                  <img
                    className="w-6 h-6 object-contain"
                    src={img}
                    alt={title}
                  />
                  <span>{title}</span>
                </NavLink>
                <div className="flex flex-col gap-1.5 pl-[3.3rem]">
                  {children.map((child, i) => (
                    <NavLink
                      className="grid grid-cols-[20px_1fr] items-center gap-[0.45rem]"
                      to={child?.to}
                      key={`${index}_${i}`}
                    >
                      <img
                        className={classes(
                          "object-contain justify-self-center w-4 h-4",
                          child?.className
                        )}
                        src={child?.img}
                        alt={child?.title}
                      />
                      <span>{child?.title}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <NavLink
              className={classes("flex items-center gap-2.5", className)}
              to={to}
              key={index}
            >
              <img className="w-6 h-6 object-contain" src={img} alt={title} />
              <span>{title}</span>
            </NavLink>
          );
        }
      )}
    </div>
  );
};
