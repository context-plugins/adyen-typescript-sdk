import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AfterpayTouchInfo = {
  supportEmail?: string;
  supportUrl: string;
};

export const afterpayTouchInfoSchema: Schema<AfterpayTouchInfo> = s.object<AfterpayTouchInfo>({
  supportEmail: s.optional(s.string()),
  supportUrl: s.string(),
});
