import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";

export type DonationRequest = {
  donationAccount: string;
  merchantAccount: string;
  modificationAmount: Amount;
  originalReference?: string;
  platformChargebackLogic?: PlatformChargebackLogic;
  reference?: string;
};

export const donationRequestSchema: Schema<DonationRequest> = s.object<DonationRequest>({
  donationAccount: s.string(),
  merchantAccount: s.string(),
  modificationAmount: amountSchema,
  originalReference: s.optional(s.string()),
  platformChargebackLogic: s.optional(s.lazy(() => platformChargebackLogicSchema)),
  reference: s.optional(s.string()),
});
