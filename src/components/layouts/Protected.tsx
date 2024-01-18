import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Protected: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
