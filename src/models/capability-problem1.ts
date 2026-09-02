import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  capabilityProblemEntity1Schema,
  type CapabilityProblemEntity1,
} from "./capability-problem-entity1.js";
import { verificationError1Schema, type VerificationError1 } from "./verification-error1.js";

export type CapabilityProblem1 = {
  entity?: CapabilityProblemEntity1;
  verificationErrors?: VerificationError1[];
};

export const capabilityProblem1Schema: Schema<CapabilityProblem1> = s.object<CapabilityProblem1>({
  entity: s.optional(s.lazy(() => capabilityProblemEntity1Schema)),
  verificationErrors: s.optional(s.array(s.lazy(() => verificationError1Schema))),
});
