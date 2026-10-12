import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **payme**. */
export type PayMeInfo1 = {
  /** Merchant display name */
  displayName: string;
  /** Merchant logo. Format: Base64-encoded string. */
  logo: string;
  /** The email address of merchant support. */
  supportEmail: string;
};

export const payMeInfo1Schema: Schema<PayMeInfo1> = s.object<PayMeInfo1>({
  displayName: s.string(),
  logo: s.string(),
  supportEmail: s.string(),
});
