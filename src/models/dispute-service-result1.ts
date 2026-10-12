import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The result of the dispute service. */
export type DisputeServiceResult1 = {
  /** The general error message. */
  errorMessage?: string;
  /** Indicates whether the request succeeded. */
  success: boolean;
};

export const disputeServiceResult1Schema: Schema<DisputeServiceResult1> = s.object<DisputeServiceResult1>({
  errorMessage: s.optional(s.string()),
  success: s.boolean(),
});
