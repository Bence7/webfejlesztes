import { User } from "./user.model";

export interface Car {
  id?: any;
  brand: string;
  model: string;
  owner?: User;
}