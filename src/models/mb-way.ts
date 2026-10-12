import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type36, type36Schema } from "./type36.js";

export type MbWay = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  shopperEmail: string;
  telephoneNumber: string;
  /** **mbway** @default Type36.Mbway */
  type?: Type36;
};

export const mbWaySchema: Schema<MbWay> = s.object<MbWay>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  shopperEmail: s.string(),
  telephoneNumber: s.string(),
  type: s.defaulted(type36Schema, Type36.Mbway),
});
