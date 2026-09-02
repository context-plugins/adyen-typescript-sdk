import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount31Schema, type Amount31 } from "./amount31.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { enhancedSchemeData1Schema, type EnhancedSchemeData1 } from "./enhanced-scheme-data1.js";
import { lineItemSchema, type LineItem } from "./line-item.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import { splitSchema, type Split } from "./split.js";
import { subMerchantInfoSchema, type SubMerchantInfo } from "./sub-merchant-info.js";

export type PaymentCaptureRequest = {
  amount: Amount31;
  applicationInfo?: ApplicationInfo;
  enhancedSchemeData?: EnhancedSchemeData1;
  lineItems?: LineItem[];
  merchantAccount: string;
  platformChargebackLogic?: PlatformChargebackLogic;
  reference?: string;
  splits?: Split[];
  subMerchants?: SubMerchantInfo[];
};

export const paymentCaptureRequestSchema: Schema<PaymentCaptureRequest> = s.object<PaymentCaptureRequest>({
  amount: amount31Schema,
  applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
  enhancedSchemeData: s.optional(s.lazy(() => enhancedSchemeData1Schema)),
  lineItems: s.optional(s.array(s.lazy(() => lineItemSchema))),
  merchantAccount: s.string(),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  reference: s.optional(s.string()),
  splits: s.optional(s.array(s.lazy(() => splitSchema))),
  subMerchants: s.optional(s.array(s.lazy(() => subMerchantInfoSchema))),
});
