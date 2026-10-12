import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **afterpaytouch** details */
export type AfterpayTouchResponseInfo1 = {
  /** Support Email */
  supportEmail?: string;
  /** Support Url */
  supportUrl?: string;
};

export const afterpayTouchResponseInfo1Schema: Schema<AfterpayTouchResponseInfo1> =
  s.object<AfterpayTouchResponseInfo1>({
    supportEmail: s.optional(s.string()),
    supportUrl: s.optional(s.string()),
  });
