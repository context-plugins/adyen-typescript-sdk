import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisbursementRepaymentInfoUpdate2 = {
  basisPoints?: number;
  updateDescription?: string;
};

export const disbursementRepaymentInfoUpdate2Schema: Schema<DisbursementRepaymentInfoUpdate2> =
  s.object<DisbursementRepaymentInfoUpdate2>({
    basisPoints: s.optional(s.number()),
    updateDescription: s.optional(s.string()),
  });
