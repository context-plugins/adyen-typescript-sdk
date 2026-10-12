import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * On a terminal that supports 3G or 4G connectivity, indicates the status of the primary SIM card
 * in the terminal.
 */
export const Status31 = {
  Activated: "activated",
  Deactivated: "deactivated",
  Deprecated: "deprecated",
  Inventory: "inventory",
  ReadyForActivation: "readyForActivation",
} as const;
export type Status31 = (typeof Status31)[keyof typeof Status31] | (string & {});

export const status31Schema: EnumSchema<Status31> = s.enumOf<Status31>(Status31);
