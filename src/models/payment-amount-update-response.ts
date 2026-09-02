import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount30Schema, type Amount30 } from "./amount30.js";
import { industryUsage1Schema, type IndustryUsage1 } from "./industry-usage1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { splitSchema, type Split } from "./split.js";
import { status2Schema, type Status2 } from "./status2.js";

export type PaymentAmountUpdateResponse = {
  adjustAuthorisationData?: string;
  amount: Amount30;
  industryUsage?: IndustryUsage1;
  lineItems?: LineItem[];
  merchantAccount: string;
  paymentPspReference: string;
  pspReference: string;
  reference: string;
  splits?: Split[];
  status: Status2;
};

export const paymentAmountUpdateResponseSchema: Schema<PaymentAmountUpdateResponse> =
  s.object<PaymentAmountUpdateResponse>({
    adjustAuthorisationData: s.optional(s.string()),
    amount: amount30Schema,
    industryUsage: s.optional(s.lazy(() => industryUsage1Schema)),
    lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
    merchantAccount: s.string(),
    paymentPspReference: s.string(),
    pspReference: s.string(),
    reference: s.string(),
    splits: s.optional(s.array(s.lazy(() => splitSchema))),
    status: status2Schema,
  });
