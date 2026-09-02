import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scaExemptionSchema, type ScaExemption } from "./sca-exemption.js";
import { scaStatusSchema, type ScaStatus } from "./sca-status.js";

export type ScaInformation = {
  exemption?: ScaExemption;
  status: ScaStatus;
};

export const scaInformationSchema: Schema<ScaInformation> = s.object<ScaInformation>({
  exemption: s.optional(s.lazy(() => scaExemptionSchema)),
  status: scaStatusSchema,
});
