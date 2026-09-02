import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisputeServiceResult = {
  errorMessage?: string;
  success: boolean;
};

export const disputeServiceResultSchema: Schema<DisputeServiceResult> = s.object<DisputeServiceResult>({
  errorMessage: s.optional(s.string()),
  success: s.boolean(),
});
