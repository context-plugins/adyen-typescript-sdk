import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AfterpayTouchInfo1 = {
  supportEmail?: string;
  supportUrl: string;
};

export const afterpayTouchInfo1Schema: Schema<AfterpayTouchInfo1> = s.object<AfterpayTouchInfo1>({
  supportEmail: s.optional(s.string()),
  supportUrl: s.string(),
});
