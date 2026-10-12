import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatchableDuplicateInfo = {
  /**
   * The transaction id associated with the duplicate charge for which you are disputing. The
   * disputed transaction must be in the same amount as the duplicate transaction.
   */
  duplicateTransactionId?: string;
  /** The duplicate charge was made on the same card. Possible values: **true**, **false**. */
  sameCard?: boolean;
  /** The issuer associated with each charge is the same. Possible values: **true**, **false**. */
  sameIssuer?: boolean | null;
};

export const patchableDuplicateInfoSchema: Schema<PatchableDuplicateInfo> = s.object<PatchableDuplicateInfo>({
  duplicateTransactionId: s.optional(s.string()),
  sameCard: s.optional(s.boolean()),
  sameIssuer: s.optionalNullable(s.boolean()),
});
