import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount39Schema, type Amount39 } from "./amount39.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { merchantRefundReason1Schema, type MerchantRefundReason1 } from "./merchant-refund-reason1.js";
import { splitSchema, type Split } from "./split.js";

export type PaymentRefundResponse = {
  amount: Amount39;
  capturePspReference?: string;
  lineItems?: LineItem[];
  merchantAccount: string;
  merchantRefundReason?: MerchantRefundReason1 | null;
  paymentPspReference: string;
  pspReference: string;
  reference?: string;
  splits?: Split[];
  status: "received";
  store?: string;
};

export const paymentRefundResponseSchema: Schema<PaymentRefundResponse> = s.object<PaymentRefundResponse>({
  amount: amount39Schema,
  capturePspReference: s.optional(s.string()),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  merchantAccount: s.string(),
  merchantRefundReason: s.optionalNullable(s.lazy(() => merchantRefundReason1Schema)),
  paymentPspReference: s.string(),
  pspReference: s.string(),
  reference: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  status: s.literal("received"),
  store: s.optional(s.string()),
});
