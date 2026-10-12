import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the basis points configured for repaying the disbursement. */
export type DisbursementRepaymentInfoUpdate2 = {
  /**
   * The percentage of your user's incoming net volume that is deducted for repaying the grant. The
   * percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).
   */
  basisPoints?: number;
  /**
   * @deprecated
   */
  updateDescription?: string;
};

export const disbursementRepaymentInfoUpdate2Schema: Schema<DisbursementRepaymentInfoUpdate2> =
  s.object<DisbursementRepaymentInfoUpdate2>({
    basisPoints: s.optional(s.int()),
    updateDescription: s.optional(s.string()),
  });
