import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountReq2Schema, type LoyaltyAccountReq2 } from "./loyalty-account-req2.js";
import { paymentAccountReq2Schema, type PaymentAccountReq2 } from "./payment-account-req2.js";

/**
 * It conveys Information related to the account for which a Balance Inquiry is requested. Content
 * of the Balance Inquiry Request message.
 */
export type BalanceInquiryRequest = {
  /** Data related to the account pointed by the payment card. */
  paymentAccountReq?: PaymentAccountReq2;
  /** Data related to a requested Loyalty program or account. */
  loyaltyAccountReq?: LoyaltyAccountReq2;
};

export const balanceInquiryRequestSchema: Schema<BalanceInquiryRequest> = s.object<BalanceInquiryRequest>({
  paymentAccountReq: s.optional(s.lazy(() => paymentAccountReq2Schema)),
  loyaltyAccountReq: s.optional(s.lazy(() => loyaltyAccountReq2Schema)),
  _keysMap: {
    paymentAccountReq: "PaymentAccountReq",
    loyaltyAccountReq: "LoyaltyAccountReq",
  },
});
