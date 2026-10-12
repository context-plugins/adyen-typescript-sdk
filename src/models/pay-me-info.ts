import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayMeInfo = {
  /** Merchant display name */
  displayName: string;
  /** Merchant logo. Format: Base64-encoded string. */
  logo: string;
  /** The email address of merchant support. */
  supportEmail: string;
};

export const payMeInfoSchema: Schema<PayMeInfo> = s.object<PayMeInfo>({
  displayName: s.string(),
  logo: s.string(),
  supportEmail: s.string(),
});
