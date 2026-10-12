import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The text shown on the payment terminal, either the name or the cause of the nonprofit
 * organization.
 */
export const DisplayTextField2 = {
  CauseName: "causeName",
  NonprofitName: "nonprofitName",
} as const;
export type DisplayTextField2 = (typeof DisplayTextField2)[keyof typeof DisplayTextField2] | (string & {});

export const displayTextField2Schema: EnumSchema<DisplayTextField2> =
  s.enumOf<DisplayTextField2>(DisplayTextField2);
