import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import { splitSchema, type Split } from "./split.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";

export type VoidPendingRefundRequest = {
  additionalData?: Record<string, string>;
  merchantAccount: string;
  modificationAmount?: Amount;
  mpiData?: ThreeDSecureData;
  originalMerchantReference?: string;
  originalReference?: string;
  platformChargebackLogic?: PlatformChargebackLogic;
  reference?: string;
  splits?: Split[];
  tenderReference?: string;
  uniqueTerminalId?: string;
};

export const voidPendingRefundRequestSchema: Schema<VoidPendingRefundRequest> =
  s.object<VoidPendingRefundRequest>({
    additionalData: s.optional(s.record(s.string(), s.string())),
    merchantAccount: s.string(),
    modificationAmount: s.optional(s.lazy(() => amountSchema)),
    mpiData: s.optional(s.lazy(() => threeDSecureDataSchema)),
    originalMerchantReference: s.optional(s.string()),
    originalReference: s.optional(s.string()),
    platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
    reference: s.optional(s.string()),
    splits: s.optional(s.array(s.lazy(() => splitSchema))),
    tenderReference: s.optional(s.string()),
    uniqueTerminalId: s.optional(s.string()),
  });
