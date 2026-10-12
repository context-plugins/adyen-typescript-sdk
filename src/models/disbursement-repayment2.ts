import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the basis points configured for repaying the disbursement. */
export type DisbursementRepayment2 = {
  /**
   * The percentage of your user's incoming net volume that is deducted for repaying the grant. The
   * percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).
   */
  basisPoints: number;
  /**
   * @deprecated
   */
  updateDescription: string;
};

export const disbursementRepayment2Schema: Schema<DisbursementRepayment2> = s.object<DisbursementRepayment2>({
  basisPoints: s.int(),
  updateDescription: s.string(),
});
