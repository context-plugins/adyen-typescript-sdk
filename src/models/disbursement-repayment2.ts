import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisbursementRepayment2 = {
  basisPoints: number;
  updateDescription: string;
};

export const disbursementRepayment2Schema: Schema<DisbursementRepayment2> = s.object<DisbursementRepayment2>({
  basisPoints: s.number(),
  updateDescription: s.string(),
});
