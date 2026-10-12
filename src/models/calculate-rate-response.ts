import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  calculateRateResponseItemSchema,
  type CalculateRateResponseItem,
} from "./calculate-rate-response-item.js";

/** The response returned when you calculate an amount in a different currency. */
export type CalculateRateResponse = {
  /**
   * An array of objects, where each object returns a currency and value for which you performed an
   * exchange calculation. You can use the calculated amounts in your payment requests.
   */
  exchangeCalculations?: CalculateRateResponseItem[];
};

export const calculateRateResponseSchema: Schema<CalculateRateResponse> = s.object<CalculateRateResponse>({
  exchangeCalculations: s.optional(s.array(s.lazy(() => calculateRateResponseItemSchema))),
});
