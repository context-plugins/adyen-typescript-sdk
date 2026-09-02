import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAccountStatus2Schema, type PaymentAccountStatus2 } from "./payment-account-status2.js";
import { paymentReceiptSchema, type PaymentReceipt } from "./payment-receipt.js";
import { response11Schema, type Response11 } from "./response11.js";

export type BalanceInquiryResponse = {
  response: Response11;
  paymentAccountStatus?: PaymentAccountStatus2;
  paymentReceipt?: PaymentReceipt[];
};

export const balanceInquiryResponseSchema: Schema<BalanceInquiryResponse> = s.object<BalanceInquiryResponse>({
  response: response11Schema,
  paymentAccountStatus: s.optional(s.lazy(() => paymentAccountStatus2Schema)),
  paymentReceipt: s.optional(s.array(s.lazy(() => paymentReceiptSchema))),
  _keysMap: {
    response: "Response",
    paymentAccountStatus: "PaymentAccountStatus",
    paymentReceipt: "PaymentReceipt",
  },
});
