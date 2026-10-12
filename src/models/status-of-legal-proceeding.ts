import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of any current or past legal action taken against the legal entity.
 *
 * Possible values: **noLegalActionsTaken**, **underJudicialAdministration**,
 * **bankruptcyInsolvency**, **otherLegalMeasures**
 *
 * If the value of this field is **noLegalActionsTaken**, then `dateOfInitiationOfLegalProceeding`
 * is not required. Otherwise, it is required.
 */
export const StatusOfLegalProceeding = {
  NoLegalActionsTaken: "noLegalActionsTaken",
  UnderJudicialAdministration: "underJudicialAdministration",
  BankruptcyInsolvency: "bankruptcyInsolvency",
  OtherLegalMeasures: "otherLegalMeasures",
} as const;
export type StatusOfLegalProceeding =
  | (typeof StatusOfLegalProceeding)[keyof typeof StatusOfLegalProceeding]
  | (string & {});

export const statusOfLegalProceedingSchema: EnumSchema<StatusOfLegalProceeding> =
  s.enumOf<StatusOfLegalProceeding>(StatusOfLegalProceeding);
