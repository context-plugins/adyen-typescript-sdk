import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSource9Schema, type FundingSource9 } from "./funding-source9.js";
import { inputDetailSchema, type InputDetail } from "./input-detail.js";
import { paymentMethodGroup2Schema, type PaymentMethodGroup2 } from "./payment-method-group2.js";
import { paymentMethodIssuerSchema, type PaymentMethodIssuer } from "./payment-method-issuer.js";
import { paymentMethodUpiAppsSchema, type PaymentMethodUpiApps } from "./payment-method-upi-apps.js";

export type PaymentMethod = {
  /** A list of apps for this payment method. */
  apps?: PaymentMethodUpiApps[];
  /** Brand for the selected gift card. For example: plastix, hmclub. */
  brand?: string;
  /** List of possible brands. For example: visa, mc. */
  brands?: string[];
  /** The configuration of the payment method. */
  configuration?: Record<string, string>;
  /** The funding source of the payment method. */
  fundingSource?: FundingSource9;
  /** The group where this payment method belongs to. */
  group?: PaymentMethodGroup2;
  /**
   * All input details to be provided to complete the payment with this payment method.
   *
   * @deprecated
   */
  inputDetails?: InputDetail[];
  /** A list of issuers for this payment method. */
  issuers?: PaymentMethodIssuer[];
  /** The displayable name of this payment method. */
  name?: string;
  /** Indicates whether this payment method should be promoted or not. */
  promoted?: boolean;
  /** The unique payment method code. */
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
