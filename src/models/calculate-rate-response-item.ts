import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount22Schema, type Amount22 } from "./amount22.js";
import { amount34Schema, type Amount34 } from "./amount34.js";

/** The response parameters returned when you calculate an amount in a different currency. */
export type CalculateRateResponseItem = {
  /**
   * The exchange rate to convert the source currency to the target currency. This includes Adyen's
   * markup.
   */
  appliedExchangeRate?: number;
  /**
   * The operation performed on the source amount. Possible values:
   * * **buy**
   * * **sell**
   */
  exchangeSide?: string;
  /** The currency of the amount you converted (the source amount). */
  sourceAmount?: Amount22;
  /**
   * An object specifying the currency and value to which you want to convert the source amount (the
   * target amount).
   */
  targetAmount?: Amount34;
  /**
   * The type of transaction. Possible values:
   * * **splitPayment**: for payments
   * * **splitRefund**: for refunds
   */
  type?: string;
};

export const calculateRateResponseItemSchema: Schema<CalculateRateResponseItem> =
  s.object<CalculateRateResponseItem>({
    appliedExchangeRate: s.optional(s.float64()),
    exchangeSide: s.optional(s.string()),
    sourceAmount: s.optional(s.lazy(() => amount22Schema)),
    targetAmount: s.optional(s.lazy(() => amount34Schema)),
    type: s.optional(s.string()),
  });
