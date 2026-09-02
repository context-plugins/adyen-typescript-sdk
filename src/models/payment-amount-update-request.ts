import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustAuthTypeSchema, type AdjustAuthType } from "./adjust-auth-type.js";
import { amount29Schema, type Amount29 } from "./amount29.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { industryUsage1Schema, type IndustryUsage1 } from "./industry-usage1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { splitSchema, type Split } from "./split.js";
import { threeDSecureData3Schema, type ThreeDSecureData3 } from "./three-dsecure-data3.js";

export type PaymentAmountUpdateRequest = {
  adjustAuthType?: AdjustAuthType;
  adjustAuthorisationData?: string;
  amount: Amount29;
  applicationInfo?: ApplicationInfo;
  industryUsage?: IndustryUsage1;
  lineItems?: LineItem[];
  merchantAccount: string;
  mpiData?: ThreeDSecureData3;
  reference?: string;
  splits?: Split[];
};

export const paymentAmountUpdateRequestSchema: Schema<PaymentAmountUpdateRequest> =
  s.object<PaymentAmountUpdateRequest>({
    adjustAuthType: s.optional(s.lazy(() => adjustAuthTypeSchema)),
    adjustAuthorisationData: s.optional(s.string()),
    amount: amount29Schema,
    applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
    industryUsage: s.optional(s.lazy(() => industryUsage1Schema)),
    lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
    merchantAccount: s.string(),
    mpiData: s.optional(s.lazy(() => threeDSecureData3Schema)),
    reference: s.optional(s.string()),
    splits: s.optional(s.array(s.lazy(() => splitSchema))),
  });
