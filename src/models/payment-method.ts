import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSource9Schema, type FundingSource9 } from "./funding-source9.js";
import { inputDetailSchema, type InputDetail } from "./input-detail.js";
import { paymentMethodGroup2Schema, type PaymentMethodGroup2 } from "./payment-method-group2.js";
import { paymentMethodIssuerSchema, type PaymentMethodIssuer } from "./payment-method-issuer.js";
import { paymentMethodUpiAppsSchema, type PaymentMethodUpiApps } from "./payment-method-upi-apps.js";

export type PaymentMethod = {
  apps?: PaymentMethodUpiApps[];
  brand?: string;
  brands?: string[];
  configuration?: Record<string, string>;
  fundingSource?: FundingSource9;
  group?: PaymentMethodGroup2;
  inputDetails?: InputDetail[];
  issuers?: PaymentMethodIssuer[];
  name?: string;
  promoted?: boolean;
  type?: string;
};

export const paymentMethodSchema: Schema<PaymentMethod> = s.object<PaymentMethod>({
  apps: s.optional(s.array(s.lazy(() => paymentMethodUpiAppsSchema))),
  brand: s.optional(s.string()),
  brands: s.optional(s.array(s.string())),
  configuration: s.optional(s.record(s.string(), s.string())),
  fundingSource: s.optional(s.lazy(() => fundingSource9Schema)),
  group: s.optional(s.lazy(() => paymentMethodGroup2Schema)),
  inputDetails: s.optional(s.array(s.lazy(() => inputDetailSchema))),
  issuers: s.optional(s.array(s.lazy(() => paymentMethodIssuerSchema))),
  name: s.optional(s.string()),
  promoted: s.optional(s.boolean()),
  type: s.optional(s.string()),
});
