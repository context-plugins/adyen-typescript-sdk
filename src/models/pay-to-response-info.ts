import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayToResponseInfo = {
  /** Merchant name displayed to the shopper in the Agreements */
  merchantName?: string;
  /**
   * Represents the purpose of the Agreements created, it relates to the business type **Allowed
   * values**: mortgage, utility, loan, gambling, retail, salary, personal, government, pension,
   * tax, other
   */
  payToPurpose?: string;
};

export const payToResponseInfoSchema: Schema<PayToResponseInfo> = s.object<PayToResponseInfo>({
  merchantName: s.optional(s.string()),
  payToPurpose: s.optional(s.string()),
});
