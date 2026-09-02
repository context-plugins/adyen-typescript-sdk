import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { cardBin1Schema, type CardBin1 } from "./card-bin1.js";

export type CostEstimateResponse = {
  cardBin?: CardBin1;
  costEstimateAmount?: Amount;
  costEstimateReference?: string;
  resultCode?: string;
};

export const costEstimateResponseSchema: Schema<CostEstimateResponse> = s.object<CostEstimateResponse>({
  cardBin: s.optional(s.lazy(() => cardBin1Schema)),
  costEstimateAmount: s.optional(s.lazy(() => amountSchema)),
  costEstimateReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
});
