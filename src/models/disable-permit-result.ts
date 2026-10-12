import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisablePermitResult = {
  /**
   * A unique reference associated with the request. This value is globally unique; quote it when
   * communicating with us about this request.
   */
  pspReference?: string;
  /** Status of the disable request. */
  status?: string;
};

export const disablePermitResultSchema: Schema<DisablePermitResult> = s.object<DisablePermitResult>({
  pspReference: s.optional(s.string()),
  status: s.optional(s.string()),
});
