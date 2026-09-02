import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayToResponseInfo = {
  merchantName?: string;
  payToPurpose?: string;
};

export const payToResponseInfoSchema: Schema<PayToResponseInfo> = s.object<PayToResponseInfo>({
  merchantName: s.optional(s.string()),
  payToPurpose: s.optional(s.string()),
});
