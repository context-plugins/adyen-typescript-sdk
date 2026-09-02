import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount21Schema, type Amount21 } from "./amount21.js";

export type CreateOrderRequest = {
  amount: Amount21;
  expiresAt?: string;
  merchantAccount: string;
  reference: string;
};

export const createOrderRequestSchema: Schema<CreateOrderRequest> = s.object<CreateOrderRequest>({
  amount: amount21Schema,
  expiresAt: s.optional(s.string()),
  merchantAccount: s.string(),
  reference: s.string(),
});
