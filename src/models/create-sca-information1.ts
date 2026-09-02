import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaExemptionSchema, type ScaExemption } from "./sca-exemption.js";

export type CreateScaInformation1 = {
  exemption?: ScaExemption;
  scaOnApproval?: boolean;
};

export const createScaInformation1Schema: Schema<CreateScaInformation1> = s.object<CreateScaInformation1>({
  exemption: s.optional(s.lazy(() => scaExemptionSchema)),
  scaOnApproval: s.optional(s.boolean()),
});
