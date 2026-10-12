import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  calculateRateRequestItemSchema,
  type CalculateRateRequestItem,
} from "./calculate-rate-request-item.js";

/** The request to calculate an amount in a different currency. */
export type CalculateRateRequest = {
  /**
   * An array of objects, where each object defines a currency and value for which you want to
   * perform an exchange calculation.
   */
  exchangeCalculations: CalculateRateRequestItem[];
};

export const calculateRateRequestSchema: Schema<CalculateRateRequest> = s.object<CalculateRateRequest>({
  exchangeCalculations: s.array(s.lazy(() => calculateRateRequestItemSchema)),
});
