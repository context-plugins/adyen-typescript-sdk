import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaExemptionSchema, type ScaExemption } from "./sca-exemption.js";

export type CreateScaInformation = {
  exemption?: ScaExemption;
  scaOnApproval?: boolean;
};

export const createScaInformationSchema: Schema<CreateScaInformation> = s.object<CreateScaInformation>({
  exemption: s.optional(s.lazy(() => scaExemptionSchema)),
  scaOnApproval: s.optional(s.boolean()),
});
