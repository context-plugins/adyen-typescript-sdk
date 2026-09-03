import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount10Schema, type Amount10 } from "./amount10.js";

export type CheckoutBankTransferAction = {
  accountNumber?: string;
  bankCode?: string;
  beneficiary?: string;
  bic?: string;
  branchCode?: string;
  downloadUrl?: string;
  iban?: string;
  paymentMethodType?: string;
  reference?: string;
  routingNumber?: string;
  shopperEmail?: string;
  sortCode?: string;
  totalAmount?: Amount10;
  type: "bankTransfer";
  url?: string;
};

export const checkoutBankTransferActionSchema: Schema<CheckoutBankTransferAction> =
  s.object<CheckoutBankTransferAction>({
    accountNumber: s.optional(s.string()),
    bankCode: s.optional(s.string()),
    beneficiary: s.optional(s.string()),
    bic: s.optional(s.string()),
    branchCode: s.optional(s.string()),
    downloadUrl: s.optional(s.string()),
    iban: s.optional(s.string()),
    paymentMethodType: s.optional(s.string()),
    reference: s.optional(s.string()),
    routingNumber: s.optional(s.string()),
    shopperEmail: s.optional(s.string()),
    sortCode: s.optional(s.string()),
    totalAmount: s.optional(s.lazy(() => amount10Schema)),
    type: s.literal("bankTransfer"),
    url: s.optional(s.string()),
  });
