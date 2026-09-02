import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShipAddressUsageInd = {
  _01: "01",
  _02: "02",
  _03: "03",
  _04: "04",
} as const;
export type ShipAddressUsageInd =
  | (typeof ShipAddressUsageInd)[keyof typeof ShipAddressUsageInd]
  | (string & {});

export const shipAddressUsageIndSchema: EnumSchema<ShipAddressUsageInd> =
  s.enumOf<ShipAddressUsageInd>(ShipAddressUsageInd);
