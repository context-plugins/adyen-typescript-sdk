import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **afterpaytouch**. */
export type AfterpayTouchInfo1 = {
  /** Support Email */
  supportEmail?: string;
  /** Support Url */
  supportUrl: string;
};

export const afterpayTouchInfo1Schema: Schema<AfterpayTouchInfo1> = s.object<AfterpayTouchInfo1>({
  supportEmail: s.optional(s.string()),
  supportUrl: s.string(),
});
