import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type38Schema, type Type38 } from "./type38.js";

export type MolPay = {
  checkoutAttemptId?: string;
  issuer: string;
  sdkData?: string;
  type: Type38;
};

export const molPaySchema: Schema<MolPay> = s.object<MolPay>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  sdkData: s.optional(s.string()),
  type: type38Schema,
});
