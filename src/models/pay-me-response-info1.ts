import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **payme** details */
export type PayMeResponseInfo1 = {
  /** Merchant display name */
  displayName?: string;
  /** Merchant logo. Format: Base64-encoded string. */
  logo?: string;
  /** The email address of merchant support. */
  supportEmail?: string;
};

export const payMeResponseInfo1Schema: Schema<PayMeResponseInfo1> = s.object<PayMeResponseInfo1>({
  displayName: s.optional(s.string()),
  logo: s.optional(s.string()),
  supportEmail: s.optional(s.string()),
});
