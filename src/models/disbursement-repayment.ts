import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisbursementRepayment = {
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

export const disbursementRepaymentSchema: Schema<DisbursementRepayment> = s.object<DisbursementRepayment>({
  basisPoints: s.int(),
  updateDescription: s.string(),
});
