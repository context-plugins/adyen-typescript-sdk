import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisbursementRepaymentInfoUpdate = {
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

export const disbursementRepaymentInfoUpdateSchema: Schema<DisbursementRepaymentInfoUpdate> =
  s.object<DisbursementRepaymentInfoUpdate>({
    basisPoints: s.optional(s.int()),
    updateDescription: s.optional(s.string()),
  });
