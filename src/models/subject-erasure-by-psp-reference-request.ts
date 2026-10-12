import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubjectErasureByPspReferenceRequest = {
  /**
   * Set this to **true** if you want to delete shopper-related data, even if the shopper has an
   * existing recurring transaction. This only deletes the shopper-related data for the specific
   * payment, but does not cancel the existing recurring transaction.
   */
  forceErasure?: boolean;
  /** Your merchant account */
  merchantAccount?: string;
  /** The PSP reference of the payment. We will delete all shopper-related data for this payment. */
  pspReference?: string;
};

export const subjectErasureByPspReferenceRequestSchema: Schema<SubjectErasureByPspReferenceRequest> =
  s.object<SubjectErasureByPspReferenceRequest>({
    forceErasure: s.optional(s.boolean()),
    merchantAccount: s.optional(s.string()),
    pspReference: s.optional(s.string()),
  });
