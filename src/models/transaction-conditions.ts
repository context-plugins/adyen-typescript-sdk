import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { forceEntryModeSchema, type ForceEntryMode } from "./force-entry-mode.js";
import { loyaltyHandling1Schema, type LoyaltyHandling1 } from "./loyalty-handling1.js";

export type TransactionConditions = {
  allowedPaymentBrand?: string[];
  acquirerId?: number[];
  debitPreferredFlag?: boolean;
  allowedLoyaltyBrand?: string[];
  loyaltyHandling?: LoyaltyHandling1;
  customerLanguage?: string;
  forceOnlineFlag?: boolean;
  forceEntryMode?: ForceEntryMode[];
  merchantCategoryCode?: string;
};

export const transactionConditionsSchema: Schema<TransactionConditions> = s.object<TransactionConditions>({
  allowedPaymentBrand: s.optional(s.array(s.string())),
  acquirerId: s.optional(s.array(s.number())),
  debitPreferredFlag: s.optional(s.boolean()),
  allowedLoyaltyBrand: s.optional(s.array(s.string())),
  loyaltyHandling: s.optional(s.lazy(() => loyaltyHandling1Schema)),
  customerLanguage: s.optional(s.string()),
  forceOnlineFlag: s.optional(s.boolean()),
  forceEntryMode: s.optional(s.array(s.lazy(() => forceEntryModeSchema))),
  merchantCategoryCode: s.optional(s.string()),
  _keysMap: {
    allowedPaymentBrand: "AllowedPaymentBrand",
    acquirerId: "AcquirerID",
    debitPreferredFlag: "DebitPreferredFlag",
    allowedLoyaltyBrand: "AllowedLoyaltyBrand",
    loyaltyHandling: "LoyaltyHandling",
    customerLanguage: "CustomerLanguage",
    forceOnlineFlag: "ForceOnlineFlag",
    forceEntryMode: "ForceEntryMode",
    merchantCategoryCode: "MerchantCategoryCode",
  },
});
