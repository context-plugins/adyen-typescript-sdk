import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";

export type DonationRequest = {
  /** The Adyen account name of the charity. */
  donationAccount: string;
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /**
   * The amount to be donated.The `currency` must match the currency used in authorisation, the
   * `value` must be smaller than or equal to the authorised amount.
   */
  modificationAmount: Amount;
  /**
   * The original pspReference of the payment to modify. This reference is returned in:
   * * authorisation response
   * * authorisation notification
   */
  originalReference?: string;
  /**
   * Defines how to book chargebacks when using [Adyen for
   * Platforms](https://docs.adyen.com/adyen-for-platforms-model).
   */
  platformChargebackLogic?: PlatformChargebackLogic;
  /**
   * Your reference for the payment modification. This reference is visible in Customer Area and in
   * reports. Maximum length: 80 characters.
   */
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
