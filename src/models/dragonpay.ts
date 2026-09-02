import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type36Schema, type Type36 } from "./type36.js";

export type Dragonpay = {
  checkoutAttemptId?: string;
  issuer: string;
  sdkData?: string;
  shopperEmail?: string;
  type: Type36;
};

export const dragonpaySchema: Schema<Dragonpay> = s.object<Dragonpay>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  sdkData: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  type: type36Schema,
});
