import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  calculateRateResponseItemSchema,
  type CalculateRateResponseItem,
} from "./calculate-rate-response-item.js";

export type CalculateRateResponse = {
  exchangeCalculations?: CalculateRateResponseItem[];
};

export const calculateRateResponseSchema: Schema<CalculateRateResponse> = s.object<CalculateRateResponse>({
  exchangeCalculations: s.optional(s.array(s.lazy(() => calculateRateResponseItemSchema))),
});
