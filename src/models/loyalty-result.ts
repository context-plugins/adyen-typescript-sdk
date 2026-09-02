import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccount1Schema, type LoyaltyAccount1 } from "./loyalty-account1.js";
import { loyaltyAcquirerData1Schema, type LoyaltyAcquirerData1 } from "./loyalty-acquirer-data1.js";

export type LoyaltyResult = {
  loyaltyAccount: LoyaltyAccount1;
  currentBalance?: number;
  loyaltyAcquirerData?: LoyaltyAcquirerData1;
};

export const loyaltyResultSchema: Schema<LoyaltyResult> = s.object<LoyaltyResult>({
  loyaltyAccount: loyaltyAccount1Schema,
  currentBalance: s.optional(s.number()),
  loyaltyAcquirerData: s.optional(s.lazy(() => loyaltyAcquirerData1Schema)),
  _keysMap: {
    loyaltyAccount: "LoyaltyAccount",
    currentBalance: "CurrentBalance",
    loyaltyAcquirerData: "LoyaltyAcquirerData",
  },
});
