import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ShipNameIndicator = {
  _01: "01",
  _02: "02",
} as const;
export type ShipNameIndicator = (typeof ShipNameIndicator)[keyof typeof ShipNameIndicator] | (string & {});

export const shipNameIndicatorSchema: EnumSchema<ShipNameIndicator> =
  s.enumOf<ShipNameIndicator>(ShipNameIndicator);
