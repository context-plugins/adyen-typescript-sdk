import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountReq2Schema, type LoyaltyAccountReq2 } from "./loyalty-account-req2.js";
import { paymentAccountReq2Schema, type PaymentAccountReq2 } from "./payment-account-req2.js";

export type BalanceInquiryRequest2 = {
  paymentAccountReq?: PaymentAccountReq2;
  loyaltyAccountReq?: LoyaltyAccountReq2;
};

export const balanceInquiryRequest2Schema: Schema<BalanceInquiryRequest2> = s.object<BalanceInquiryRequest2>({
  paymentAccountReq: s.optional(s.lazy(() => paymentAccountReq2Schema)),
  loyaltyAccountReq: s.optional(s.lazy(() => loyaltyAccountReq2Schema)),
  _keysMap: {
    paymentAccountReq: "PaymentAccountReq",
    loyaltyAccountReq: "LoyaltyAccountReq",
  },
});
