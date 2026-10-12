import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayMeResponseInfo = {
  /** Merchant display name */
  displayName?: string;
  /** Merchant logo. Format: Base64-encoded string. */
  logo?: string;
  /** The email address of merchant support. */
  supportEmail?: string;
};

export const payMeResponseInfoSchema: Schema<PayMeResponseInfo> = s.object<PayMeResponseInfo>({
  displayName: s.optional(s.string()),
  logo: s.optional(s.string()),
  supportEmail: s.optional(s.string()),
});
