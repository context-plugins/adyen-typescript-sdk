import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type46Schema, type Type46 } from "./type46.js";

export type PseLatam = {
  /** The shopper's bank. */
  bank: string;
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The client type. */
  clientType: string;
  /** The identification code. */
  identification: string;
  /** The identification type. */
  identificationType: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** The payment method type. */
  type?: Type46;
};

export const pseLatamSchema: Schema<PseLatam> = s.object<PseLatam>({
  bank: s.string(),
  checkoutAttemptId: s.optional(s.string()),
  clientType: s.string(),
  identification: s.string(),
  identificationType: s.string(),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type46Schema)),
});
