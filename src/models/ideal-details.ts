import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type25, type25Schema } from "./type25.js";

export type IdealDetails = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * The iDEAL issuer value of the shopper's selected bank. Set this to an **id** of an iDEAL issuer
   * to preselect it.
   */
  issuer?: string;
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
  /** **ideal** @default Type25.Ideal */
  type?: Type25;
};

export const idealDetailsSchema: Schema<IdealDetails> = s.object<IdealDetails>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type25Schema, Type25.Ideal),
});
