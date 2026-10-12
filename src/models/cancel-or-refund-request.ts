import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformChargebackLogicSchema, type PlatformChargebackLogic } from "./platform-chargeback-logic.js";
import { threeDSecureDataSchema, type ThreeDSecureData } from "./three-dsecure-data.js";

export type CancelOrRefundRequest = {
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
  originalReference: string;
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
  /** The transaction reference provided by the PED. For point-of-sale integrations only. */
  tenderReference?: string;
  /**
   * Unique terminal ID for the PED that originally processed the request. For point-of-sale
   * integrations only.
   */
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
