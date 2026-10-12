import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount10Schema, type Amount10 } from "./amount10.js";

export type CheckoutBankTransferAction = {
  /** The account number of the bank transfer. */
  accountNumber?: string;
  /** The bank code of the bank transfer. */
  bankCode?: string;
  /** The name of the account holder. */
  beneficiary?: string;
  /** The BIC of the IBAN. */
  bic?: string;
  /** The branch code of the bank transfer. */
  branchCode?: string;
  /** The url to download payment details with. */
  downloadUrl?: string;
  /** The IBAN of the bank transfer. */
  iban?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** The transfer reference. */
  reference?: string;
  /** The routing number of the bank transfer. */
  routingNumber?: string;
  /** The e-mail of the shopper, included if an e-mail was sent to the shopper. */
  shopperEmail?: string;
  /** The sort code of the bank transfer. */
  sortCode?: string;
  /** The amount of the bank transfer. */
  totalAmount?: Amount10;
  /** The type of the action. @default "bankTransfer" */
  type?: "bankTransfer";
  /** Specifies the URL to redirect to. */
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
    type: s.defaulted(s.literal("bankTransfer"), "bankTransfer"),
    url: s.optional(s.string()),
  });
