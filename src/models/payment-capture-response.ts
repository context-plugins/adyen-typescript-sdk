import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount33Schema, type Amount33 } from "./amount33.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import { splitSchema, type Split } from "./split.js";
import { subMerchantInfoSchema, type SubMerchantInfo } from "./sub-merchant-info.js";

export type PaymentCaptureResponse = {
  amount: Amount33;
  lineItems?: LineItem[];
  merchantAccount: string;
  paymentPspReference: string;
  platformChargebackLogic?: PlatformChargebackLogic;
  pspReference: string;
  reference?: string;
  splits?: Split[];
  status: "received";
  subMerchants?: SubMerchantInfo[];
};

export const paymentCaptureResponseSchema: Schema<PaymentCaptureResponse> = s.object<PaymentCaptureResponse>({
  amount: amount33Schema,
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  merchantAccount: s.string(),
  paymentPspReference: s.string(),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  pspReference: s.string(),
  reference: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  status: s.literal("received"),
  subMerchants: s.optional(s.array(s.lazy(() => subMerchantInfoSchema))),
});
