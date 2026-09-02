import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisputeServiceResult1 = {
  errorMessage?: string;
  success: boolean;
};

export const disputeServiceResult1Schema: Schema<DisputeServiceResult1> = s.object<DisputeServiceResult1>({
  errorMessage: s.optional(s.string()),
  success: s.boolean(),
});
