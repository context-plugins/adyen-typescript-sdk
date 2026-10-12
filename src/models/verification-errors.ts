import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilityProblem1Schema, type CapabilityProblem1 } from "./capability-problem1.js";

export type VerificationErrors = {
  /** List of the verification errors. */
  problems?: CapabilityProblem1[];
};

export const verificationErrorsSchema: Schema<VerificationErrors> = s.object<VerificationErrors>({
  problems: s.optional(s.array(s.lazy(() => capabilityProblem1Schema))),
});
