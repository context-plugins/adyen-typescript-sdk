import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount19Schema, type Amount19 } from "./amount19.js";
import { exchangeSide2Schema, type ExchangeSide2 } from "./exchange-side2.js";
import { rateType2Schema, type RateType2 } from "./rate-type2.js";

export type CalculateRateRequestItem = {
  exchangeSide: ExchangeSide2;
  sourceAmount: Amount19;
  targetCurrency: string;
  type: RateType2;
};

export const calculateRateRequestItemSchema: Schema<CalculateRateRequestItem> =
  s.object<CalculateRateRequestItem>({
    exchangeSide: exchangeSide2Schema,
    sourceAmount: amount19Schema,
    targetCurrency: s.string(),
    type: rateType2Schema,
  });
