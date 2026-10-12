import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type38Schema, type Type38 } from "./type38.js";

export type MolPay = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The shopper's bank. Specify this with the issuer value that corresponds to this bank. */
  issuer: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /**
   * **molpay**
   */
  type: Type38;
};

export const molPaySchema: Schema<MolPay> = s.object<MolPay>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  sdkData: s.optional(s.string()),
  type: type38Schema,
});
