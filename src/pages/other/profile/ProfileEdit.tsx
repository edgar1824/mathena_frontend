import { classes } from "components/forms/datePicker/parts/utils";
import { FC } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { SuccessMessage } from "./SuccessMessage";

const navItems = [
  {
    title: "Profil",
    to: "/profile/edit",
  },
  {
    title: "Login et sécurité",
    to: "/profile/edit/credentials",
  },
  {
    title: "Notifications",
    to: "/profile/edit/notifications",
  },
];

export const ProfileEdit: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex gap-[3.25rem] flex-col">
      <div className="flex gap-9">
        {navItems.map(({ title, to }) => (
          <NavLink
            end
            className={({ isActive }) =>
              classes(
                "text-xl font-medium text-[#B9E6C9] px-3 py-2 border-b border-[#B9E6C9]",
                isActive && "border-black text-black"
              )
            }
            key={title}
            to={to}
          >
            {title}
          </NavLink>
        ))}
      </div>
      <div
        className={classes(
          "px-[3.75rem] pt-11 pb-16 rounded-[20px]",
          pathname === "/profile/edit/notifications"
            ? "bg-white shadow-md"
            : "bg-[#E6ECEC]"
        )}
      >
        <Outlet />
      </div>
      <SuccessMessage title="Mise à jour du compte effectuée" />
    </div>
  );
};
