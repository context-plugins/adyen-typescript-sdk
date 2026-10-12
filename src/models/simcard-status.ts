import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the status of the SIM card in the payment terminal. Can be updated and received only at
 * terminal level, and only for models that support cellular connectivity.
 *
 * Possible values:
 * * **ACTIVATED**: the SIM card is activated. Cellular connectivity may still need to be enabled on
 *   the terminal itself, in the **Network** settings.
 * * **INVENTORY**: the SIM card is not activated. The terminal can't use cellular connectivity.
 */
export const SimcardStatus = {
  Activated: "ACTIVATED",
  Inventory: "INVENTORY",
} as const;
export type SimcardStatus = (typeof SimcardStatus)[keyof typeof SimcardStatus] | (string & {});

export const simcardStatusSchema: EnumSchema<SimcardStatus> = s.enumOf<SimcardStatus>(SimcardStatus);
