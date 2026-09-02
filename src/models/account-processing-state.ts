import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type AccountProcessingState = {
  disableReason?: string;
  disabled?: boolean;
  processedFrom?: Amount;
  processedTo?: Amount;
  tierNumber?: number;
};

export const accountProcessingStateSchema: Schema<AccountProcessingState> = s.object<AccountProcessingState>({
  disableReason: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  processedFrom: s.optional(s.lazy(() => amountSchema)),
  processedTo: s.optional(s.lazy(() => amountSchema)),
  tierNumber: s.optional(s.number()),
});
