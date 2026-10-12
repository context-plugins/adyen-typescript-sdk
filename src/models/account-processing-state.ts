import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type AccountProcessingState = {
  /** The reason why processing has been disabled. */
  disableReason?: string;
  /** Indicates whether the processing of payments is allowed. */
  disabled?: boolean;
  /**
   * The lower bound of the processing tier (i.e., an account holder must have processed at least
   * this amount of money in order to be placed into this tier).
   */
  processedFrom?: Amount;
  /**
   * The upper bound of the processing tier (i.e., an account holder must have processed less than
   * this amount of money in order to be placed into this tier).
   */
  processedTo?: Amount;
  /** The processing tier that the account holder occupies. */
  tierNumber?: number;
};

export const accountProcessingStateSchema: Schema<AccountProcessingState> = s.object<AccountProcessingState>({
  disableReason: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  processedFrom: s.optional(s.lazy(() => amountSchema)),
  processedTo: s.optional(s.lazy(() => amountSchema)),
  tierNumber: s.optional(s.int()),
});
