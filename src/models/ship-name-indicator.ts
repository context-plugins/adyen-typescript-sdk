import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the Cardholder Name on the account is identical to the shipping Name used for this
 * transaction. Allowed values:
 * * **01** — Account Name identical to shipping Name
 * * **02** — Account Name different to shipping Name, Indicates whether the 3DS Requestor has
 *   experienced suspicious activity (including previous fraud) on the cardholder account. Allowed
 *   values:
 * * **01** — No suspicious activity has been observed
 * * **02** — Suspicious activity has been observed
 */
export const ShipNameIndicator = {
  _01: "01",
  _02: "02",
} as const;
export type ShipNameIndicator = (typeof ShipNameIndicator)[keyof typeof ShipNameIndicator] | (string & {});

export const shipNameIndicatorSchema: EnumSchema<ShipNameIndicator> =
  s.enumOf<ShipNameIndicator>(ShipNameIndicator);
