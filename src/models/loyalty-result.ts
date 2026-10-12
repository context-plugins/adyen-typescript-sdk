import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccount1Schema, type LoyaltyAccount1 } from "./loyalty-account1.js";
import { loyaltyAcquirerData1Schema, type LoyaltyAcquirerData1 } from "./loyalty-acquirer-data1.js";

/**
 * Data related to the result of a processed loyalty transaction. In the Message Response, the
 * result of each loyalty brand transaction.
 */
export type LoyaltyResult = {
  /** Data related to a loyalty account processed in the transaction. */
  loyaltyAccount: LoyaltyAccount1;
  /** Balance of an account. If known (provided by the card or an external host). */
  currentBalance?: number;
  /** Data related to the loyalty Acquirer during a loyalty transaction. If content not empty. */
  loyaltyAcquirerData?: LoyaltyAcquirerData1;
};

export const loyaltyResultSchema: Schema<LoyaltyResult> = s.object<LoyaltyResult>({
  loyaltyAccount: loyaltyAccount1Schema,
  currentBalance: s.optional(s.float64()),
  loyaltyAcquirerData: s.optional(s.lazy(() => loyaltyAcquirerData1Schema)),
  _keysMap: {
    loyaltyAccount: "LoyaltyAccount",
    currentBalance: "CurrentBalance",
    loyaltyAcquirerData: "LoyaltyAcquirerData",
  },
});
