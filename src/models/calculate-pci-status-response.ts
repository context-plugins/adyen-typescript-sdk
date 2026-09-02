import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CalculatePciStatusResponse = {
  signingRequired?: boolean;
};

export const calculatePciStatusResponseSchema: Schema<CalculatePciStatusResponse> =
  s.object<CalculatePciStatusResponse>({
    signingRequired: s.optional(s.boolean()),
  });
