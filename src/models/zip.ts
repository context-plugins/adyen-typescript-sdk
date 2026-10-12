import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type58, type58Schema } from "./type58.js";

export type Zip = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * Set this to **true** if the shopper would like to pick up and collect their order, instead of
   * having the goods delivered to them.
   */
  clickAndCollect?: string;
  /**
   * This is the `recurringDetailReference` returned in the response when you created the token.
   *
   * @deprecated
   */
  recurringDetailReference?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
  /** **zip** @default Type58.Zip */
  type?: Type58;
};

export const zipSchema: Schema<Zip> = s.object<Zip>({
  checkoutAttemptId: s.optional(s.string()),
  clickAndCollect: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type58Schema, Type58.Zip),
});
