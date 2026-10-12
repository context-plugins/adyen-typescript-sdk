import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisableResult = {
  /**
   * Depending on whether a specific recurring detail was in the request, result is either
   * [detail-successfully-disabled] or [all-details-successfully-disabled].
   */
  response?: string;
};

export const disableResultSchema: Schema<DisableResult> = s.object<DisableResult>({
  response: s.optional(s.string()),
});
