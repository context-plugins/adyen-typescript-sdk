import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ForceEntryMode = {
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
  CheckReader: "CheckReader",
} as const;
export type ForceEntryMode = (typeof ForceEntryMode)[keyof typeof ForceEntryMode] | (string & {});

export const forceEntryModeSchema: EnumSchema<ForceEntryMode> = s.enumOf<ForceEntryMode>(ForceEntryMode);
