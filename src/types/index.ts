export interface IPack {
  isRecommended?: boolean;
  type: "sm" | "md" | "lg";
  color: "light-green" | "green" | "yellow";
  price: number;
  currency: string;
  actives: string[];
}

export interface IRouteHandle {
  title: string;
  size?: "md" | "lg";
}

// ### Types from DB ###
export interface IUser {
  id: string;
  name: string;
  email: string;
}
