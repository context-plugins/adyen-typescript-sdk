import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrumentGroup = {
  /**
   * The unique identifier of the [balance
   * platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id)
   * to which the payment instrument group belongs.
   */
  balancePlatform: string;
  /** Your description for the payment instrument group. */
  description?: string;
  /** The unique identifier of the payment instrument group. */
  id?: string;
  /** Properties of the payment instrument group. */
  properties?: Record<string, string>;
  /** Your reference for the payment instrument group. */
  reference?: string;
  /** The tx variant of the payment instrument group. */
  txVariant: string;
};

export const paymentInstrumentGroupSchema: Schema<PaymentInstrumentGroup> = s.object<PaymentInstrumentGroup>({
  balancePlatform: s.string(),
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  properties: s.optional(s.record(s.string(), s.string())),
  reference: s.optional(s.string()),
  txVariant: s.string(),
});
