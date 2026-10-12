import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type13Schema, type Type13 } from "./type13.js";

export type Blik = {
  /** BLIK code consisting of 6 digits. */
  blikCode?: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
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
  /**
   * **blik**
   */
  type?: Type13;
};

export const blikSchema: Schema<Blik> = s.object<Blik>({
  blikCode: s.optional(s.string()),
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type13Schema)),
});
