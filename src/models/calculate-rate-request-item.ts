import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount19Schema, type Amount19 } from "./amount19.js";
import { exchangeSide2Schema, type ExchangeSide2 } from "./exchange-side2.js";
import { rateType2Schema, type RateType2 } from "./rate-type2.js";

/** The request parameters required to calculate an amount in a different currency. */
export type CalculateRateRequestItem = {
  /**
   * The operation performed on the source amount. Possible values:
   * * **buy**
   * * **sell**
   */
  exchangeSide: ExchangeSide2;
  /**
   * An object specifying the currency and value for which you want to perform an exchange
   * calculation.
   */
  sourceAmount: Amount19;
  /** The currency to which you want to convert the source amount. */
  targetCurrency: string;
  /**
   * The type of transaction. Possible values:
   * * **splitPayment**: for payments
   * * **splitRefund**: for refunds
   */
  type: RateType2;
};

export const calculateRateRequestItemSchema: Schema<CalculateRateRequestItem> =
  s.object<CalculateRateRequestItem>({
    exchangeSide: exchangeSide2Schema,
    sourceAmount: amount19Schema,
    targetCurrency: s.string(),
    type: rateType2Schema,
  });
