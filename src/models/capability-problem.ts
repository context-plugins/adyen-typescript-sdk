import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  capabilityProblemEntity2Schema,
  type CapabilityProblemEntity2,
} from "./capability-problem-entity2.js";
import { verificationErrorSchema, type VerificationError } from "./verification-error.js";

export type CapabilityProblem = {
  /** Contains the type of the entity and the corresponding ID. */
  entity?: CapabilityProblemEntity2;
  /** Contains information about the verification error. */
  verificationErrors?: VerificationError[];
};

export const capabilityProblemSchema: Schema<CapabilityProblem> = s.object<CapabilityProblem>({
  entity: s.optional(s.lazy(() => capabilityProblemEntity2Schema)),
  verificationErrors: s.optional(s.array(s.lazy(() => verificationErrorSchema))),
});
