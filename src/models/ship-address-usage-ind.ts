import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates when the shipping address used for this transaction was first used with the 3DS
 * Requestor. Allowed values:
 * * **01** — This transaction
 * * **02** — Less than 30 days
 * * **03** — 30–60 days
 * * **04** — More than 60 days
 */
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
