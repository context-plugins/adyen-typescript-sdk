import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntryMode = {
  Rfid: "RFID",
  Keyed: "Keyed",
  Manual: "Manual",
  File: "File",
  Scanned: "Scanned",
  MagStripe: "MagStripe",
  Icc: "ICC",
  SynchronousIcc: "SynchronousICC",
  Tapped: "Tapped",
  Contactless: "Contactless",
  Mobile: "Mobile",
} as const;
export type EntryMode = (typeof EntryMode)[keyof typeof EntryMode] | (string & {});

export const entryModeSchema: EnumSchema<EntryMode> = s.enumOf<EntryMode>(EntryMode);
