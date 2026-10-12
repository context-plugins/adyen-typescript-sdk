import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IssuingTransactionData = {
  /** captureCycleId associated with transfer event. */
  captureCycleId?: string;
  /**
   * The type of events data.
   *
   * Possible values:
   *
   *  - **issuingTransactionData**: issuing transaction data
   *
   * @default "issuingTransactionData"
   */
  type?: "issuingTransactionData";
};

export const issuingTransactionDataSchema: Schema<IssuingTransactionData> = s.object<IssuingTransactionData>({
  captureCycleId: s.optional(s.string()),
  type: s.defaulted(s.literal("issuingTransactionData"), "issuingTransactionData"),
});
