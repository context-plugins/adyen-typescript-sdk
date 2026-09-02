import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimcardStatus = {
  Activated: "ACTIVATED",
  Inventory: "INVENTORY",
} as const;
export type SimcardStatus = (typeof SimcardStatus)[keyof typeof SimcardStatus] | (string & {});

export const simcardStatusSchema: EnumSchema<SimcardStatus> = s.enumOf<SimcardStatus>(SimcardStatus);
