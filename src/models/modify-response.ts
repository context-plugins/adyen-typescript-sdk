import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ModifyResponse = {
  /** This field contains additional data, which may be returned in a particular response. */
  additionalData?: Record<string, string>;
  /**
   * Adyen's 16-character string reference associated with the transaction. This value is globally
   * unique; quote it when communicating with us about this response.
   */
  pspReference: string;
  /**
   * The response:
   * * In case of success, it is either `payout-confirm-received` or `payout-decline-received`.
   * * In case of an error, an informational message is returned.
   */
  response: string;
};

export const modifyResponseSchema: Schema<ModifyResponse> = s.object<ModifyResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  pspReference: s.string(),
  response: s.string(),
});
