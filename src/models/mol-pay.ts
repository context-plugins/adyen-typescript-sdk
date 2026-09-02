import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type50Schema, type Type50 } from "./type50.js";

export type MolPay = {
  checkoutAttemptId?: string;
  issuer: string;
  sdkData?: string;
  type: Type50;
};

export const molPaySchema: Schema<MolPay> = s.object<MolPay>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  sdkData: s.optional(s.string()),
  type: type50Schema,
});
