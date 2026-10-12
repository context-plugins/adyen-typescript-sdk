import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import { splitSchema, type Split } from "./split.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";

export type VoidPendingRefundRequest = {
  /**
   * This field contains additional data, which may be required for a particular modification
   * request.
   *
   * The additionalData object consists of entries, each of which includes the key and value.
   */
  additionalData?: Record<string, string>;
  /** The merchant account that is used to process the payment. */
  merchantAccount: string;
  /**
   * The amount that needs to be captured/refunded. Required for `/capture` and `/refund`, not
   * allowed for `/cancel`. The `currency` must match the currency used in authorisation, the
   * `value` must be smaller than or equal to the authorised amount.
   */
  modificationAmount?: Amount;
  /**
   * Authentication data produced by an MPI (Mastercard SecureCode, Visa Secure, or Cartes
   * Bancaires).
   */
  mpiData?: ThreeDSecureData;
  /** The original merchant reference to cancel. */
  originalMerchantReference?: string;
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
  /**
   * An array of objects specifying how the amount should be split between accounts when using Adyen
   * for Platforms. For more information, see how to split payments for
   * [platforms](https://docs.adyen.com/platforms/automatic-split-configuration/).
   */
  splits?: Split[];
  /** The transaction reference provided by the PED. For point-of-sale integrations only. */
  tenderReference?: string;
  /**
   * Unique terminal ID for the PED that originally processed the request. For point-of-sale
   * integrations only.
   */
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
