import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScaStatus = {
  NotPerformed: "notPerformed",
  Pending: "pending",
  Performed: "performed",
} as const;
export type ScaStatus = (typeof ScaStatus)[keyof typeof ScaStatus] | (string & {});

export const scaStatusSchema: EnumSchema<ScaStatus> = s.enumOf<ScaStatus>(ScaStatus);
