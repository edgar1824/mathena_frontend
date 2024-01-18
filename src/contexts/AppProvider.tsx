import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { IUser } from "types";

interface IContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

const Context = createContext<IContext>(null!);

export const useAppContext = () => useContext(Context);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  // const [user, setUser] = useState<IUser>(null!);
  const [user, setUser] = useState<IUser>(
    { name: "Test", email: "test@gmail.com", id: "1234567890" }!
  );
  return (
    <Context.Provider value={{ setUser, user }}>{children}</Context.Provider>
  );
};
