import { BasePrivateKeyEncodingOptions } from "crypto";
import { Basket } from "./basket";

export interface User {
  email: string;
  token: string;
  basket?: Basket;
}
