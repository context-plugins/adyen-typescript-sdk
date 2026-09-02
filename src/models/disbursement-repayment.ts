import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisbursementRepayment = {
  basisPoints: number;
  updateDescription: string;
};

export const disbursementRepaymentSchema: Schema<DisbursementRepayment> = s.object<DisbursementRepayment>({
  basisPoints: s.number(),
  updateDescription: s.string(),
});
