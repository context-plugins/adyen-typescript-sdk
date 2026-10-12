import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CalculatePciStatusResponse = {
  /**
   * Indicates if the user is required to sign PCI questionnaires. If **false**, they do not need to
   * sign any questionnaires.
   */
  signingRequired?: boolean;
};

export const calculatePciStatusResponseSchema: Schema<CalculatePciStatusResponse> =
  s.object<CalculatePciStatusResponse>({
    signingRequired: s.optional(s.boolean()),
  });
