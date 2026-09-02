import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type AccountProcessingState2 = {
  disableReason?: string;
  disabled?: boolean;
  processedFrom?: Amount;
  processedTo?: Amount;
  tierNumber?: number;
};

export const accountProcessingState2Schema: Schema<AccountProcessingState2> =
  s.object<AccountProcessingState2>({
    disableReason: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    processedFrom: s.optional(s.lazy(() => amountSchema)),
    processedTo: s.optional(s.lazy(() => amountSchema)),
    tierNumber: s.optional(s.number()),
  });
