import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type53Schema, type Type53 } from "./type53.js";

export type PayByBank = {
  checkoutAttemptId?: string;
  issuer?: string;
  sdkData?: string;
  type: Type53;
};

export const payByBankSchema: Schema<PayByBank> = s.object<PayByBank>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: type53Schema,
});
