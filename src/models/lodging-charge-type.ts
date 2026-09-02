import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LodgingChargeType = {
  AdvanceDeposit: "advanceDeposit",
  NoShow: "noShow",
  Stay: "stay",
} as const;
export type LodgingChargeType = (typeof LodgingChargeType)[keyof typeof LodgingChargeType] | (string & {});

export const lodgingChargeTypeSchema: EnumSchema<LodgingChargeType> =
  s.enumOf<LodgingChargeType>(LodgingChargeType);
