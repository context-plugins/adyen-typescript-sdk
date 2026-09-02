import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type38Schema, type Type38 } from "./type38.js";

export type Voucher = {
  checkoutAttemptId?: string;
  firstName: string;
  lastName: string;
  sdkData?: string;
  shopperEmail: string;
  telephoneNumber: string;
  type: Type38;
};

export const voucherSchema: Schema<Voucher> = s.object<Voucher>({
  checkoutAttemptId: s.optional(s.string()),
  firstName: s.string(),
  lastName: s.string(),
  sdkData: s.optional(s.string()),
  shopperEmail: s.string(),
  telephoneNumber: s.string(),
  type: type38Schema,
});
