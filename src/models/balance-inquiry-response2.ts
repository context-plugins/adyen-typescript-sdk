import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentAccountStatus2Schema, type PaymentAccountStatus2 } from "./payment-account-status2.js";
import { paymentReceiptSchema, type PaymentReceipt } from "./payment-receipt.js";
import { response11Schema, type Response11 } from "./response11.js";

/** Content of the Balance Inquiry Response message. */
export type BalanceInquiryResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
  /**
   * Data related to the result of a Balance Inquiry request. If BalanceInquiryRequest.
   * PaymentAccount present.
   */
  paymentAccountStatus?: PaymentAccountStatus2;
  paymentReceipt?: PaymentReceipt[];
};

export const balanceInquiryResponse2Schema: Schema<BalanceInquiryResponse2> =
  s.object<BalanceInquiryResponse2>({
    response: response11Schema,
    paymentAccountStatus: s.optional(s.lazy(() => paymentAccountStatus2Schema)),
    paymentReceipt: s.optional(s.array(s.lazy(() => paymentReceiptSchema))),
    _keysMap: {
      response: "Response",
      paymentAccountStatus: "PaymentAccountStatus",
      paymentReceipt: "PaymentReceipt",
    },
  });
