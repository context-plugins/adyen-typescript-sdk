import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegisterScaFinalResponse = {
  /** Specifies if the registration was initiated successfully. */
  success?: boolean;
};

export const registerScaFinalResponseSchema: Schema<RegisterScaFinalResponse> =
  s.object<RegisterScaFinalResponse>({
    success: s.optional(s.boolean()),
  });
