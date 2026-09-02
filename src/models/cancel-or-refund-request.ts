import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";

export type CancelOrRefundRequest = {
  additionalData?: Record<string, string>;
  merchantAccount: string;
  mpiData?: ThreeDSecureData;
  originalMerchantReference?: string;
  originalReference: string;
  platformChargebackLogic?: PlatformChargebackLogic;
  reference?: string;
  tenderReference?: string;
  uniqueTerminalId?: string;
};

export const cancelOrRefundRequestSchema: Schema<CancelOrRefundRequest> = s.object<CancelOrRefundRequest>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  merchantAccount: s.string(),
  mpiData: s.optional(s.lazy(() => threeDSecureDataSchema)),
  originalMerchantReference: s.optional(s.string()),
  originalReference: s.string(),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  reference: s.optional(s.string()),
  tenderReference: s.optional(s.string()),
  uniqueTerminalId: s.optional(s.string()),
});
