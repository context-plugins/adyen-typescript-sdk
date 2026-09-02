import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScaExemption = {
  SetByPlatform: "setByPlatform",
  InitialLimit: "initialLimit",
  LowerLimit: "lowerLimit",
  NotRegulated: "notRegulated",
  AlreadyPerformed: "alreadyPerformed",
} as const;
export type ScaExemption = (typeof ScaExemption)[keyof typeof ScaExemption] | (string & {});

export const scaExemptionSchema: EnumSchema<ScaExemption> = s.enumOf<ScaExemption>(ScaExemption);
