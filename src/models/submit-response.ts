import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubmitResponse = {
  /** This field contains additional data, which may be returned in a particular response. */
  additionalData?: Record<string, string>;
  /** A new reference to uniquely identify this request. */
  pspReference: string;
  /** In case of refusal, an informational message for the reason. */
  refusalReason?: string;
  /**
   * The response:
   * * In case of success, it is `payout-submit-received`.
   * * In case of an error, an informational message is returned.
   */
  resultCode: string;
};

export const submitResponseSchema: Schema<SubmitResponse> = s.object<SubmitResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  pspReference: s.string(),
  refusalReason: s.optional(s.string()),
  resultCode: s.string(),
});
