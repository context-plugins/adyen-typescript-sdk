import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  calculateRateRequestItemSchema,
  type CalculateRateRequestItem,
} from "./calculate-rate-request-item.js";

export type CalculateRateRequest = {
  exchangeCalculations: CalculateRateRequestItem[];
};

export const calculateRateRequestSchema: Schema<CalculateRateRequest> = s.object<CalculateRateRequest>({
  exchangeCalculations: s.array(s.lazy(() => calculateRateRequestItemSchema)),
});
