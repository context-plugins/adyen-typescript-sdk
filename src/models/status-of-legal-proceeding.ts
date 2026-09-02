import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
