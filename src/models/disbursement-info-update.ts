import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disbursementRepaymentInfoUpdate2Schema,
  type DisbursementRepaymentInfoUpdate2,
} from "./disbursement-repayment-info-update2.js";

export type DisbursementInfoUpdate = {
  repayment?: DisbursementRepaymentInfoUpdate2;
};

export const disbursementInfoUpdateSchema: Schema<DisbursementInfoUpdate> = s.object<DisbursementInfoUpdate>({
  repayment: s.optional(s.lazy(() => disbursementRepaymentInfoUpdate2Schema)),
});
