import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GivexResponseInfo = {
  currencyCode?: string;
  password?: string;
  paymentFlow?: string;
  username?: string;
};

export const givexResponseInfoSchema: Schema<GivexResponseInfo> = s.object<GivexResponseInfo>({
  currencyCode: s.optional(s.string()),
  password: s.optional(s.string()),
  paymentFlow: s.optional(s.string()),
  username: s.optional(s.string()),
});
