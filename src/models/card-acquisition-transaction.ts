import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { forceEntryModeSchema, type ForceEntryMode } from "./force-entry-mode.js";
import { loyaltyHandling2Schema, type LoyaltyHandling2 } from "./loyalty-handling2.js";
import { paymentType1Schema, type PaymentType1 } from "./payment-type1.js";

export type CardAcquisitionTransaction = {
  allowedPaymentBrand?: string[];
  allowedLoyaltyBrand?: string[];
  loyaltyHandling?: LoyaltyHandling2;
  customerLanguage?: string;
  forceEntryMode?: ForceEntryMode[];
  forceCustomerSelectionFlag?: boolean;
  totalAmount?: number;
  paymentType?: PaymentType1;
  cashBackFlag?: boolean;
};

export const cardAcquisitionTransactionSchema: Schema<CardAcquisitionTransaction> =
  s.object<CardAcquisitionTransaction>({
    allowedPaymentBrand: s.optional(s.array(s.string())),
    allowedLoyaltyBrand: s.optional(s.array(s.string())),
    loyaltyHandling: s.optional(s.lazy(() => loyaltyHandling2Schema)),
    customerLanguage: s.optional(s.string()),
    forceEntryMode: s.optional(s.array(s.lazy(() => forceEntryModeSchema))),
    forceCustomerSelectionFlag: s.optional(s.boolean()),
    totalAmount: s.optional(s.number()),
    paymentType: s.optional(s.lazy(() => paymentType1Schema)),
    cashBackFlag: s.optional(s.boolean()),
    _keysMap: {
      allowedPaymentBrand: "AllowedPaymentBrand",
      allowedLoyaltyBrand: "AllowedLoyaltyBrand",
      loyaltyHandling: "LoyaltyHandling",
      customerLanguage: "CustomerLanguage",
      forceEntryMode: "ForceEntryMode",
      forceCustomerSelectionFlag: "ForceCustomerSelectionFlag",
      totalAmount: "TotalAmount",
      paymentType: "PaymentType",
      cashBackFlag: "CashBackFlag",
    },
  });
