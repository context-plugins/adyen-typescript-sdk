import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisbursementRepaymentInfoUpdate = {
  basisPoints?: number;
  updateDescription?: string;
};

export const disbursementRepaymentInfoUpdateSchema: Schema<DisbursementRepaymentInfoUpdate> =
  s.object<DisbursementRepaymentInfoUpdate>({
    basisPoints: s.optional(s.number()),
    updateDescription: s.optional(s.string()),
  });
