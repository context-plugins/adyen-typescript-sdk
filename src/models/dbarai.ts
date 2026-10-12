import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type20, type20Schema } from "./type20.js";

export type DBarai = {
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
  /** **dbarai** @default Type20.Dbarai */
  type?: Type20;
};

export const dBaraiSchema: Schema<DBarai> = s.object<DBarai>({
  checkoutAttemptId: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.defaulted(type20Schema, Type20.Dbarai),
});
