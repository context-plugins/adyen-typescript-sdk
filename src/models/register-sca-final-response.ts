import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegisterScaFinalResponse = {
  success?: boolean;
};

export const registerScaFinalResponseSchema: Schema<RegisterScaFinalResponse> =
  s.object<RegisterScaFinalResponse>({
    success: s.optional(s.boolean()),
  });
