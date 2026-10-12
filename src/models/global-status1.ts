import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Global status of a POI Server or POI Terminal. Possible values:
 * * **Busy**
 * * **Maintenance**
 * * **OK**
 * * **Unreachable**
 */
export const GlobalStatus1 = {
  Ok: "OK",
  Busy: "Busy",
  Maintenance: "Maintenance",
  Unreachable: "Unreachable",
} as const;
export type GlobalStatus1 = (typeof GlobalStatus1)[keyof typeof GlobalStatus1] | (string & {});

export const globalStatus1Schema: EnumSchema<GlobalStatus1> = s.enumOf<GlobalStatus1>(GlobalStatus1);
