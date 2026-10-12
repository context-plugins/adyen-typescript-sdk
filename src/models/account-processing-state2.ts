import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

/** The processing state of the account holder. */
export type AccountProcessingState2 = {
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

export const accountProcessingState2Schema: Schema<AccountProcessingState2> =
  s.object<AccountProcessingState2>({
    disableReason: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    processedFrom: s.optional(s.lazy(() => amountSchema)),
    processedTo: s.optional(s.lazy(() => amountSchema)),
    tierNumber: s.optional(s.int()),
  });
