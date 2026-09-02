import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayoutMethod = {
  merchantAccount: string;
  payoutMethodCode?: string;
  payoutMethodReference?: string;
  recurringDetailReference: string;
  shopperReference: string;
};

export const payoutMethodSchema: Schema<PayoutMethod> = s.object<PayoutMethod>({
  merchantAccount: s.string(),
  payoutMethodCode: s.optional(s.string()),
  payoutMethodReference: s.optional(s.string()),
  recurringDetailReference: s.string(),
  shopperReference: s.string(),
});
