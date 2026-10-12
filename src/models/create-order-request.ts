import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount21Schema, type Amount21 } from "./amount21.js";

export type CreateOrderRequest = {
  /** The total amount of the order. */
  amount: Amount21;
  /**
   * The date when the order should expire. If not provided, the default expiry duration is 1 day.
   *
   * [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example,
   * **2020-12-18T10:15:30+01:00**.
   */
  expiresAt?: string;
  /** The merchant account identifier, with which you want to process the order. */
  merchantAccount: string;
  /** A custom reference identifying the order. */
  reference: string;
};

export const createOrderRequestSchema: Schema<CreateOrderRequest> = s.object<CreateOrderRequest>({
  amount: amount21Schema,
  expiresAt: s.optional(s.string()),
  merchantAccount: s.string(),
  reference: s.string(),
});
