import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount26Schema, type Amount26 } from "./amount26.js";
import { paymentResponse9Schema, type PaymentResponse9 } from "./payment-response9.js";
import { status1Schema, type Status1 } from "./status1.js";

export type DonationPaymentResponse = {
  amount?: Amount26;
  donationAccount?: string;
  id?: string;
  merchantAccount?: string;
  payment?: PaymentResponse9;
  reference?: string;
  status?: Status1;
};

export const donationPaymentResponseSchema: Schema<DonationPaymentResponse> =
  s.object<DonationPaymentResponse>({
    amount: s.optional(s.lazy(() => amount26Schema)),
    donationAccount: s.optional(s.string()),
    id: s.optional(s.string()),
    merchantAccount: s.optional(s.string()),
    payment: s.optional(s.lazy(() => paymentResponse9Schema)),
    reference: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1Schema)),
  });
