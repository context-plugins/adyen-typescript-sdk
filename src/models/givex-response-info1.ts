import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GivexResponseInfo1 = {
  currencyCode?: string;
  password?: string;
  paymentFlow?: string;
  username?: string;
};

export const givexResponseInfo1Schema: Schema<GivexResponseInfo1> = s.object<GivexResponseInfo1>({
  currencyCode: s.optional(s.string()),
  password: s.optional(s.string()),
  paymentFlow: s.optional(s.string()),
  username: s.optional(s.string()),
});
