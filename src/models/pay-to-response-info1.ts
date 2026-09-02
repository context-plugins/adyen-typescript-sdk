import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayToResponseInfo1 = {
  merchantName?: string;
  payToPurpose?: string;
};

export const payToResponseInfo1Schema: Schema<PayToResponseInfo1> = s.object<PayToResponseInfo1>({
  merchantName: s.optional(s.string()),
  payToPurpose: s.optional(s.string()),
});
