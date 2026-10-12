import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **payto**. */
export type PayToInfo1 = {
  /** Merchant name displayed to the shopper in the Agreements */
  merchantName: string;
  /**
   * Represents the purpose of the Agreements created, it relates to the business type **Allowed
   * values**: mortgage, utility, loan, gambling, retail, salary, personal, government, pension,
   * tax, other
   */
  payToPurpose: string;
};

export const payToInfo1Schema: Schema<PayToInfo1> = s.object<PayToInfo1>({
  merchantName: s.string(),
  payToPurpose: s.string(),
});
