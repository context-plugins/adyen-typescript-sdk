import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regionSchema, type Region } from "./region.js";

/**
 * Details to provide if `type` is **klarna** or its variant.
 *
 * You can use the following payment method `type` values for Klarna:
 * * **klarna**: Klarna Pay Later
 * * **klarna_account**: Klarna Pay over time
 * * **klarna_paynow**: Klarna Pay now
 * * **klarna_b2b**: [Billie via Klarna](https://docs.adyen.com/payment-methods/klarna/billie)
 */
export type KlarnaInfo1 = {
  /**
   * Indicates the status of [Automatic
   * capture](https://docs.adyen.com/online-payments/capture#automatic-capture). Default value:
   * **false**.
   */
  autoCapture?: boolean;
  /** The email address for disputes. */
  disputeEmail: string;
  /** The region of operation. For example, **NA**, **EU**, **CH**, **AU**. */
  region: Region;
  /** The email address of merchant support. */
  supportEmail: string;
};

export const klarnaInfo1Schema: Schema<KlarnaInfo1> = s.object<KlarnaInfo1>({
  autoCapture: s.optional(s.boolean()),
  disputeEmail: s.string(),
  region: regionSchema,
  supportEmail: s.string(),
});
