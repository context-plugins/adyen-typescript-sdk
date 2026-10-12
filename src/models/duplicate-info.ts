import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DuplicateInfo = {
  /**
   * The transaction id associated with the duplicate charge for which you are disputing. The
   * disputed transaction must be in the same amount as the duplicate transaction.
   */
  duplicateTransactionId: string;
  /** The duplicate charge was made on the same card. Possible values: **true**, **false**. */
  sameCard: boolean;
  /** The issuer associated with each charge is the same. Possible values: **true**, **false**. */
  sameIssuer?: boolean;
};

export const duplicateInfoSchema: Schema<DuplicateInfo> = s.object<DuplicateInfo>({
  duplicateTransactionId: s.string(),
  sameCard: s.boolean(),
  sameIssuer: s.optional(s.boolean()),
});
