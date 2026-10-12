import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AfterpayTouchResponseInfo = {
  /** Support Email */
  supportEmail?: string;
  /** Support Url */
  supportUrl?: string;
};

export const afterpayTouchResponseInfoSchema: Schema<AfterpayTouchResponseInfo> =
  s.object<AfterpayTouchResponseInfo>({
    supportEmail: s.optional(s.string()),
    supportUrl: s.optional(s.string()),
  });
