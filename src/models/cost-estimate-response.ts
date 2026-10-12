import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { cardBin1Schema, type CardBin1 } from "./card-bin1.js";

export type CostEstimateResponse = {
  /** Card BIN details. */
  cardBin?: CardBin1;
  /**
   * The estimated cost (scheme fee + interchange) in the settlement currency. If the settlement
   * currency cannot be determined, the fee in EUR is returned.
   */
  costEstimateAmount?: Amount;
  /** Adyen's 16-character reference associated with the request. */
  costEstimateReference?: string;
  /** The result of the cost estimation. */
  resultCode?: string;
};

export const costEstimateResponseSchema: Schema<CostEstimateResponse> = s.object<CostEstimateResponse>({
  cardBin: s.optional(s.lazy(() => cardBin1Schema)),
  costEstimateAmount: s.optional(s.lazy(() => amountSchema)),
  costEstimateReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
});
