import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type28Schema, type Type28 } from "./type28.js";

export type Dragonpay = {
  checkoutAttemptId?: string;
  issuer: string;
  sdkData?: string;
  shopperEmail?: string;
  type: Type28;
};

export const dragonpaySchema: Schema<Dragonpay> = s.object<Dragonpay>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  sdkData: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  type: type28Schema,
});
