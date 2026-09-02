import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount38Schema, type Amount38 } from "./amount38.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { enhancedSchemeData1Schema, type EnhancedSchemeData1 } from "./enhanced-scheme-data1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { merchantRefundReasonSchema, type MerchantRefundReason } from "./merchant-refund-reason.js";
import { splitSchema, type Split } from "./split.js";

export type PaymentRefundRequest = {
  amount: Amount38;
  applicationInfo?: ApplicationInfo;
  capturePspReference?: string;
  enhancedSchemeData?: EnhancedSchemeData1;
  lineItems?: LineItem[];
  merchantAccount: string;
  merchantRefundReason?: MerchantRefundReason | null;
  reference?: string;
  splits?: Split[];
  store?: string;
};

export const paymentRefundRequestSchema: Schema<PaymentRefundRequest> = s.object<PaymentRefundRequest>({
  amount: amount38Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  capturePspReference: s.optional(s.string()),
  enhancedSchemeData: s.optional(s.lazy(() => enhancedSchemeData1Schema)),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  merchantAccount: s.string(),
  merchantRefundReason: s.optionalNullable(s.lazy(() => merchantRefundReasonSchema)),
  reference: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  store: s.optional(s.string()),
});
